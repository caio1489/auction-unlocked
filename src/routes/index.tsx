import { createFileRoute } from "@tanstack/react-router";

import { HeaderLogo, UrgencyBanner } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/Hero";
import { ResultsProofSection } from "@/components/landing/Results";
import {
  PainAgitationSection,
  SolutionBridgeSection,
  BenefitsSection,
} from "@/components/landing/Pain";
import {
  DeliverablesSection,
  DeliverablesSummarySection,
} from "@/components/landing/Deliverables";
import {
  AudienceFitSection,
  OfferStackSection,
  OfferCardSection,
  AccessStepsSection,
  ChoiceSection,
  AuthoritySection,
} from "@/components/landing/Offer";
import { FaqSection, LegalFooter } from "@/components/landing/Faq";
import { offer } from "@/config/offer";

const title = "Mega Aulão ao Vivo sobre Leilões — Paulo Machado";
const description =
  "Copie a estratégia para comprar imóveis e veículos no leilão com 25% de entrada + 60x no boleto e até 60% de desconto. Aula ao vivo hoje 20h01 por R$ 29,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden bg-brand-light">
      <HeaderLogo />
      <UrgencyBanner />
      <HeroSection />
      <ResultsProofSection />
      <PainAgitationSection />
      <SolutionBridgeSection />
      <BenefitsSection />
      <DeliverablesSection />
      <DeliverablesSummarySection variant="top" />
      <AudienceFitSection />
      <OfferStackSection />
      <OfferCardSection ctaLabel={offer.ctaPrimary} />
      <AccessStepsSection />
      <ChoiceSection />
      <AuthoritySection />
      <DeliverablesSummarySection variant="bottom" />
      <OfferCardSection
        id="oferta-final"
        ctaLabel={offer.ctaSecondary}
        note="Mega aulão ao vivo sobre leilões — acesso imediato no seu e-mail."
      />
      <FaqSection />
      <LegalFooter />
    </main>
  );
}
