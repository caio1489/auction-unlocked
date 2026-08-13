import { assets } from "@/lib/landing-assets";

const results = [
  {
    key: "gol",
    src: assets["Gol.webp"],
    alt: "Volkswagen Gol arrematado em leilão",
    title: "Volkswagen Gol",
    from: "R$ 33.000",
    to: "R$ 16.000",
    off: "51%",
    entrada: "R$ 4.000",
    parcelas: "30x no boleto sem juros",
  },
  {
    key: "jardim",
    src: assets["apto jardim paulista.webp"],
    alt: "Apartamento no Jardim Paulista arrematado em leilão",
    title: "Apartamento — Jardim Paulista",
    from: "R$ 850.000",
    to: "R$ 430.000",
    off: "49%",
    entrada: "R$ 107.500",
    parcelas: "60x no boleto sem juros",
  },
  {
    key: "ribeirao",
    src: assets["apto ribeirao preto.webp"],
    alt: "Apartamento em Ribeirão Preto arrematado em leilão",
    title: "Apartamento — Ribeirão Preto",
    from: "R$ 320.000",
    to: "R$ 160.000",
    off: "50%",
    entrada: "R$ 40.000",
    parcelas: "60x no boleto sem juros",
  },
  {
    key: "bmw",
    src: assets["bmw.webp"],
    alt: "BMW arrematada em leilão",
    title: "BMW",
    from: "R$ 100.000",
    to: "R$ 60.000",
    off: "40%",
    entrada: "R$ 15.000",
    parcelas: "30x no boleto sem juros",
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
            key={r.key}
            className="flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-light"
          >
            <div className="bg-brand-accent px-5 py-3 text-center">
              <span className="block text-[clamp(1.15rem,4.6vw,1.6rem)] font-extrabold uppercase leading-tight tracking-[0.02em] text-brand-on-dark">
                Desconto de {r.off}
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

            <figcaption className="flex flex-1 flex-col gap-4 border-t border-brand-border bg-white px-5 py-5">
              <span className="text-center text-base font-bold text-brand-on-light sm:text-lg">
                {r.title}
              </span>

              <div className="rounded-2xl bg-brand-light px-4 py-4 text-center">
                <span className="block text-sm font-bold uppercase tracking-[0.12em] text-brand-on-light/55 line-through sm:text-base">
                  De {r.from}
                </span>
                <span className="mt-1 block text-[clamp(1.7rem,7vw,2.4rem)] font-extrabold leading-none text-brand-accent">
                  por {r.to}
                </span>
              </div>

              <div className="rounded-2xl border-2 border-brand-accent/25 bg-brand-accent/8 px-4 py-4 text-center">
                <span className="block text-xs font-extrabold uppercase tracking-[0.2em] text-brand-on-light/60">
                  Entrada
                </span>
                <span className="mt-1 block text-[clamp(1.3rem,5.4vw,1.8rem)] font-extrabold leading-none text-brand-on-light">
                  {r.entrada}
                </span>
                <span className="mt-2 block text-sm font-bold text-brand-accent sm:text-base">
                  + {r.parcelas}
                </span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
