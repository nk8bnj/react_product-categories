import Product from '../Product/Product';

const ProductsList = ({ products }) => (
  <tbody>
    {products.map(product => (
      <Product key={product.id} product={product} />
    ))}
  </tbody>
);

export default ProductsList;
