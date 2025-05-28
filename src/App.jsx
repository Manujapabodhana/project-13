import React from 'react';
import Products from './components/Products';
import BrowseRange from './components/BrowseRange';
import RoomInspiration from './components/RoomInspiration';
import './App.css';

function App() {
  return (
    <div className="app">
      <Products />
      <BrowseRange />
      <RoomInspiration />
    </div>
  );
}

export default App; 