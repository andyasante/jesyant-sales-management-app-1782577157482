import React from 'react';
import { useProducts } from '../hooks/useProducts';

export const SalesReport = () => {
  const { loading, error, products } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  const totalSales = products.reduce((acc, product) => acc + product.price * product.salesCount, 0);

  return (
    <div>
      <h2>Sales Report</h2>
      <p>Total Sales: GHS {totalSales.toFixed(2)}</p>
      <h3>Product Sales</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}: GHS {product.price} x {product.salesCount} = GHS {(product.price * product.salesCount).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};