
import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  // console.log("props",props);
    // const {name,cuisines,costForTwo,avgRating}=props.resData.data;
    return(
      <div  className="resCard">
        <img className="resCardImg" src={IMG_CDN_URL+(props.resData?.info?.cloudinaryImageId || props.resData?.data?.cloudinaryImageId)} alt="" />
          <h2>{props.resData?.data?.name.substring(0, 15) || props.resData?.info?.name.substring(0, 15)}</h2>
          <h4>{props.resData?.info?.cuisines.slice(0,4).join(", ") || props.resData?.data?.cuisines.slice(0,4).join(", ")}</h4>
          <h4>{props.resData?.info?.avgRating} stars</h4>
          <h4>{props.resData?.info?.costForTwo}</h4>
   
      </div>
    )
}


export default RestaurantCard;