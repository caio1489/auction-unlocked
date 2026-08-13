import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const buyers: [string, string][] = [
  ["Matheus", "São Paulo"],
  ["Aline", "Goiânia"],
  ["Paula", "Salvador"],
  ["Pedro", "Florianópolis"],
  ["Kássia", "Belo Horizonte"],
  ["Rafael", "Curitiba"],
  ["Juliana", "Recife"],
  ["Bruno", "Fortaleza"],
  ["Camila", "Porto Alegre"],
  ["Lucas", "Manaus"],
  ["Fernanda", "Brasília"],
  ["Thiago", "Campinas"],
  ["Patrícia", "Natal"],
  ["Gustavo", "Belém"],
  ["Larissa", "João Pessoa"],
  ["Rodrigo", "Vitória"],
  ["Amanda", "Maceió"],
  ["Felipe", "Cuiabá"],
  ["Débora", "Campo Grande"],
  ["Marcelo", "Londrina"],
  ["Vanessa", "Uberlândia"],
  ["Diego", "Santos"],
  ["Tatiane", "Joinville"],
  ["Leandro", "Ribeirão Preto"],
  ["Priscila", "Aracaju"],
  ["Vinícius", "Teresina"],
  ["Carla", "São Luís"],
  ["André", "Niterói"],
  ["Bianca", "Sorocaba"],
  ["Eduardo", "Caxias do Sul"],
  ["Renata", "Feira de Santana"],
  ["Rogério", "Anápolis"],
  ["Simone", "Petrolina"],
  ["Fábio", "Blumenau"],
  ["Michele", "Bauru"],
  ["Everton", "Pelotas"],
  ["Sabrina", "Marabá"],
  ["Alexandre", "Palmas"],
  ["Cristiane", "Porto Velho"],
  ["Wesley", "Boa Vista"],
  ["Adriana", "Macapá"],
  ["Jonathan", "Rio Branco"],
  ["Elaine", "Governador Valadares"],
  ["Sérgio", "Juiz de Fora"],
  ["Natália", "Vila Velha"],
  ["Caio", "Guarulhos"],
  ["Mariana", "Osasco"],
  ["Igor", "Contagem"],
  ["Luciana", "Betim"],
  ["Otávio", "Franca"],
  ["Jéssica", "Chapecó"],
  ["Douglas", "Criciúma"],
  ["Aline C.", "Maringá"],
  ["Ricardo", "Cascavel"],
  ["Beatriz", "Ponta Grossa"],
  ["Márcio", "Caruaru"],
  ["Isabela", "Olinda"],
  ["Henrique", "Mossoró"],
  ["Verônica", "Imperatriz"],
  ["Danilo", "Itabuna"],
  ["Milena", "Ilhéus"],
  ["Wagner", "Barreiras"],
  ["Rosana", "Rondonópolis"],
  ["Tiago", "Dourados"],
  ["Karina", "Volta Redonda"],
  ["Anderson", "Cabo Frio"],
  ["Letícia", "Petrópolis"],
  ["Emerson", "Divinópolis"],
  ["Aparecida", "Montes Claros"],
  ["Nathan", "São José dos Campos"],
];

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export function SalesNotifications() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * buyers.length));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const show = () => {
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
        timer = setTimeout(() => {
          setIndex((i) => (i + 1) % buyers.length);
          show();
        }, rand(3000, 7000));
      }, 5000);
    };

    timer = setTimeout(show, 2200);
    return () => clearTimeout(timer);
  }, []);

  const [name, city] = buyers[index]!;

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed bottom-4 left-3 z-50 max-w-[calc(100%-1.5rem)] sm:left-5 sm:max-w-sm"
    >
      <div
        className={`flex items-center gap-3 rounded-2xl border border-brand-accent/40 bg-brand-accent/85 px-3.5 py-2.5 text-brand-on-dark shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-brand-on-dark/50">
          <Check aria-hidden className="size-4" strokeWidth={3} />
        </span>
        <p className="text-sm leading-snug">
          <span className="font-extrabold">{name}</span>, de {city}, garantiu vaga no aulão
        </p>
      </div>
    </div>
  );
}
