export interface ICreateProduct {
  name: string;
  price: number;
  description: string;
  category: string;
}

export interface IUpdateProduct {
  name?: string;
  price?: number;
  description?: string;
  category?: string;
}
