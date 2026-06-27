import React from 'react';
import { useProducts } from '../hooks/useProducts';

export const ProductList = ({ products }) => {
  const { loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  if (!products) return null;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price} GHS
          </li>
        ))}
      </ul>
    </div>
  );
};