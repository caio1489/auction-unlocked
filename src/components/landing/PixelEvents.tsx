import { useEffect, useRef } from "react";

import { offer } from "@/config/offer";
import { trackPixel, trackPixelCustom } from "@/lib/pixel";

const content = {
  content_name: offer.productName,
  content_category: "Leilões",
  content_ids: ["mega-aulao-ao-vivo"],
  content_type: "product",
  value: offer.priceValue,
  currency: offer.currency,
};

/**
 * Dispara os eventos de engajamento do pixel da Meta:
 * ViewContent, profundidade de scroll, tempo na página e visualização da oferta.
 */
export function PixelEvents() {
  const fired = useRef<Set<string>>(new Set());

  useEffect(() => {
    const once = (key: string, fn: () => void) => {
      if (fired.current.has(key)) return;
      fired.current.add(key);
      fn();
    };

    once("view", () => trackPixel("ViewContent", content));

    const timers = [
      window.setTimeout(() => once("t15", () => trackPixelCustom("TimeOnPage15s", content)), 15000),
      window.setTimeout(() => once("t30", () => trackPixelCustom("TimeOnPage30s", content)), 30000),
      window.setTimeout(
        () => once("t60", () => trackPixelCustom("TimeOnPage60s", { ...content, engaged: true })),
        60000,
      ),
      window.setTimeout(() => once("lead", () => trackPixel("Lead", content)), 45000),
    ];

    const marks = [25, 50, 75, 90];
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 100;
      for (const m of marks) {
        if (pct >= m) {
          once(`scroll${m}`, () =>
            trackPixelCustom(`Scroll${m}`, { ...content, scroll_depth: m }),
          );
        }
      }
      if (pct >= 50) once("addtocart", () => trackPixel("AddToCart", content));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
