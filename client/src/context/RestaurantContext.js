import React, { useState, createContext } from "react";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurant, restaurant]);
  };

  return (
    <RestaurantContext.Provider
      value={{ restaurants: restaurants, setRestaurants, addRestaurants }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};
