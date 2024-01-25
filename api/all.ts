import type {VercelRequest, VercelResponse} from "@vercel/node";

const allUrls: string[] = [
  "https://lp.benu.at/lp/bestattung/linz/",
  "https://lp.benu.at/lp/bestattung/linz/preise/",
  "https://lp.benu.at/lp/bestattung/moedling/",
  "https://lp.benu.at/lp/home/",
  "https://lp.benu.at/lp/info/abholung/",
  "https://lp.benu.at/lp/info/anonyme-bestattung/",
  "https://lp.benu.at/lp/info/baumbestattung/",
  "https://lp.benu.at/lp/info/beerdigungskosten/",
  "https://lp.benu.at/lp/info/begraebniskosten/",
  "https://lp.benu.at/lp/info/bestattung/klosterneuburg/",
  "https://lp.benu.at/lp/info/bestattung/korneuburg/",
  "https://lp.benu.at/lp/info/bestattung/purkersdorf-breitenfurt-pressbaum/",
  "https://lp.benu.at/lp/info/bestattungsarten/",
  "https://lp.benu.at/lp/info/bestattung/serbische-orthodoxe-bestattung/wien/",
  "https://lp.benu.at/lp/info/bestattungskosten/",
  "https://lp.benu.at/lp/info/bestattungspreis/",
  "https://lp.benu.at/lp/info/bestattung/stockerau/",
  "https://lp.benu.at/lp/info/bestattungsunternehmen/",
  "https://lp.benu.at/lp/info/bestattung/wien/",
  "https://lp.benu.at/lp/info/bestattung/wien-moedling-baden/",
  "https://lp.benu.at/lp/info/checkliste-todesfall/",
  "https://lp.benu.at/lp/info/diamantbestattung/",
  "https://lp.benu.at/lp/info/donaubestattung/",
  "https://lp.benu.at/lp/info/feuerbestattung/",
  "https://lp.benu.at/lp/info/feuerbestattung-wien/",
  "https://lp.benu.at/lp/info/islamische-bestattung/",
  "https://lp.benu.at/lp/info/naturbestattung/",
  "https://lp.benu.at/lp/info/ooe/checkliste-todesfall/",
  "https://lp.benu.at/lp/info/preise/",
  "https://lp.benu.at/lp/info/preise/organic/",
  "https://lp.benu.at/lp/info/sozialbestattung/",
  "https://lp.benu.at/lp/info/standorte/",
  "https://lp.benu.at/lp/info/standorte/wien/",
  "https://lp.benu.at/lp/info/totenbeschau/",
  "https://lp.benu.at/lp/info/trauerredner/",
  "https://lp.benu.at/lp/info/ueberfuehrungen/",
  "https://lp.benu.at/lp/info/urnenbestattung/",
  "https://lp.benu.at/lp/info/urnengrab/",
  "https://lp.benu.at/lp/info/urne-zu-hause/",
  "https://lp.benu.at/lp/info/wiener-verein/",
  "https://lp.benu.at/info/preise/",
  "https://lp.benu.at/bestattung/linz/",
  "https://lp.benu.at/bestattung/wels/",
  "https://lp.benu.at/",
  "https://lp.benu.at/info/baumbestattung/",
  "https://lp.benu.at/info/bestattung/wien/",
  "https://lp.benu.at/info/checkliste-todesfall/",
  "https://lp.benu.at/info/donaubestattung/",
  "https://lp.benu.at/info/standorte/",
  "https://lp.benu.at/info/feuerbestattung/",
  "https://lp.benu.at/info/erdbestattung/",
  "https://lp.benu.at/ueber-uns/",
  "https://lp.benu.at/info/baumbestattung-wien/",
  "https://lp.benu.at/info/begraebniskosten/",
  "https://lp.benu.at/info/bestattungskosten/",
  "https://lp.benu.at/info/kosten-einascherung/",
  "https://lp.benu.at/info/kosten-feuerbestattung/",
  "https://lp.benu.at/info/bestattung/bereitschaft/",
  "https://lp.benu.at/presse/",
  "https://lp.benu.at/info/diamantbestattung/",
  "https://lp.benu.at/info/bestattung/wochenende-feiertag/",
  "https://lp.benu.at/info/feuerbestattung-graz/",
  "https://lp.benu.at/info/bestattungsarten/",
  "https://lp.benu.at/info/feuerbestattung-linz/",
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const perf = await Promise.all(
    allUrls.map(async (url) => {
      console.log(url);
      const response = await fetch(`http://localhost:3000/api/psi/?url=${url}`);
      return "loaded";
    })
  );
  return {finish: "ok"};
}
