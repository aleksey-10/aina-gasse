import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'Product';

const schema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;
