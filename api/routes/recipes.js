const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

/* finds the path to the data/food.json file */
const foodFilePath = path.join(__dirname, '../data/food.json');

/**
 * is a synchronous function that reads data from the food.json file
 * and returns the javascript object
 */
const readFoodFile = () => {
  const data = fs.readFileSync(foodFilePath);
  return JSON.parse(data);
};


