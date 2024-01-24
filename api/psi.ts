import type { VercelRequest, VercelResponse } from '@vercel/node'
const psi = require('psi')

export default async function handler(req: VercelRequest, res: VercelResponse) {
  let { url, strategy } = req.query
  const { data } = await psi(url, {
    nokey: 'true',
    strategy: strategy,
  })
  return res.json({
    performance: data.lighthouseResult.categories.performance.score,
  })
}
