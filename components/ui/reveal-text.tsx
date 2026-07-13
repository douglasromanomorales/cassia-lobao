"use client";

import { motion } from "framer-motion";
import { Children, Fragment, isValidElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
};

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
};

const item = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

// Aceita texto puro ou children mistos (ex.: string + <br /> + string) sem
// perder a animação palavra-a-palavra. Cada <br /> encontrado inicia uma
// nova "linha"; dentro de cada linha, strings são quebradas em palavras
// (cada uma animada individualmente) e qualquer outro nó React é tratado
// como uma unidade própria, animada do mesmo jeito.
function splitIntoLines(children: ReactNode): ReactNode[][] {
  const lines: ReactNode[][] = [[]];

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === "br") {
      lines.push([]);
      return;
    }

    const currentLine = lines[lines.length - 1];

    if (typeof child === "string") {
      currentLine.push(...child.split(" ").filter(Boolean));
      return;
    }

    if (child !== null && child !== undefined && child !== false) {
      currentLine.push(child);
    }
  });

  return lines;
}

export function RevealText({
  children,
  as = "p",
  className,
  delay = 0,
}: RevealTextProps) {
  const lines = splitIntoLines(children);
  const Component = motionTags[as];

  return (
    <Component
      className={cn("overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      custom={delay}
      variants={container}
    >
      {lines.map((words, lineIndex) => (
        <Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em]">
              <motion.span className="inline-block" variants={item}>
                {word}
              </motion.span>
            </span>
          ))}
        </Fragment>
      ))}
    </Component>
  );
}
