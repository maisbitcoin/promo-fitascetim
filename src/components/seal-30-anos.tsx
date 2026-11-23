import { cn } from "@/lib/utils";

/** Selo vetorial independente de arquivos hospedados no Lovable. */
export function Seal30Anos({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Mundo das Fitas — mais de 30 anos atendendo clientes"
      className={cn(
        "seal-glow float flex aspect-square items-center justify-center rounded-full border-[5px] border-gold bg-ink p-3 text-center text-ink-foreground shadow-xl",
        className,
      )}
    >
      <div className="flex size-full flex-col items-center justify-center rounded-full border border-gold/70 px-2">
        <span className="text-[0.55em] font-bold uppercase tracking-[0.2em] text-gold">Mundo das Fitas</span>
        <span className="font-display text-[2.7em] font-black leading-none text-gold">30</span>
        <span className="text-[0.58em] font-bold uppercase tracking-[0.16em]">anos de tradição</span>
      </div>
    </div>
  );
}
