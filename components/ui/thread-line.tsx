import { cn } from "@/lib/utils";

// "O Fio" — a assinatura visual recorrente do projeto, nascida da fotografia
// real do buquê (fita de cetim + terço trançados no laço). Aqui, o mesmo
// gesto vira um dispositivo de composição: uma linha coral que conecta,
// divide ou sublinha elementos — nunca um enfeite solto.
type ThreadLineProps = {
  className?: string;
  variant?: "straight" | "kink" | "curve";
  color?: string;
};

const paths: Record<NonNullable<ThreadLineProps["variant"]>, string> = {
  straight: "M2 20 L98 20",
  kink: "M2 6 L46 32 L98 14",
  curve: "M2 30 C 30 -6, 70 66, 98 10",
};

export function ThreadLine({ className, variant = "straight", color = "#EC5238" }: ThreadLineProps) {
  const d = paths[variant];
  const endpoints =
    variant === "straight"
      ? [[2, 20], [98, 20]]
      : variant === "kink"
        ? [[2, 6], [98, 14]]
        : [[2, 30], [98, 10]];

  return (
    <svg
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
    >
      <path d={d} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      {endpoints.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.4" fill={color} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}
