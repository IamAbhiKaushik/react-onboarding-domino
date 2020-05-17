import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './component/ItemList'
import Header from './component/Header'
import NavBar from './component/NavBar'
function App() {
  return (
    <div className="App">
        <Header />
        <NavBar />
        <ShoppingList />
    </div>
  );
}

export default App;
