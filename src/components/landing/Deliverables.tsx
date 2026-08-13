import { assets } from "@/lib/landing-assets";

const deliverablesA = [
  {
    src: assets["entregavel-10-sites-titulo.png"],
    alt: "Entregável com os 10 sites de leilão validados",
    title: "10 sites de leilão: na sua mão",
    desc: "Analisados e validados por advogados para você não ter dor de cabeça.",
  },
  {
    src: assets["entregavel-guia-titulo.png"],
    alt: "Entregável do guia para identificar boas oportunidades",
    title: "Guia para identificar boas oportunidades",
    desc: "Você receberá o guia completo da lógica usada por Paulo Machado para identificar boas oportunidades.",
  },
  {
    src: assets[
      "0SIWZnkc3Wu6WzlGdePSEF-img-1_1786639691000_na1fn_ZW50cmVnYXZlbC1jb21wcmFyLXBhcmNlbGFkby1ib2xldG8tbGVpbGFv.webp"
    ],
    alt: "Entregável sobre como comprar parcelado no leilão com boleto",
    title: "Como comprar parcelado no leilão",
    desc: "Descubra uma estratégia validada para comprar dando 25% de entrada e mais 60x no boleto.",
  },
];

const deliverablesB = [
  {
    src: assets["entregavel-como-identificar-leilao-falso-3-linhas.png"],
    alt: "Entregável sobre como identificar se um leilão é real ou falso",
    title: "Como identificar se um leilão é real ou falso",
    desc: "Descubra como analisar sozinho se um leiloeiro é real ou falso em menos de 5 minutos.",
  },
  {
    src: assets["entregavel-carros-titulo.png"],
    alt: "Entregável sobre compra de carros sem batida",
    title: "Como comprar carros sem batida",
    desc: "Entenda como comprar carros que vão lhe evitar dor de cabeça e problemas após a compra.",
  },
  {
    src: assets["entregavel-comprar-imoveis-desocupados-verde.png"],
    alt: "Entregável sobre compra de imóveis desocupados",
    title: "Como comprar imóveis desocupados",
    desc: "Você receberá um guia personalizado para identificar se um imóvel está desocupado ou ocupado para evitar problemas.",
  },
];

type Item = (typeof deliverablesA)[number];

function DeliverableCards({ items, offset = 0 }: { items: Item[]; offset?: number }) {
  return (
    <div className="container-wide mt-10 flex flex-col gap-6">
      {items.map((d, i) => (
        <article
          key={d.title}
          className="grid overflow-hidden rounded-[28px] bg-brand-light md:grid-cols-2"
        >
          <div className={`bg-brand-accent ${(i + offset) % 2 === 1 ? "md:order-2" : ""}`}>
            <img
              src={d.src}
              alt={d.alt}
              loading="lazy"
              width={900}
              height={640}
              className="h-full max-h-[340px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-3 px-6 py-8 sm:px-9">
            <h3 className="text-[clamp(1.15rem,3vw,1.6rem)] text-brand-on-light">{d.title}</h3>
            <p className="text-base leading-relaxed text-brand-on-light/75">{d.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function DeliverablesSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-reading text-center">
        <span className="inline-flex rounded-full bg-brand-dark px-6 py-3 text-base font-semibold text-brand-on-dark shadow-lg">
          E tem mais…
        </span>
        <h2 className="mt-6 text-[clamp(1.4rem,4vw,2.1rem)] text-brand-on-light">
          Veja tudo que você vai receber <span className="hl">ao vivo</span>
        </h2>
      </div>
      <DeliverableCards items={deliverablesA} />
    </section>
  );
}

export function DeliverablesBonusSection() {
  return (
    <section className="bg-white pb-14 sm:pb-20">
      <div className="container-reading text-center">
        <span className="inline-flex rounded-full bg-brand-dark px-6 py-3 text-base font-semibold text-brand-on-dark shadow-lg">
          Ainda não acabou!
        </span>
        <h2 className="mt-6 text-[clamp(1.4rem,4vw,2.1rem)] text-brand-on-light">
          Você também vai <span className="hl">receber:</span>
        </h2>
      </div>
      <DeliverableCards items={deliverablesB} offset={1} />
    </section>
  );
}