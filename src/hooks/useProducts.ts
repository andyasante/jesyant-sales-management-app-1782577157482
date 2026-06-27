import { useState, useEffect } from 'react';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../api/products';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const createProduct = async (product) => {
    try {
      const newProduct = await addProduct(product);
      setProducts((prev) => [...prev, newProduct]);
    } catch (err) {
      setError(err);
    }
  };

  const editProduct = async (productId, updatedProduct) => {
    try {
      const updated = await updateProduct(productId, updatedProduct);
      setProducts((prev) =>
        prev.map((product) => (product.id === productId ? updated : product))
      );
    } catch (err) {
      setError(err);
    }
  };

  const removeProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts((prev) => prev.filter((product) => product.id !== productId));
    } catch (err) {
      setError(err);
    }
  };

  return { products, loading, error, createProduct, editProduct, removeProduct };
};