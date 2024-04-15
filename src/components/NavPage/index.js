import React from 'react';
import { BiSolidShoppingBags } from "react-icons/bi";
import { LiaWalletSolid } from "react-icons/lia";
import { PiToteThin } from "react-icons/pi";
import { BsDuffle } from "react-icons/bs";
import { TiDeviceLaptop } from "react-icons/ti";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { GiShoulderBag } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
import './index.css'

const index = () => {
  return (
    <div className='image-container'>
      <div>
        <BiSolidShoppingBags className='images'/>
        <p className='para'>All Bags</p>
      </div>
      <div>
        <LiaWalletSolid className='images'/> 
        <p className='para'>Vanity Pouch</p>
      </div>
      <div>
        <PiToteThin className='images'/>
        <p className='para'>Tote Bags</p>
      </div>
      <div>
        <BsDuffle className='images'/>
        <p className='para'>Duffle Bags</p>
      </div>
      <div>
        <TiDeviceLaptop className='images'/>
        <p className='para'> Laptop Sleeves</p>
      </div>
      <div>
        <PiShoppingBagOpenLight className='images'/>
        <p className='para'>Messenger Bags </p>
      </div>
      <div>
        <GiShoulderBag className='images'/>
        <p className='para'>Slings Bags</p>
      </div>
      <div>
        <BsHandbag className='images'/>
        <p className='para'>Handbags</p>
      </div>
    </div>
  );
}

export default index;
