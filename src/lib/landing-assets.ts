import logo from "@/assets/logo.png.asset.json";
import heroMacbook from "@/assets/hero-macbook-mini-curso.png.asset.json";
import todosEntregaveis from "@/assets/combo-entregaveis-v2.png.asset.json";
import expert1 from "@/assets/expert-1.jpg.asset.json";
import expert2 from "@/assets/expert-2.jpg.asset.json";
import expert3 from "@/assets/expert-3.jpg.asset.json";
import expert4 from "@/assets/expert-4.jpg.asset.json";
import resGol from "@/assets/resultado-gol.webp.asset.json";
import resJardim from "@/assets/resultado-jardim-paulista.webp.asset.json";
import resRibeirao from "@/assets/resultado-ribeirao-preto.webp.asset.json";
import resBmw from "@/assets/resultado-bmw.webp.asset.json";
import entImovel5 from "@/assets/ent-imovel-5-entrada.png.asset.json";
import entGuia from "@/assets/ent-guia.png.asset.json";
import entParcelado from "@/assets/ent-parcelado.webp.asset.json";
import entLeilaoFalso from "@/assets/ent-leilao-falso.png.asset.json";
import entCarros from "@/assets/ent-carros.png.asset.json";
import entImoveis from "@/assets/ent-imoveis-desocupados.png.asset.json";
import doresObjecoes from "@/assets/dores-objecoes.png.asset.json";

/**
 * Mapa dos ativos originais do ZIP -> URL no projeto.
 * A chave mantém o nome literal do ficheiro fornecido.
 */
export const assets = {
  "Logo sem fundo da pagina.png": logo.url,
  "Foto que vai no lugar do celular no topo.png": heroMacbook.url,
  "foto com todos entregaveis .png": todosEntregaveis.url,
  "Foto do expert 1.jpg": expert1.url,
  "Foto do expert 2.jpg": expert2.url,
  "Foto do expert 3.jpg": expert3.url,
  "Foto do expert 4.jpg": expert4.url,
  "Gol.webp": resGol.url,
  "apto jardim paulista.webp": resJardim.url,
  "apto ribeirao preto.webp": resRibeirao.url,
  "bmw.webp": resBmw.url,
  "entregavel-imovel-5-entrada.png": entImovel5.url,
  "entregavel-guia-titulo.png": entGuia.url,
  "0SIWZnkc3Wu6WzlGdePSEF-img-1_1786639691000_na1fn_ZW50cmVnYXZlbC1jb21wcmFyLXBhcmNlbGFkby1ib2xldG8tbGVpbGFv.webp":
    entParcelado.url,
  "entregavel-como-identificar-leilao-falso-3-linhas.png": entLeilaoFalso.url,
  "entregavel-carros-titulo.png": entCarros.url,
  "entregavel-comprar-imoveis-desocupados-verde.png": entImoveis.url,
  "dores-objecoes.png": doresObjecoes.url,
} as const;