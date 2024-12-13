// ShopCart.js
import React from 'react';
import { useCart } from './CartContext';
import '../css/index.css'
import { Link } from 'react-router-dom';


/* ----------------------- */
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useLocation } from 'react-router-dom';
import {useNavigate, navigate } from "react-router-dom";
/* ----------------------- */




const ShopCart = () => {
  const { selectedProducts, clearCart, updateProductCount } = useCart();

  const handleIncrease = (productId) => {
    updateProductCount(productId, 1); // Increase count by 1
  };

  const handleDecrease = (productId) => {
    const productToUpdate = selectedProducts.find(product => product.id === productId);
  
    if (productToUpdate && productToUpdate.count > 1) {
      updateProductCount(productId, -1); // Decrease count by 1
    }
    // Alternatively, you can display an alert or handle the case when count is already zero
  };

/* ----------------------- */
  const location = useLocation(); // Get the location object from React Router
  const navigate = useNavigate();
  const [full_adress, fullAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/shopcart", {
      fullAddress: fullAddress,
    }).then((response) => {
  
    })
  }
/* ----------------------- */



  return (
    <main className='content'>
      <p class="title">Замовлення доставкою</p>
      <div className='shopcart_container'> 

      <div className='shopcart_container_left'>

        {selectedProducts && selectedProducts.length > 0 ? (
          <ul>
            {selectedProducts.map((product) => (
                <div className='shopcart_box'>
              <li key={product.id} className='shopcart_text'>
                <li>{product.product_name}</li>

                {product.product_price}грн на порцію --- Count: {product.count}  
             
                <button className='shopcart_quantity' onClick={() => handleIncrease(product.id)}>+</button>
                <button  className='shopcart_quantity' onClick={() => handleDecrease(product.id)}>-</button> 
              </li>
                </div>
            ))}
          </ul>

          
        ) : (
          
            <div className=''><p className='shopcart_text'>Ваше замовлення не містить нічого.</p></div>
        )}
        <button className='shopcart_button' onClick={clearCart}>Очистити все</button>

      </div>





      <div className='shopcart_container_right'>
      <form onSubmit={handleSubmit}>
      <div>
        <p className='registration_text'>Повна Адреса</p>
        <h3 className='registration_text'> (Область, Місто, Вулиця і номер) </h3>
        <input className='registration_input'
          type="text"
          name="address"
          onChange={(e) => {fullAddress(e.target.value)}}
          required/>
      </div>
      

      <Link to="/order">
      <button className='shopcart_button'>Підтвердити Замовлення</button>
        </Link>
  
      </form>
      </div>
    



      </div>  
    </main>
  );
};

export default ShopCart;
