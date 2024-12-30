# FOOD API

This is a Kenyan food RESTapi that fetches data from a food.json file.

## TOOLS

1. ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)

2. ![Nodemon](https://img.shields.io/badge/Nodemon-76d04b?style=for-the-badge&logo=nodemon)

3. ![Mocha](https://img.shields.io/badge/Mocha-8d6748?style=for-the-badge&logo=mocha)

## Endpoints

1. Get All Recipes

+ Endpoint: **GET /**
+ Description: Fetches all the recipes
+ Response: 
  + Status: **200**
  + Body: An array of recipes.

Example Request:

```bash
curl -X GET http://localhost:3000/recipes
```

2. Get Recipe by ID

+ Endpoint: **GET /:id**
+ Description: Fetches a single recipe by its ID.
+ Parameters:
  + id: The ID of the recipe (integer).
+ Response:
  + Status: 200 OK
  + Body: A single recipe object.
  + Status: 404 Not Found (if recipe with specified ID does not exist)

Example Request:

```bash
curl -X GET http://localhost:3000/recipes/1
```

3. Search Recipes by Name or Category

+ Endpoint: **GET /search**
+ Description: Searches for recipes by name or category. You can filter by either or both parameters.
+ Query Parameters:
  + name (optional): Search for recipes by name.
  + category (optional): Search for recipes by category.
+ Response:
  + Status: 200 OK
  + Body: An array of matching recipes.

Example Request:

```bash
curl -X GET "http://localhost:3000/recipes/search?name=chapati"
```

4. Add a New Recipe

+ Endpoint: **POST /**
+ Description: Adds a new recipe. Requires name, ingredients, instructions, and category.
+ Request Body:
  + name: Name of the recipe (string).
  + ingredients: List of ingredients (array of strings).
  + instructions: Cooking instructions (string).
  + category: Category of the recipe (string).
  + image (optional): URL of an image for the recipe (string).
  + youtube (optional): URL to a YouTube video for the recipe (string).
+ Response:
  + Status: 201 Created
  + Body: The created recipe object.
Example Request:
```bash
curl -X POST http://localhost:3000/recipes \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Spaghetti Bolognese",
    "ingredients": ["spaghetti", "ground beef", "tomato sauce"],
    "instructions": "Cook spaghetti, brown beef, mix with sauce.",
    "category": "Dinner",
    "image": "https://example.com/spaghetti.jpg",
    "youtube": "https://youtube.com/spaghetti"
  }'
```

5. Update an Existing Recipe
+ Endpoint: PUT /:id
+ Description: Updates an existing recipe by its ID.
+ Parameters:
  + id: The ID of the recipe (integer).
+ Request Body:
  + name: Name of the recipe (string).
  + ingredients: List of ingredients (array of strings).
  + instructions: Cooking instructions (string).
  + category: Category of the recipe (string).
  + image (optional): URL of an image for the recipe (string).
  + youtube (optional): URL to a YouTube video for the recipe (string).
+ Response:
  + Status: 200 OK
  + Body: The updated recipe object.
  + Status: 404 Not Found (if recipe with specified ID does not exist)

+ Example Request:

```bash
curl -X PUT http://localhost:3000/recipes/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Spaghetti Bolognese",
    "ingredients": ["spaghetti", "ground beef", "tomato sauce", "garlic"],
    "instructions": "Cook spaghetti, brown beef, add garlic and sauce.",
    "category": "Dinner"
  }'
```

6. Delete a Recipe

+ Endpoint: DELETE /:id
+ Description: Deletes a recipe by its ID.
+ Parameters:
  + id: The ID of the recipe (integer).
+ Response:
  + Status: 200 OK
  + Body: A message confirming the deletion and the deleted recipe object.
  + Status: 404 Not Found (if recipe with specified ID does not exist)

+ Example Request:
```bash
curl -X DELETE http://localhost:3000/recipes/1
```
