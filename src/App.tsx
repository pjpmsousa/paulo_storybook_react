import React from 'react';
import './App.css';
import Navigation from './components/urbint/navigation/Navigation';
import ItemList from './components/urbint/itemList/ItemList';

function App() {
  return (
    <div className="App">
      <Navigation isIconVisible />
      <ItemList />
    </div>
  );
}

export default App;
