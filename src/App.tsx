import React from 'react';
import { Login } from './components/Login';
import { ProductList } from './components/ProductList';
import { SalesReport } from './components/SalesReport';
import { Dashboard } from './components/Dashboard';
import { useProducts } from './hooks/useProducts';

const App = () => {
  const { products } = useProducts();

  return (
    <div>
      <h1>Sales Management App</h1>
      <Login />
      <Dashboard />
      <ProductList products={products} />
      <SalesReport />
    </div>
  );
};

export default App;