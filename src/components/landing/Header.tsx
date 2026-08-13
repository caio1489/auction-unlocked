import logoAoVivo from "@/assets/logo-mega-aulao-ao-vivo.png.asset.json";

export function HeaderLogo() {
  return (
    <header className="bg-white py-4 sm:py-6">
      <div className="container-wide flex justify-center">
        <img
          src={logoAoVivo.url}
          alt="Mega Aulão ao Vivo sobre Leilões — hoje 20h01"
          width={1000}
          height={511}
          loading="eager"
          className="h-[55px] w-auto object-contain sm:h-[73px]"
        />
      </div>
    </header>
  );
}

export function UrgencyBanner() {
  return (
    <div className="w-full bg-linear-to-r from-brand-accent to-brand-accent-strong py-2.5 text-brand-on-dark">
      <div className="container-wide flex flex-wrap items-center justify-center gap-x-2 gap-y-0 text-center">
        <span className="text-base font-bold sm:text-lg">
          Você está travado para arrematar no leilão?
        </span>
      </div>
    </div>
  );
}
