import type {VercelRequest, VercelResponse} from "@vercel/node";
const psi = require("psi");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  let {url} = req.query;
  const mobile = await psi(url, {
    nokey: "true",
    strategy: "mobile",
  });
  const desktop = await psi(url, {
    nokey: "true",
    strategy: "desktop",
  });

  await sendMessageToSlack(
    url,
    `Performance: mobile:${mobile.data.lighthouseResult.categories.performance.score * 100} / desktop:${
      desktop.data.lighthouseResult.categories.performance.score * 100
    }`
  );
  return res.json({
    performance: {
      mobile: mobile.data.lighthouseResult.categories.performance.score * 100,
      desktop: desktop.data.lighthouseResult.categories.performance.score * 100,
    },
  });
}

const sendMessageToSlack = async (_url, message) => {
  const url = "https://dev-api.benu.at/api/horus/error";
  const body = {
    resourceType: "BENU PSI",
    resourceUrl: _url,
    errorMessage: message,
  };
  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
