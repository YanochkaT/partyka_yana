// ShopCart.js
import React from 'react';
import { useCart } from './CartContext';
import '../css/index.css'


import { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests


const Order = () => {
  const { selectedProducts } = useCart();


  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/Name')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);


  return (
    <main className='content'>
      <p class="title">Готове Замовлення</p>
      <div className='shopcart_container'> 
      <div className='order_name_box'>
        <ul>
            <li>-------------------------------------- ВАШ ЧЕК --------------------------------------</li>
        </ul>
      </div>


      <div className='order_container'>
      <div className='order_box_left'>
        <ul>
            <li >ЧЕК № 1</li>

            {users.map(user => (
           <li key={user.id}>ім'я кліента: {user.name}</li>
        ))}
            
           
           <li >ім'я кліента: name</li>
      
            <li>номер телефону: 12345678</li>
            <li >пошта: yana.tere2004@gmail.com</li>


            <li >дата замовлення: 2023-11-29 13:28:08</li>
        </ul>
    </div>
    </div>
    <div className='order_name_box'>
        <ul>
            <li>----------------------------- СПИСОК ЗАМОВЛЕНЬ -----------------------------</li>
        </ul>
      </div>

    <div className='order_container'>
        {selectedProducts && selectedProducts.length > 0 ? (
          <ul>
            {selectedProducts.map((product) => (
                <div className='order_box'>
              <li key={product.id} className='order_text'>
                <li>{product.product_name}  - {product.product_price}грн, {product.count} шт.    </li> 
                 -
              </li>
                </div>
            ))}
          </ul>  
        ) : (
          
            <div className='order_box'>
                <p className='order_text'>!!! - Цей чек не містить нічого і не зараховується.</p></div>
        )}
      </div>











      <div className='order_name_box'>
        <ul>
            <li>----------------------------------------- СУМА -----------------------------------------</li>
            <li>985.00 грн</li>
        </ul>
    </div>

    <div className='order_name_box'>
        <ul>
            <li>---------------------------------------------------------------------------------------------</li>
            <li>ДЯКУЮ ЗА ЗАМОВЛЕННЯ!</li>
        </ul>
    </div>
    <div className='order_name_box'>
        <ul>
            <li>Очікуйте дзвінок від нашого закладу для </li>
            <li>підтвердження Вашого замовлення та специфікацій доставки :)</li>   
        </ul>
    </div>
    <div className='order_name_box'>
        <ul>
       
            <li>---------------------------------------------------------------------------------------------</li>
            
        </ul>
    </div>


      </div>  
    </main>
  );
};

export default Order;
