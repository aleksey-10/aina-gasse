// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import { FAKE_CATALOG_DATA } from "../../utils/Catalog";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.json(FAKE_CATALOG_DATA);
};
