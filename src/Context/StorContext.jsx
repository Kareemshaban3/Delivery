/** @format */

import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});

  const addItemCard = (itemId) => {
    if (!cardItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeItemCard = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cardItems) {
      if(cardItems[item] > 0){
        let itemInfo = food_list.find((product)=> product.id  === item)
        totalAmount += itemInfo.price *  cardItems[item]
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cardItems,
    setCardItems,
    addItemCard,
    removeItemCard,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
