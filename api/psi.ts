import type {VercelRequest, VercelResponse} from "@vercel/node";
const psi = require("psi");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  let {url, strategy} = req.query;
  console.log(url, strategy);
  const {data} = await psi(url, {
    nokey: "true",
    strategy: strategy,
  });
  await sendMessageToSlack(
    url,
    `Strategy: ${strategy}, Performance: ${data.lighthouseResult.categories.performance.score}`
  );
  return res.json({
    performance: data.lighthouseResult.categories.performance.score,
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
  console.log(response);
};
