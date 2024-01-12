import { useEffect, useState } from "react";
import Shimmer1 from "./Shimmer1";


const RestaurantMenu=()=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{

        const fetchMenu=async()=>{
            const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1509655&lng=72.8831294&restaurantId=62893&catalog_qa=undefined&submitAction=ENTER");

            const json=await data.json();

            setResInfo(json.data.cards[0].card.card.info);
            console.log(json.data.cards[0].card.card.info);
        }

        

        fetchMenu();

    },[]);

    return (
    resInfo===null ? (<Shimmer1/>)
    :
    (
        <div className="resMenu">
            <div className="resMenuTopLeft">
                <h2>{resInfo.name}</h2>
                <h4>{resInfo.cuisines.join(", ")}</h4>
                <h4>{resInfo.city}, {resInfo.areaName}</h4>
            </div>
            
            <div className="resMenuTopRight">
                <button className="ratingComponent">
                <span className="star">&#9733;</span>
                {resInfo?.avgRating===undefined 
                    ? "NEW" : 
                    resInfo?.avgRating
                    }
                    <hr className="hline" />
                    <p className="totalRating">
                        {resInfo?.totalRatingsString}
                    </p>
                    
                    
                </button>
            </div>
            
        </div>
    )
    )
}


export default RestaurantMenu;