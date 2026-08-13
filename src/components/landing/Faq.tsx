import { assets } from "@/lib/landing-assets";
import { offer } from "@/config/offer";

const faqs = [
  ["Qual é a forma de pagamento?", "Você pode fazer o pagamento pelo PIX ou cartão de crédito."],
  [
    "O pagamento é seguro?",
    "Sim, o pagamento é 100% seguro, onde utilizamos uma das maiores plataformas de vendas do mundo, a Kiwify.",
  ],
  ["Funciona pra mim?", "Sim, o aulão ao vivo funciona para qualquer pessoa."],
  [
    "Como vou acessar o mini curso?",
    "Assim que o seu pagamento for concluído, enviaremos um e-mail com todos os dados de login para você acessar o produto junto com todos os bônus.",
  ],
];

export function FaqSection() {
  return (
    <section className="bg-brand-light py-14 sm:py-20">
      <div className="container-reading">
        <h2 className="text-center text-[clamp(1.6rem,5.4vw,2.1rem)] text-brand-on-light">
          Perguntas frequentes
        </h2>
        <div className="mt-8 flex flex-col gap-3">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-2xl border border-brand-border bg-white px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 text-base font-bold text-brand-on-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
                <span
                  aria-hidden
                  className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-accent text-sm font-black text-brand-on-dark"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
                {q}
              </summary>
              <p className="mt-3 pl-9 text-base text-brand-on-light/75">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalFooter() {
  return (
    <footer className="bg-brand-dark py-12 text-brand-on-dark">
      <div className="container-reading flex flex-col items-center gap-5 text-center">
        <img
          src={assets["Logo sem fundo da pagina.png"]}
          alt="Logo Mega Aulão ao Vivo sobre Leilões"
          loading="lazy"
          width={220}
          height={70}
          className="h-auto w-[180px] object-contain"
        />
        <p className="text-sm font-semibold">
          Tem alguma dúvida? Mande pelo e-mail:{" "}
          <span className="hl break-all">{offer.contactEmail}</span>
        </p>
        <p className="text-xs leading-relaxed text-brand-on-dark/60">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. A compra deste
          material não garante nenhum tipo de resultado. Todos os resultados apresentados dependem
          de aplicação, contexto e condições de cada leilão.
        </p>
        <p className="text-xs text-brand-on-dark/50">
          © {new Date().getFullYear()} {offer.productName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}