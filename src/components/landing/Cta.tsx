import { offer } from "@/config/offer";
import { trackPixel } from "@/lib/pixel";

export function Cta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={offer.checkoutUrl}
      onClick={() =>
        trackPixel("InitiateCheckout", {
          content_name: offer.productName,
          content_category: "Leilões",
          content_ids: ["mega-aulao-ao-vivo"],
          content_type: "product",
          num_items: 1,
          value: offer.priceValue,
          currency: offer.currency,
        })
      }
      className={`btn-cta w-full sm:w-auto hover:bg-brand-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent ${className}`}
    >
      {label}
    </a>
  );
}
