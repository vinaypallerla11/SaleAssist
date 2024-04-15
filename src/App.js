import React from 'react';
import Headers from './components/Headers'
import NavPage from './components/NavPage'
import Products from './components/Products'
import './App.css'
const App = () => {
  return (
    <div className='container'>
      <Headers/> 
      <NavPage/>
      <Products/>
    </div>
  );
}

export default App;
