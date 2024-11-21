/** @format */

import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StorContext";
import ItemFood from "../ItemFood/ItemFood";
export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <>
      <div className='food-display' id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className='food-display-list'>
          {food_list.map((item , index) => {
            if (category === "All" || category === item.category) {
              return (
                <ItemFood
                  key={index}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
