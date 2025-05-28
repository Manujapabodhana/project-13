import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Products from './components/Products';
import BrowseRange from './components/BrowseRange';
import RoomInspiration from './components/Roomlnspiration';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
      <Header />
      
      <Hero />
      <Products />
      <BrowseRange></BrowseRange>
      <RoomInspiration></RoomInspiration>
      <Testimonials />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;


