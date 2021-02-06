export default interface Product {
  _id: number | string;
  title: string;
  description?: string;
  collection?: string;
  price: number;
  imageUrl: string;
}
