export default interface Product {
  id: number | string;
  title: string;
  description: string;
  collection?: string;
  price?: number | string;
  imageUrl: string;
}
