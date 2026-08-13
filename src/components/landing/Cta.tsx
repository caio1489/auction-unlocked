import { offer } from "@/config/offer";

export function Cta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={offer.checkoutUrl}
      className={`btn-cta w-full sm:w-auto hover:bg-brand-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent ${className}`}
    >
      {label}
    </a>
  );
}