import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Products from './components/Products';
import BrowseRange from './components/BrowseRange';

const App = () => {
  return (
    <div>
      <Header />
      
      <Hero />
      <Products />
      <BrowseRange></BrowseRange>
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;


