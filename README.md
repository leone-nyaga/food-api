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
curl -X GET http://localhost:3000/api/recipes
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
curl -X GET http://localhost:3000/api/recipes/1
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
curl -X GET "http://localhost:3000/api/recipes/search?name=chapati&category=bevarage"
```
