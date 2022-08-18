type Sizes = 'S' | 'M' | 'G';

type ProductType = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
};

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'p1',
  createdAt: new Date(),
  stock: 0,
  size: 'G',
});

const addProduct = (data: Product) => {
  products.push(data);
};
