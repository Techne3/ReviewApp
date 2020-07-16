import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext";
import RestaurantFinder from "../api/RestaurantFinder";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AllReview from "../components/AllReview";

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
      <h4>
        {" "}
        {selectedRestaurant && (
          <>
            <div className="mt-3">
              <Reviews />
            </div>
            <AllReview />
          </>
        )}{" "}
      </h4>
    </div>
  );
}

export default RestaurantDetail;
