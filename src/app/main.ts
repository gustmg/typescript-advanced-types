import { faker } from '@faker-js/faker';
import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.helpers.arrayElement(['S', 'M', 'G']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);

const product = products[0];

updateProduct(product.id, {
  title: 'New title',
  stock: 9,
});

findProducts({
  stock: 10,
  color: 'red',
  isNew: true,
  tags: ['as'],
});
