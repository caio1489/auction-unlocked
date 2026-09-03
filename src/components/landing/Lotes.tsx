import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";
import { offer } from "@/config/offer";
import { Cta } from "./Cta";

const START_SEATS = 44;
const MAX_SEATS = 48;
const TOTAL_SEATS = 50;
const RAMP_MS = 150_000; // 2min30s para ir de 44 até 48

export function LotesSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 -> 1 ao longo dos 2min30
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const tick = (start: number) => {
      const loop = () => {
        const t = Math.min(1, (Date.now() - start) / RAMP_MS);
        setProgress(t);
        if (t < 1) raf = requestAnimationFrame(loop);
      };
      loop();
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started.current) {
          started.current = true;
          tick(Date.now());
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const filled = START_SEATS + progress * (MAX_SEATS - START_SEATS);
  const seats = Math.min(MAX_SEATS, Math.floor(filled));
  const pct = (filled / TOTAL_SEATS) * 100;

  return (
    <section className="bg-brand-on-light py-12 text-brand-on-dark sm:py-16">
      <div className="container-reading">
        <div
          ref={ref}
          className="rounded-[28px] border border-white/10 bg-black/40 px-5 py-8 sm:px-10 sm:py-10"
        >
          <div className="flex justify-center">
            <span className="whitespace-nowrap rounded-full bg-brand-accent px-3.5 py-1.5 text-center text-[10px] font-extrabold uppercase tracking-[0.08em] text-brand-on-dark sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.14em]">
              Oferta relâmpago · poucas vagas
            </span>
          </div>

          <p className="mx-auto mt-4 max-w-[330px] text-center text-base leading-snug text-brand-on-dark/90 sm:max-w-[520px] sm:text-xl">
            Para que mais pessoas possam participar,{" "}
            <em className="font-extrabold not-italic">liberamos hoje 50 vagas promocionais.</em>
          </p>

          <hr className="my-5 border-white/10" />

          <p className="whitespace-nowrap text-center text-[15px] font-semibold sm:text-xl">
            Hoje você pode garantir tudo isso por:
          </p>
          <p className="mt-1 text-center text-sm text-brand-on-dark/70 sm:text-base">
            De: <span className="line-through">{offer.anchorTotal}</span>
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-2xl border-2 border-brand-accent bg-brand-accent/12 px-2 py-4 text-center shadow-[0_0_0_4px_rgba(47,158,51,0.12)]">
              <span className="inline-flex rounded-full bg-brand-accent px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-brand-on-dark sm:text-[11px]">
                Oferta relâmpago
              </span>
              <p className="mt-3 leading-none text-brand-accent">
                <span className="text-sm font-bold sm:text-base">R$ </span>
                <span className="text-[clamp(1.6rem,8vw,2.6rem)] font-extrabold">69</span>
                <span className="align-super text-xs font-bold sm:text-sm">,90</span>
              </p>
              <p className="mt-2 text-[11px] font-semibold text-brand-on-dark/80 sm:text-sm">
                poucas vagas
              </p>
            </div>

            <div className="rounded-2xl border border-white/12 px-2 py-4 text-center opacity-60">
              <span className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-brand-on-dark/80 sm:text-[11px]">
                Valor original
              </span>
              <p className="mt-3 text-[clamp(1.4rem,7vw,2.2rem)] font-extrabold leading-none text-brand-on-dark/55">
                R$ 335
              </p>
              <p className="mt-2 text-[11px] font-semibold text-brand-on-dark/50 sm:text-sm">
                fora da promoção
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-base font-bold uppercase tracking-[0.06em] text-brand-on-dark/85 sm:text-lg">
            Preço exclusivo enquanto durarem as vagas.
          </p>

          <div className="mt-5 flex justify-center">
            <Cta label="GARANTIR OFERTA RELÂMPAGO" className="w-full" />
          </div>

          <div className="mt-6">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/12">
              <div
                className="h-full rounded-full bg-linear-to-r from-brand-accent to-brand-accent-strong transition-all duration-1000 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-brand-on-dark/85 sm:text-base">
              <span className="text-lg font-extrabold text-brand-accent sm:text-xl">{seats}</span>{" "}
              {seats === 1 ? "pessoa comprou" : "pessoas compraram"} de 48 vagas
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
