/**
 * Meta (Facebook) Pixel helpers.
 * O pixel base é injetado em src/routes/__root.tsx.
 */
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type Params = Record<string, unknown>;

/** Eventos padrão da Meta */
export function trackPixel(event: string, params: Params = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

/** Eventos personalizados */
export function trackPixelCustom(event: string, params: Params = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("trackCustom", event, params);
}
