import mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

// Get your connection string from .env.local

const MONGODB_CONN_STR = 'mongodb+srv://aleksey:qwerty_20@cluster0.uso1o.mongodb.net/aina?retryWrites=true&w=majority';

const databaseMiddleware = async (req: NextApiRequest, res: NextApiResponse, next) => {

  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(MONGODB_CONN_STR, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    }
  }
  catch (ex) {
    console.error(ex);
  }

  // You could extend the NextRequest interface
  // with the mongoose instance as well if you wish.
  // req.mongoose = global.mongoose;

  return next();

};

export default databaseMiddleware;
