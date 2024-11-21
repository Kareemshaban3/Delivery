import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./ItemFood.css"
import { StoreContext } from "../../Context/StorContext";
export default function ItemFood({id, name, description , price, image}) {

    const {addItemCard,removeItemCard,cardItems} = useContext(StoreContext);

    
    
  return (
    <>
   <div className="foodItem">
        <div className="food-item-img-container">
            <img className='food-item-img'  src={image} alt={name} />
           {
            
            !cardItems[id]
            ? <img className="add" onClick={()=> addItemCard(id)} src={assets.add_icon_white} alt="add_icon_white" />
            : <div className="food-item-contour">
                 <img  onClick={()=> removeItemCard(id)} src={assets.remove_icon_red} alt="remove_icon_red" /> 
                 <p>{cardItems[id]}</p>
                 <img  onClick={()=> addItemCard(id)} src={assets.add_icon_green} alt="add_icon_green" />
            </div>

           }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price">
                ${price}
            </p>
        </div>
    </div>
    
    </>
  );
}
