import { assets } from "@/lib/landing-assets";

const objections = [
  "Não sei se esse leilão é falso.",
  "Será que meu dinheiro vai ficar travado durante meses?",
  "E se o imóvel estiver ocupado?",
  "Será que o carro tem problemas mecânicos?",
];

export function PainAgitationSection() {
  return (
    <section className="bg-brand-dark py-14 text-brand-on-dark sm:py-20">
      <div className="container-reading text-center">
        <span className="inline-flex rounded-full bg-brand-accent px-5 py-2 text-sm font-bold text-brand-on-dark">
          Fala a verdade…
        </span>
        <h2 className="mt-6 text-[clamp(1.4rem,4vw,2.1rem)]">
          Você já quis fazer sua primeira arrematação, mas{" "}
          <span className="hl">trava na hora de dar o lance!</span>
        </h2>
      </div>

      <div className="container-wide mt-10 grid items-center gap-8 md:grid-cols-2">
        <img
          src={assets["Foto do expert 2.jpg"]}
          alt="Retrato usado na secção de objeções sobre leilões"
          loading="lazy"
          width={900}
          height={1100}
          className="mx-auto aspect-4/5 w-full max-w-[440px] rounded-3xl object-cover"
        />
        <ul className="flex flex-col gap-4">
          {objections.map((o) => (
            <li
              key={o}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base font-semibold sm:text-lg"
            >
              <span
                aria-hidden
                className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-brand-accent text-[11px] font-black text-brand-on-dark"
              >
                !
              </span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SolutionBridgeSection() {
  return (
    <section className="bg-brand-dark pb-16 sm:pb-24">
      <div className="container-reading">
        <div className="rounded-[32px] bg-white px-6 py-10 text-center text-brand-on-light sm:px-10">
          <p className="text-[clamp(1.1rem,3vw,1.5rem)] font-extrabold">
            Você quer fazer sua primeira arrematação no leilão, mas toda vez que tenta arrematar,
            você trava. E aí passa mais um mês, mais dois, mais seis… e você{" "}
            <span className="hl">nunca sai do lugar.</span>
          </p>
          <p className="mt-6 text-base text-brand-on-light/80 sm:text-lg">
            Mas e se você pudesse copiar a minha estratégia e{" "}
            <span className="hl">arrematar ainda essa semana</span>, sem precisar garimpar,
            analisar ou pesquisar do zero, e começar a achar oportunidades com{" "}
            <span className="hl">até 70% de desconto</span> e parcelado, isso te ajudaria?
          </p>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  "Destravar a sua primeira arrematação de uma vez por todas",
  "Encontrar imóveis reais desocupados com grandes descontos",
  "Comprar carros com até 70% de desconto e sem batida",
  "Parar de adiar e finalmente começar a lucrar no mundo dos leilões",
];

export function BenefitsSection() {
  return (
    <section className="bg-brand-light py-14 sm:py-20">
      <div className="container-wide">
        <h2 className="text-center text-[clamp(1.4rem,4vw,2.1rem)] text-brand-on-light">
          Com um <span className="hl">aulão ao vivo</span> você vai
        </h2>
        <div className="mx-auto mt-8 grid max-w-[860px] gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex flex-col items-center gap-4 rounded-3xl border border-brand-border bg-white px-6 py-8 text-center"
            >
              <span
                aria-hidden
                className="grid size-11 place-items-center rounded-2xl bg-brand-accent text-lg font-black text-brand-on-dark"
              >
                ✓
              </span>
              <p className="text-base font-bold text-brand-on-light">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}