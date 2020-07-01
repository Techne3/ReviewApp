require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  const results = await db.query("select * from restaurants");
  console.log(results);
  res.status(200).json({
    status: "success",
    data: {
      restaurants: ["mcdonalds", "wendys"],
    },
  });
});

// Get a Restaurant
app.get("/api/v1/restaurants:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurants: "mcdonalds",
    },
  });
});

// Create a Restaurant
app.post("api/v1/restaurants", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

// update
app.put("api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});
// delete
app.delete("api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is up on ${port}!`);
});
////////////////////
// psql tables
// postgressql tutorial
// ALTER TABLE products DROP COLUMN featured
// select * from restaurants

// CREATE TABLE restaurants(
//     id BIGSERIAL NOT Null PRIMARY KEY,
//     name VARCHAR(50) NOT Null,
//     location VARCHAR(50) NOT Null,
//     price_range INT NOT Null check(price_range >= 1 and price_range <= 5)
// );

// // seeds
// INSERT INTO restaurants( name, location, price_range)
// values( 'pizza hut', 'Denver', 2);
