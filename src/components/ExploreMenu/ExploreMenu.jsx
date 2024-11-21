/** @format */

import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
export default function ExploreMenu({setCategory, category}) {
  return (
    <>
      <div id='explore-menu' className='explore-menu'>
        <h1>Explore our menu</h1>
        <p className="explore-menu-text" >
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest Ready to embark on your culinary adventure?
          Let's start by choosing your favorite dish.
        </p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item , index)=>{
                        return(
                            <div onClick={()=>setCategory(perv=>perv===item.menu_name?"All":item.menu_name)} key={index}  className="explore-menu-list-item">
                                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                                    <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
      </div>
    </>
  );
}
