import { assets } from "@/lib/landing-assets";


export function HeroSection() {
  return (
    <section className="bg-brand-light pb-10 pt-8 sm:pt-12">
      <div className="container-reading text-center">
        <h1 className="text-[clamp(1.65rem,5.2vw,2.6rem)] font-extrabold text-brand-on-light">
          Copie minha estratégia para comprar imóveis e veículos com{" "}
          <span className="hl">25% de entrada</span> +{" "}
          <span className="hl">60x no boleto</span>, sem juros e com{" "}
          <span className="hl">60% de desconto</span> no leilão.
        </h1>

        <div className="mt-7 flex justify-center">
          <p className="mx-auto flex w-full max-w-[340px] items-center justify-center gap-2 rounded-full border border-brand-border bg-white px-5 py-3 text-center text-sm font-semibold text-brand-on-light shadow-sm sm:text-base">
            <span aria-hidden className="text-base leading-none sm:text-lg">
              ✅
            </span>
            <span>Sua arrematação ainda essa semana</span>
          </p>
        </div>
      </div>


      <div className="container-wide mt-10">
        <img
          src={assets["Foto que vai no lugar do celular no topo.png"]}
          alt="MacBook com apresentação do expert Paulo Machado"
          width={1400}
          height={900}
          loading="eager"
          fetchPriority="high"
          className="mx-auto h-auto w-[min(100%,750px)] object-contain"
        />
      </div>
    </section>
  );
}