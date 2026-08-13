import { assets } from "@/lib/landing-assets";
import { offer } from "@/config/offer";

export function HeaderLogo() {
  return (
    <header className="bg-white py-5">
      <div className="container-wide flex justify-center">
        <img
          src={assets["Logo sem fundo da pagina.png"]}
          alt="Logo Mega Aulão ao Vivo sobre Leilões"
          width={320}
          height={96}
          loading="eager"
          className="h-auto w-[min(100%,260px)] object-contain sm:w-[300px]"
        />
      </div>
    </header>
  );
}

export function UrgencyBanner() {
  return (
    <div className="w-full bg-brand-accent py-4 text-brand-on-dark">
      <div className="container-wide flex flex-col items-center gap-1 text-center sm:flex-row sm:justify-center sm:gap-3">
        <span className="text-base font-extrabold uppercase tracking-wide sm:text-lg">
          {offer.liveLabel}
        </span>
        <span aria-hidden className="hidden sm:inline">
          —
        </span>
        <span className="text-base font-bold sm:text-lg">{offer.liveTime}</span>
      </div>
    </div>
  );
}