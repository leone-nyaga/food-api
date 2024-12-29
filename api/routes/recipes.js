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
  res.json(recipe);
});

/* get recipe by category or name */
router.get('/search', (req, res) => {
  const { name, category } = req.query;
  const recipes = readFoodFile();

  /* Apply filtering with OR logic */
  const filteredRecipes = recipes.filter((r) => {
    const matchesName = name ? r.name.toLowerCase().includes(name.toLowerCase()) : true;
    const matchesCategory = category ? r.category.toLowerCase() === category.toLowerCase() : true;
    return matchesName || matchesCategory; // Recipe matches if either condition is true
  });

  res.json(filteredRecipes);
});


/* post request to add recipes 
 * validates the fields a client needs to send in the post request
 */
router.post('/', (req, res) => {
  const recipes = readFoodFile();
  const { name, ingredients, instructions, category, image, youtube } = req.body;
  
  if (!name || !ingredients || !instructions || !category) {
    return res.status(400).json({ error: 'Name, ingredients, instructions, and category are required fields.' });
  }

  const newId = recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1;

  const newRecipe = {
    id: newId,
    name,
    ingredients,
    instructions,
    category,
    image,
    youtube
  };

  /* data is included in the recipe array */
  recipes.push(newRecipe);
  /* the data is the pushed to the food.json file */
  writeFoodFile(recipes);
  /* send status code if successfully added */
  res.status(201).json(newRecipe);
});

/* put route to update existing recipe */
router.put('/:id', (req, res) => {
  const recipes = readFoodFile();  // 1
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(req.params.id));  // 2
  if (recipeIndex === -1) {  // 3
    return res.status(404).json({ error: 'Recipe not found' });  // 4
  }

  recipes[recipeIndex] = { ...recipes[recipeIndex], ...req.body };  // 5
  writeFoodFile(recipes);  // 6
  res.json(recipes[recipeIndex]);  // 7
});

router.delete('/:id', (req, res) => {
  const recipes = readFoodFile();
  const filteredRecipes = recipes.filter((r) => r.id !== parseInt(req.params.id));
  if (recipes.length === filteredRecipes.length) {
    return res.status(404).json({ error: 'Recipe not found' });
  }

  writeFoodFile(filteredRecipes);
  res.json({ message: 'Recipe deleted successfully', recipe: deletedRecipe });
});

module.exports = router;
