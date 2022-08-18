import { Category } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'G';

export interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
  category: Category;
}
