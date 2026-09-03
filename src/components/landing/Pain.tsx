import { assets } from "@/lib/landing-assets";
import triangulo from "@/assets/triangulo-aviso.png.asset.json";
import { KeyRound, Home, Car, TrendingUp, ChevronDown } from "lucide-react";

export function PainAgitationSection() {
  return (
    <section className="bg-linear-to-b from-[#3a3838] to-black py-14 text-brand-on-dark sm:py-20">
      <div className="container-reading text-center">
        <span className="inline-flex rounded-full bg-brand-accent px-5 py-2 text-base font-bold text-brand-on-dark">
          Fala a verdade…
        </span>
        <h2 className="mt-6 text-[clamp(1.6rem,5.4vw,2.1rem)]">
          Você já quis fazer sua primeira arrematação, mas{" "}
          <span className="hl">trava na hora de dar o lance!</span>
        </h2>
        <p className="mt-4 text-base text-brand-on-dark/75 sm:text-lg">
          Por isso, toda vez que você senta para procurar um leilão, você pensa:
        </p>
      </div>

      <div className="container-wide mt-10">
        <img
          src={assets["dores-objecoes.png"]}
          alt="Pessoa travada na hora de arrematar, com as principais dúvidas sobre leilão"
          loading="lazy"
          width={1100}
          height={1460}
          className="mx-auto h-auto w-[min(100%,520px)] object-contain"
        />
      </div>
    </section>
  );
}

export function SolutionBridgeSection() {
  return (
    <section className="bg-brand-dark py-16 sm:py-24">
      <div className="container-reading">
        <div className="overflow-hidden rounded-[32px] bg-brand-accent pt-16">
          <div className="relative rounded-[32px] bg-white px-6 pb-12 pt-16 text-center text-brand-on-light sm:px-10">
            <img
              src={triangulo.url}
              alt="Alerta"
              width={200}
              height={200}
              loading="lazy"
              className="absolute -top-12 left-1/2 size-24 -translate-x-1/2 rounded-full object-contain ring-8 ring-white sm:size-28"
            />
            <p className="text-[clamp(1.3rem,4vw,1.7rem)] font-extrabold leading-snug">
              Você quer fazer sua primeira arrematação no leilão, mas toda vez que tenta arrematar,
              você trava. E aí passa mais um mês, mais dois, mais seis… e você{" "}
              <span className="hl">nunca sai do lugar.</span>
            </p>
            <p className="mt-6 text-[clamp(1.05rem,3.2vw,1.25rem)] text-brand-on-light/80">
              Mas e se você pudesse copiar a minha estratégia e{" "}
              <span className="hl">arrematar ainda essa semana</span>, sem precisar garimpar,
              analisar ou pesquisar do zero, e começar a achar oportunidades com{" "}
              <span className="hl">até 70% de desconto</span> e parcelado, isso te ajudaria?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: KeyRound, text: "Destravar a sua primeira arrematação de uma vez por todas" },
  { icon: Home, text: "Encontrar imóveis reais desocupados com grandes descontos" },
  { icon: Car, text: "Comprar carros com até 70% de desconto e sem batida" },
  {
    icon: TrendingUp,
    text: "Parar de adiar e finalmente começar a lucrar no mundo dos leilões",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative bg-brand-light pb-20 pt-14 sm:pt-20">
      <div className="container-wide">
        <h2 className="text-center text-[clamp(1.6rem,5.4vw,2.1rem)] text-brand-on-light">
          Com o <span className="hl">mini curso meu primeiro arremate</span> você vai
        </h2>
        <div className="mx-auto mt-8 grid max-w-[730px] gap-4 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-border bg-white px-6 py-7 text-center"
            >
              <Icon aria-hidden className="size-8 text-brand-accent" strokeWidth={2.4} />
              <p className="text-[15px] font-bold leading-snug text-brand-on-light">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <span
        aria-hidden
        className="absolute -bottom-6 left-1/2 grid size-12 -translate-x-1/2 place-items-center rounded-full bg-brand-accent ring-8 ring-white"
      >
        <ChevronDown className="size-6 text-brand-on-dark" strokeWidth={3} />
      </span>
    </section>
  );
}