import { assets } from "@/lib/landing-assets";

const results = [
  {
    label: "RESULTADO 01",
    src: assets["Gol.webp"],
    alt: "Volkswagen Gol arrematado em leilão",
    title: "Volkswagen Gol",
    from: "R$ 42.000",
    to: "R$ 21.000",
    off: "50% OFF",
  },
  {
    label: "RESULTADO 02",
    src: assets["apto jardim paulista.webp"],
    alt: "Apartamento no Jardim Paulista arrematado em leilão",
    title: "Apartamento — Jardim Paulista",
    from: "R$ 850.000",
    to: "R$ 430.000",
    off: "49% OFF",
  },
  {
    label: "RESULTADO 03",
    src: assets["apto ribeirao preto.webp"],
    alt: "Apartamento em Ribeirão Preto arrematado em leilão",
    title: "Apartamento — Ribeirão Preto",
    from: "R$ 320.000",
    to: "R$ 160.000",
    off: "50% OFF",
  },
  {
    label: "RESULTADO 04",
    src: assets["bmw.webp"],
    alt: "BMW arrematada em leilão",
    title: "BMW",
    from: "R$ 100.000",
    to: "R$ 60.000",
    off: "40% OFF",
  },
];

export function ResultsProofSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-reading text-center">
        <h2 className="text-[clamp(1.6rem,5.4vw,2.1rem)] text-brand-on-light">
          Veja <span className="hl">resultados reais</span> de quem já aplicou esse método e
          comprou parcelado no leilão.
        </h2>
        <p className="mt-3 text-sm font-medium text-brand-on-light/70 sm:text-base">
          4 exemplos — com tabela, lance, entrada e desconto.
        </p>
      </div>

      <div className="container-wide mt-10 grid gap-6 md:grid-cols-2">
        {results.map((r) => (
          <figure
            key={r.label}
            className="overflow-hidden rounded-3xl border border-brand-border bg-brand-light"
          >
            <div className="flex items-center justify-between gap-3 bg-brand-accent px-5 py-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-on-dark">
                {r.label}
              </span>
              <span className="rounded-full bg-brand-on-dark px-3 py-1 text-xs font-extrabold text-brand-accent">
                {r.off}
              </span>
            </div>
            <img
              src={r.src}
              alt={r.alt}
              loading="lazy"
              width={1000}
              height={750}
              className="h-auto w-full object-contain"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-border bg-white px-5 py-4">
              <span className="text-base font-bold text-brand-on-light">{r.title}</span>
              <span className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-brand-on-light/50 line-through">
                  De {r.from}
                </span>
                <span className="text-lg font-extrabold text-brand-accent">por {r.to}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}