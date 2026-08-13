import { assets } from "@/lib/landing-assets";
import { offer } from "@/config/offer";

export function HeroSection() {
  return (
    <section className="bg-brand-light pb-10 pt-10 sm:pt-14">
      <div className="container-reading text-center">
        <p className="text-base font-bold text-brand-on-light/70 sm:text-lg">
          {offer.liveLabel} — {offer.liveTime}
        </p>
        <h1 className="mt-4 text-[clamp(1.65rem,5.2vw,2.6rem)] font-extrabold text-brand-on-light">
          Copie minha estratégia para comprar imóveis e veículos com{" "}
          <span className="hl">25% de entrada</span> +{" "}
          <span className="hl">60x no boleto</span>, sem juros e com{" "}
          <span className="hl">60% de desconto</span> no leilão.
        </h1>

        <div className="mt-7 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-5 py-3 text-sm font-semibold text-brand-on-light shadow-sm sm:text-base">
            <span
              aria-hidden
              className="grid size-5 place-items-center rounded-md bg-brand-accent text-[11px] font-black text-brand-on-dark"
            >
              ✓
            </span>
            Sua primeira arrematação ainda essa semana
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