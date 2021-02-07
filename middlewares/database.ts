import mongoose, { Mongoose } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

// Declare a type.
interface CustomNodeJsGlobal extends NodeJS.Global {
  mongoose: Mongoose;
}

// Tell Typescript to use this type on the globally scoped `global` variable.
declare const global: CustomNodeJsGlobal;

// Get your connection string from .env.local
const MONGODB_URI = process.env.MONGODB_URI;

const databaseMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next,
) => {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    }
  } catch (ex) {
    console.error(ex);
  }

  // You could extend the NextRequest interface
  // with the mongoose instance as well if you wish.
  // req.mongoose = global.mongoose;

  return next();
};

export default databaseMiddleware;
