// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "../../middlewares";
import { FAKE_CATALOG_DATA } from "../../utils/Catalog";
import Product from '../../models/product';

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const products = await Product.find();

  res.json(products);
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, description, price, imageUrl } = req.body[0];

  const newProduct = new Product({ title, description, price, imageUrl });

  await newProduct.save()

  res.status(201);
});

export default handler;