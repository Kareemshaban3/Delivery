/** @format */

import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StorContext";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { cardItems, getTotalCartAmount, food_list, removeItemCard } =
    useContext(StoreContext);

    const navigate = useNavigate()

  return (
    <>
      <div className='cart'>
        <div className='cart-items'>
          <div className='cart-items-title'>
            <p>items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cardItems[item.id] > 0) {
              return (
                <>
                  <div key={index} className='cart-items-title cart-items-item'>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cardItems[item.id]}</p>
                    <p>${item.price * cardItems[item.id]}</p>
                    <p>
                      <p
                        className='cross'
                        onClick={() => removeItemCard(item.id)}
                      >
                        X
                      </p>
                    </p>
                  </div>
                  <hr />
                </>
              );
            }
          })}
        </div>
        <div className='cart-bottom'>
          <div className='cart-total'>
            <h2>Cart Totals</h2>
            <div>
              <div className='cart-total-details'>
                <p>Subtotal:</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className='cart-total-details'>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 :2 }</p>
              </div>
              <hr />
              <div className='cart-total-details'>
                <b>Total:</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2 }</b>
              </div>
            </div>
            <button onClick={()=>navigate("/order")} >PROCEED TO CHECKOUT</button>
          </div>
          <div className='cart-promoCode'>
            <div>
              <p>If you have a promo code Enter it here </p>
              <div className='cart-promoCode-input'>
                <input type='text' placeholder='Enter your promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
