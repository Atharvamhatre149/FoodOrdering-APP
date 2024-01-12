import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurantList} from '../utils/constants';
import Spinner from '../../public/Spinner.svg'
import InfiniteScroll from "react-infinite-scroll-component";
import Shimmer from "./Shimmer";

const Body=()=>{
  const [resList,setResList]=useState([]);
  const [resAllList,setResAllList]=useState([]);
  const [searchText,setSearchText]=useState("");
  const [topRated,setTopRated]=useState("Top Rated Restaurants");
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2116805&lng=73.0907&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json=await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setResAllList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
    
  // const fetchNextCardsData=async()=>{
  //     setCart((cart)=>cart+16);
  //     console.log(cart);
  //     const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&offset=${cart}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`);
  //     const json=await data.json();
  //     // console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
  //     const newlist=json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
  //      setResList([...resList,...newlist]);
  //     setResAllList([...resAllList,...newlist])
  //     console.log(resList);
  // }
    
    return(
      <>
      
      <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" placeholder="Search..." value={searchText} 
                onChange={(e)=> setSearchText(e.target.value)}
              />
              <button className="searchBtn"  
              onClick={()=>{
                
                const filteredRestaurant=resAllList.filter((res)=>{
                  return res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) || res?.data?.name.toLowerCase().includes(searchText.toLowerCase())
                })
                setResList(filteredRestaurant);
              }}
              >Search</button>
            </div>
            <button className="filterBtn" onClick={
              ()=>{
                if(topRated==="Top Rated Restaurants")
                {

                  let reslist=[]
                  reslist=resList.filter((res)=>{
                    return parseFloat(res?.info?.avgRating || res?.data?.avgRating)>=4.5;
                  })
                  setResList(reslist);
                  setTopRated("All Restaurants")
                  // console.log(resList);
                }
                else{
                  setResList(resAllList);
                  setTopRated("Top Rated Restaurants");
                }
              }
            }>{topRated}</button>
          </div>
          {resList.length===0? 
              <Shimmer/> 
              :
         
            <div key={resList} className="restaurantContainer">
              {resList.map((res)=>(
                // console.log(res),
                <RestaurantCard className="restaurantCard" key={res?.info?.id} resData={res} />
                ))}
          </div>
          
          }
      </div>
      
      </>
    )
  }

export default Body;