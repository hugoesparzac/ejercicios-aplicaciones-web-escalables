export interface Producto {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  onSale: boolean;
  image?: string;
}
