import { assets } from "@/lib/landing-assets";
import { offer } from "@/config/offer";
import { Cta } from "./Cta";
import {
  Mail,
  PackageCheck,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Star,
  Check,
  Frown,
  ArrowRight,
} from "lucide-react";

const audience = [
  "Quer fazer sua primeira arrematação ainda esse mês",
  "Trava na hora de arrematar e nunca dá o lance no dia do leilão",
  "Não sabe diferenciar os leilões verdadeiros dos falsos",
  "Já comprou outros cursos sobre leilão e continua sem arrematar",
  "Quer comprar imóveis ou veículos parcelado no leilão",
  "Não tem tempo nem cabeça para comprar carros batidos de leilão e reformar",
];

export function AudienceFitSection() {
  return (
    <section className="bg-linear-to-b from-[#3a3838] to-black py-14 text-brand-on-dark sm:py-20">
      <div className="container-wide">
        <div className="rounded-[32px] bg-[#1b1a1a] px-6 py-10 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.9)] sm:px-12 sm:py-12">
          <h2 className="text-center text-[clamp(1.6rem,5.4vw,2.1rem)]">
            Esse <span className="hl">aulão ao vivo</span> é para você que:
          </h2>
          <ul className="mx-auto mt-8 flex max-w-[820px] flex-col gap-4">
            {audience.map((a) => (
              <li key={a} className="flex items-start gap-3 text-base text-brand-on-dark/90">
                <Check
                  aria-hidden
                  className="mt-1 size-4 shrink-0 text-brand-accent"
                  strokeWidth={4}
                />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FinalPitchSection() {
  return (
    <section className="bg-linear-to-b from-[#2b2a2a] to-black py-7 text-brand-on-dark sm:py-9">
      <div className="container-reading text-center">
        <span className="inline-flex rounded-full bg-brand-accent px-6 py-2 text-sm font-bold text-brand-on-dark">
          Enfim…
        </span>
        <p className="mx-auto mt-4 max-w-[620px] text-[clamp(1.4rem,4.4vw,2.1rem)] font-extrabold leading-tight">
          Se você quer destravar sua primeira arrematação ainda esse mês, esse{" "}
          <span className="hl">aulão ao vivo é pra você.</span>
        </p>
      </div>
    </section>
  );
}

const stack = [
  ["10 sites de leilão: na sua mão", "R$ 47"],
  ["Guia para identificar boas oportunidades", "R$ 67"],
  ["Como identificar se um leilão é falso", "R$ 47"],
  ["Como comprar carros sem batida", "R$ 97"],
  ["Como comprar imóveis desocupados", "R$ 77"],
];

export function OfferStackSection() {
  return (
    <section className="bg-brand-light py-14 sm:py-20">
      <div className="container-reading">
        <h2 className="text-center text-[clamp(1.6rem,5.4vw,2.1rem)] text-brand-on-light">
          Recapitulando tudo que você vai receber com o{" "}
          <span className="hl">aulão ao vivo sobre leilão</span>
        </h2>

        <div className="mt-8 overflow-hidden rounded-[28px] border-2 border-brand-border bg-white shadow-[0_28px_60px_-42px_rgba(0,0,0,0.45)]">
          <ul className="flex flex-col">
            {stack.map(([label, value], i) => (
              <li
                key={label}
                className={`flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7 ${
                  i % 2 === 1 ? "bg-brand-light/70" : "bg-white"
                }`}
              >
                <span className="flex min-w-0 items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-accent text-[13px] font-black text-brand-on-dark"
                  >
                    ✓
                  </span>
                  <span className="text-[1.05rem] font-bold leading-snug text-brand-on-light sm:text-xl">
                    {label}
                  </span>
                </span>
                <span className="ml-9 shrink-0 rounded-full bg-brand-light px-3.5 py-1.5 text-base font-extrabold text-brand-on-light/50 line-through sm:ml-0 sm:text-lg">
                  {value}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-1 border-t-2 border-dashed border-brand-border bg-brand-on-light px-5 py-6 text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-on-dark/60">
              Tudo isso deveria custar
            </span>
            <span className="text-[clamp(1.9rem,7vw,2.6rem)] font-extrabold leading-none text-brand-on-dark line-through">
              {offer.anchorTotal}
            </span>
          </div>
        </div>

        <p className="mt-8 text-center text-[clamp(1.15rem,3.2vw,1.55rem)] font-extrabold text-brand-on-light">
          Mas, somente hoje, você pode ter acesso ao mega aulão sobre leilões por um valor muito
          mais acessível:
        </p>
      </div>
    </section>
  );
}


export function OfferCardSection({ id, ctaLabel }: { id?: string; ctaLabel: string }) {
  return (
    <section id={id} className="bg-white py-14 sm:py-20">
      <div className="container-wide">
        <div className="grid items-center gap-6 rounded-[32px] bg-brand-light p-5 sm:p-8 md:grid-cols-2">
          <img
            src={assets["foto com todos entregaveis .png"]}
            alt="Todos os materiais do Mega Aulão ao Vivo sobre Leilões"
            loading="lazy"
            width={1000}
            height={750}
            className="h-auto w-full rounded-3xl object-contain"
          />
          <div className="flex flex-col items-center text-center">
            <img
              src={logoAoVivo.url}
              alt="Mega Aulão ao Vivo sobre Leilões — hoje 20h01"
              loading="lazy"
              width={1000}
              height={511}
              className="h-[52px] w-auto object-contain sm:h-[64px]"
            />
            <div className="mt-3 w-full">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-on-light/60">
                {offer.shortName}
              </p>
              <p className="mt-0.5 text-[clamp(2rem,7vw,3rem)] font-extrabold leading-none text-brand-accent">
                {offer.price}
              </p>
            </div>
            <Cta label={ctaLabel} className="mt-4 w-full" />
            <ul className="mt-4 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {[
                { icon: Lock, a: "Compra", b: "Segura" },
                { icon: ShieldCheck, a: "Privacidade", b: "Protegida" },
                { icon: Star, a: "Satisfação", b: "Garantida" },
              ].map(({ icon: Icon, a, b }) => (
                <li key={a} className="flex items-center gap-1.5 text-brand-on-light/70">
                  <Icon aria-hidden className="size-4 shrink-0" strokeWidth={2.4} />
                  <span className="text-left text-[11px] font-bold leading-tight">
                    {a}
                    <br />
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


const steps = [
  {
    icon: Mail,
    title: "Acesse seu e-mail",
    desc: "Assim que finalizar a compra, você vai receber seu acesso no e-mail.",
  },
  {
    icon: PackageCheck,
    title: "Acesso ao produto",
    desc: "Você vai receber todos os entregáveis imediatamente.",
  },
  {
    icon: CheckCircle2,
    title: "Tudo pronto!",
    desc: "Agora é só copiar e ter sua primeira arrematação pronta ainda esse mês.",
  },
];

export function AccessStepsSection() {
  return (
    <section className="bg-brand-light py-14 sm:py-20">
      <div className="container-wide">
        <h2 className="text-center text-[clamp(1.6rem,5.4vw,2.1rem)] text-brand-on-light">
          Compre agora e receba seu acesso no e-mail imediatamente!
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-3xl border border-brand-border bg-white px-6 py-8 text-center"
            >
              <Icon aria-hidden className="size-9 text-brand-accent" strokeWidth={2.2} />
              <h3 className="text-lg text-brand-on-light">{title}</h3>
              <p className="text-sm text-brand-on-light/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChoiceSection() {
  return (
    <>
      <section className="bg-black py-10">
        <div className="container-wide">
          <h2 className="text-center text-[clamp(1.6rem,5.4vw,2.1rem)] text-brand-on-dark">
            Agora você tem <span className="hl">duas escolhas:</span>
          </h2>
        </div>
      </section>

      <section className="bg-brand-light py-12 sm:py-16">
        <div className="container-wide">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-brand-border bg-white px-6 py-7">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="grid size-20 shrink-0 place-items-center rounded-full bg-brand-light"
                >
                  <Frown className="size-11 text-brand-on-light/55" strokeWidth={2} />
                </span>
                <div>
                  <span className="inline-flex rounded-full bg-brand-on-light/70 px-3.5 py-1 text-xs font-bold text-brand-on-dark">
                    Opção 1
                  </span>
                  <h3 className="mt-2 text-xl text-brand-on-light">
                    Não comprar seu carro de leilão nunca
                  </h3>
                </div>
              </div>
              <p className="mt-4 flex gap-2 text-base text-brand-on-light/75">
                <ArrowRight
                  aria-hidden
                  className="mt-1 size-4 shrink-0 text-brand-on-light/50"
                  strokeWidth={3}
                />
                <span>
                  Continuar travado, adiando a sua primeira arrematação pra semana que vem, pro
                  próximo mês, pra “quando der tempo”.
                </span>
              </p>
            </div>

            <div className="rounded-3xl border border-brand-border bg-white px-6 py-7">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="grid size-20 shrink-0 place-items-center rounded-3xl bg-brand-accent"
                >
                  <Check className="size-12 text-brand-on-dark" strokeWidth={3.5} />
                </span>
                <div>
                  <span className="inline-flex rounded-full bg-brand-accent px-3.5 py-1 text-xs font-bold text-brand-on-dark">
                    Opção 2
                  </span>
                  <h3 className="mt-2 text-xl text-brand-on-light">
                    Copiar e colar o modelo validado
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-base text-brand-on-light/75">
                Acessar o aulão ao vivo e fazer sua primeira arrematação ainda esse mês.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-[clamp(1.3rem,3.6vw,1.9rem)] font-extrabold text-brand-on-light">
            Eu sei (e você também sabe):
            <br />
            <span className="hl">a opção 2 é a mais inteligente.</span>
          </p>
          <p className="mt-4 text-center text-base text-brand-on-light/70">
            Então clique no botão abaixo e acesse agora mesmo o Mega Aulão ao Vivo sobre Leilões.
          </p>
          <div className="mt-7 flex justify-center">
            <Cta label={offer.ctaPrimary} />
          </div>
        </div>
      </section>
    </>
  );
}

export function AuthoritySection() {
  return (
    <section className="bg-brand-dark py-14 text-brand-on-dark sm:py-20">
      <div className="container-wide grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-[clamp(1.6rem,5.4vw,2.1rem)]">
            O criador do aulão ao vivo é <span className="hl">Paulo Machado</span>
          </h2>
          <p className="mt-3 text-lg font-bold text-brand-on-dark/85">
            De R$ 1 milhão em dívidas a 7 negócios milionários
          </p>
          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-brand-on-dark/75">
            <p>
              Paulo Machado foi de R$ 1 milhão em dívidas para 7 negócios milionários. Hoje é
              arrematante profissional com mais de R$ 100 milhões em arremates.
            </p>
            <p>
              Foi aprovado 14 vezes em 14 estados na prova objetiva do concurso mais concorrido e
              cobiçado do Brasil.
            </p>
            <p>
              Advogado pela OAB/DF. Pós-graduado em Direito Constitucional, Administrativo, Civil e
              Processo Civil.
            </p>
            <p>
              Foi Tabelião de Notas e Protesto e Registrador de Imóveis, Títulos e Documentos,
              Pessoas Jurídicas e Pessoas Naturais.
            </p>
            <p>
              Escritor de 5 livros jurídicos e 2 livros de desenvolvimento pessoal. Construtor e
              Incorporador, criador do maior centro de eventos de Alphaville-SP. Embaixador de
              Cristo.
            </p>
          </div>
        </div>
        <img
          src={assets["Foto do expert 1.jpg"]}
          alt="Paulo Machado em retrato profissional"
          loading="lazy"
          width={900}
          height={1100}
          className="mx-auto aspect-4/5 w-full max-w-[440px] rounded-[32px] object-cover"
        />
      </div>
    </section>
  );
}