import React, { useState, useEffect } from 'react';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FiBookmark } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import './index.css';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(newData => {
        console.log(newData); 
        setData(newData);
      });
  }, []);

  return (
    <div className='bg-content'>
      {data.map((each) => (
        <div className='product-content' key={each.id}>
          <img src={each.image} alt={each.title} className='image'  />
          <p className='symbal'> <FiBookmark /></p>
          <p className='title'>{each.title}</p>
          <div className='price-container'>
            <p className='symbal'><LiaRupeeSignSolid /></p>
            <p className='price'>4899</p>
            <p className='actual-price'>8999</p>
            <p className='offer-section'>(50% Off)</p>
            <p className='cart'><BsCartPlus /></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
