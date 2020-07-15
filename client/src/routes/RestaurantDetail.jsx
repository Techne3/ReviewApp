import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext";
import RestaurantFinder from "../api/RestaurantFinder";

function RestaurantDetail() {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>{selectedRestaurant && selectedRestaurant.name}</h2>
    </div>
  );
}

export default RestaurantDetail;
