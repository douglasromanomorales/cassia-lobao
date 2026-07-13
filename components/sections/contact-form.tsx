"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle, RefreshCcw } from "lucide-react";
import { brand } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

const eventTypes = ["Casamento", "Evento", "Corporativo", "Outro"];

const fieldClass =
  "w-full bg-transparent border-b outline-none py-3 text-sm md:text-base text-ink placeholder:text-ink/35 transition-colors duration-300";
const labelClass = "block text-[11px] tracking-widest2 uppercase text-ink/45 mb-2";
const errorClass = "mt-1.5 text-xs text-coral";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"nome" | "email" | "telefone" | "mensagem", string>>;

// Formulário de contato — envia por e-mail via FormSubmit.co, usando
// brand.email diretamente como destino (sem conta, sem chave de API: o
// serviço manda uma confirmação única por e-mail no primeiro envio real,
// que a Cássia/você precisa clicar uma vez para ativar). Se falhar, o
// WhatsApp real já configurado aparece como saída manual imediata.
export function ContactForm() {
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [waFallback, setWaFallback] = useState<string | null>(null);

  const channelReady = Boolean(brand.email) || Boolean(brand.whatsapp);

  function validate(form: FormData): Errors {
    const next: Errors = {};
    const nome = String(form.get("nome") || "").trim();
    const email = String(form.get("email") || "").trim();
    const telefone = String(form.get("telefone") || "").trim();
    const mensagem = String(form.get("mensagem") || "").trim();

    if (nome.length < 2) next.nome = "Conte seu nome, para sabermos com quem estamos falando.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Digite um e-mail válido.";
    if (telefone.replace(/\D/g, "").length < 10) next.telefone = "Digite um telefone com DDD.";
    if (mensagem.length < 5) next.mensagem = "Conte um pouco sobre a sua celebração.";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const fieldErrors = validate(form);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    const nome = String(form.get("nome") || "");
    const email = String(form.get("email") || "");
    const telefone = String(form.get("telefone") || "");
    const data = String(form.get("data") || "");
    const mensagem = String(form.get("mensagem") || "");

    const waMessage = [
      `Olá! Meu nome é ${nome}.`,
      `Tipo de evento: ${eventType}${data ? ` — ${data}` : ""}`,
      `Mensagem: ${mensagem}`,
      `Contato: ${telefone} · ${email}`,
    ].join("\n");

    setStatus("submitting");

    if (brand.email) {
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${brand.email}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            Nome: nome,
            "E-mail": email,
            "Telefone / WhatsApp": telefone,
            "Tipo de evento": eventType,
            "Data do evento": data || "não informada",
            Mensagem: mensagem,
            _subject: `Novo contato pelo site — ${nome}`,
            _template: "table",
            _captcha: "false",
          }),
        });
        if (res.ok) {
          setStatus("success");
          formEl.reset();
          setEventType(eventTypes[0]);
          return;
        }
        throw new Error("formsubmit failed");
      } catch {
        setWaFallback(whatsappLink(waMessage));
        setStatus("error");
        return;
      }
    }

    // sem e-mail configurado: WhatsApp direto
    const wa = whatsappLink(waMessage);
    if (wa) {
      window.open(wa, "_blank", "noopener,noreferrer");
      setStatus("success");
      return;
    }
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-16 max-w-md text-center"
      >
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-cream"
        >
          <Check size={22} strokeWidth={1.8} />
        </motion.span>
        <p className="font-display italic text-2xl text-ink mb-2">Mensagem enviada.</p>
        <p className="text-sm text-ink/60 leading-relaxed">
          Obrigada pelo contato — a Cássia responde pessoalmente, o mais breve possível.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-20 max-w-2xl text-left"
    >
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-x-10">
        <div>
          <label className={labelClass} htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            className={`${fieldClass} ${errors.nome ? "border-coral" : "border-ink/20 focus:border-ink"}`}
            placeholder="Seu nome"
            aria-invalid={Boolean(errors.nome)}
          />
          <AnimatePresence>
            {errors.nome && (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={errorClass}>
                {errors.nome}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div>
          <label className={labelClass} htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`${fieldClass} ${errors.email ? "border-coral" : "border-ink/20 focus:border-ink"}`}
            placeholder="seu@email.com"
            aria-invalid={Boolean(errors.email)}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={errorClass}>
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div>
          <label className={labelClass} htmlFor="telefone">Telefone / WhatsApp</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            className={`${fieldClass} ${errors.telefone ? "border-coral" : "border-ink/20 focus:border-ink"}`}
            placeholder="(13) 90000-0000"
            aria-invalid={Boolean(errors.telefone)}
          />
          <AnimatePresence>
            {errors.telefone && (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={errorClass}>
                {errors.telefone}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div>
          <label className={labelClass} htmlFor="tipoEvento">Tipo de evento</label>
          <select
            id="tipoEvento"
            name="tipoEvento"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className={`${fieldClass} border-ink/20 focus:border-ink`}
          >
            {eventTypes.map((t) => (
              <option key={t} value={t} className="bg-cream text-ink">
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="data">Data do evento (opcional)</label>
          <input id="data" name="data" type="date" className={`${fieldClass} border-ink/20 focus:border-ink`} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={3}
            className={`${fieldClass} resize-none ${errors.mensagem ? "border-coral" : "border-ink/20 focus:border-ink"}`}
            placeholder="Conte um pouco sobre a sua celebração"
            aria-invalid={Boolean(errors.mensagem)}
          />
          <AnimatePresence>
            {errors.mensagem && (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={errorClass}>
                {errors.mensagem}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={!channelReady || status === "submitting"}
          className="inline-flex items-center gap-3 bg-ink text-cream px-9 py-4 text-sm tracking-widest2 uppercase hover:bg-sage-dark transition-colors duration-500 ease-bloom disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Enviando..." : "Vamos conversar"}
          <ArrowUpRight size={16} strokeWidth={1.6} />
        </button>

        {!channelReady && (
          <p className="text-xs text-ink/45 text-center max-w-sm">
            Canal de contato em configuração — por enquanto, fale pelo Instagram.
          </p>
        )}

        <AnimatePresence>
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="inline-flex items-center gap-2 text-xs text-coral">
                <RefreshCcw size={12} strokeWidth={1.8} />
                Não conseguimos enviar por e-mail agora.
              </p>
              {waFallback && (
                <a
                  href={waFallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-sage-dark underline underline-offset-4 hover:text-ink"
                >
                  <MessageCircle size={12} strokeWidth={1.8} />
                  Falar no WhatsApp agora
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}
