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

/** synchronous function that writes data to the file.
 * if file doesn't exit, it will be created
 */
const writeFoodFile = (data) => {
  fs.writeFileSync(foodFilePath, JSON.stringify(data, null, 2));
};

/* get all */
router.get('/', (req, res) => {
  const recipes = readFoodFile();
  res.json(recipes);
});

/* get recipe by id */
router.get('/:id', (req, res) => {
  const recipes = readFoodFile();
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
  if (!recipe) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  res.json(recipes);
});

/* get recipe by category or name */
router.get('/search', (req, res) => {
  const { name, category } = req.query;
  const recipes = readFoodFile();
  let filteredRecipes = recipes;

  if (name) {
    filteredRecipes = filteredRecipes.filter((r) => 
      r.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (category) {
    filteredRecipes = filteredRecipes.filter((r) => 
      r.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json(filteredRecipes);
});

