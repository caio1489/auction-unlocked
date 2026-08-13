import { Lock } from "lucide-react";
import { offer } from "@/config/offer";
import { Cta } from "./Cta";

const lotes = [
  { label: "2º lote", price: "R$ 89", note: "em breve" },
  { label: "3º lote", price: "R$ 119", note: "em breve" },
];

export function LotesSection() {
  return (
    <section className="bg-brand-on-light py-12 text-brand-on-dark sm:py-16">
      <div className="container-reading">
        <div className="rounded-[28px] border border-white/10 bg-black/40 px-5 py-8 sm:px-10 sm:py-10">
          <div className="flex justify-center">
            <span className="rounded-full bg-brand-accent px-5 py-2 text-center text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-on-dark sm:text-xs">
              1º lote · valor promocional · poucas vagas
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-[520px] text-center text-lg leading-snug text-brand-on-dark/90 sm:text-xl">
            Para que mais pessoas possam ter oportunidade de participar,{" "}
            <em className="font-extrabold not-italic">o primeiro lote tem valor especial.</em>
          </p>

          <hr className="my-7 border-white/10" />

          <p className="text-center text-lg font-semibold sm:text-xl">
            Hoje você pode garantir tudo isso por:
          </p>
          <p className="mt-1 text-center text-base text-brand-on-dark/70">
            De: <span className="line-through">{offer.anchorTotal}</span>
          </p>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
            <div className="rounded-2xl border-2 border-brand-accent bg-brand-accent/12 px-2 py-4 text-center shadow-[0_0_0_4px_rgba(47,158,51,0.12)]">
              <span className="inline-flex rounded-full bg-brand-accent px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-brand-on-dark sm:text-[11px]">
                Lote especial
              </span>
              <p className="mt-3 leading-none text-brand-accent">
                <span className="text-sm font-bold sm:text-base">R$ </span>
                <span className="text-[clamp(1.6rem,8vw,2.6rem)] font-extrabold">29</span>
                <span className="align-super text-xs font-bold sm:text-sm">,00</span>
              </p>
              <p className="mt-2 text-[11px] font-semibold text-brand-on-dark/80 sm:text-sm">
                à vista no PIX
              </p>
            </div>

            {lotes.map((l) => (
              <div
                key={l.label}
                className="rounded-2xl border border-white/12 px-2 py-4 text-center opacity-60"
              >
                <span className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-brand-on-dark/80 sm:text-[11px]">
                  {l.label}
                </span>
                <p className="mt-3 text-[clamp(1.4rem,7vw,2.2rem)] font-extrabold leading-none text-brand-on-dark/55">
                  {l.price}
                </p>
                <p className="mt-2 text-[11px] font-semibold text-brand-on-dark/50 sm:text-sm">
                  {l.note}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-center text-base font-bold uppercase tracking-[0.06em] text-brand-on-dark/85 sm:text-lg">
            Preço exclusivo enquanto durar o lote.
          </p>

          <div className="mt-5 flex justify-center">
            <Cta label="Garantir vaga 1º lote" className="w-full" />
          </div>

          <div className="mt-6">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/12">
              <div className="h-full w-[83%] rounded-full bg-linear-to-r from-brand-accent to-brand-accent-strong" />
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-brand-on-dark/85 sm:text-base">
              <span className="text-lg font-extrabold text-brand-accent sm:text-xl">83%</span> dos
              ingressos vendidos a R$ 29,00
            </p>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-brand-on-dark/80">
            <Lock aria-hidden className="size-4 shrink-0 text-brand-accent" strokeWidth={2.6} />
            <span className="text-sm font-bold sm:text-base">Compra Segura</span>
          </div>
        </div>
      </div>
    </section>
  );
}
