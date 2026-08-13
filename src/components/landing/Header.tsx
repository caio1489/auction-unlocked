import { assets } from "@/lib/landing-assets";
import { offer } from "@/config/offer";

export function HeaderLogo() {
  return (
    <header className="bg-white py-4">
      <div className="container-wide flex justify-center">
        <img
          src={assets["Logo sem fundo da pagina.png"]}
          alt="Logo Mega Aulão ao Vivo sobre Leilões"
          width={260}
          height={72}
          loading="eager"
          className="h-auto w-[min(100%,190px)] object-contain sm:w-[230px]"
        />
      </div>
    </header>
  );
}

export function UrgencyBanner() {
  return (
    <div className="w-full bg-linear-to-r from-brand-accent to-brand-accent-strong py-2.5 text-brand-on-dark">
      <div className="container-wide flex flex-wrap items-center justify-center gap-x-2 gap-y-0 text-center">
        <span className="text-sm font-bold sm:text-base">
          {offer.liveLabel}
        </span>
        <span aria-hidden>—</span>
        <span className="text-sm font-bold sm:text-base">{offer.liveTime}</span>
      </div>
    </div>
  );
}