const express = require('express');
const recipesRoutes = require('./routes/recipes');

const app = express();
const PORT = 3000;

/* middleware that parses json data */
app.use(express.json());

/* Routes */
app.use('/recipes', recipesRoutes);

/* Start the server
 * the "if (process.env.NODE_ENV !== 'test')" ensures that the server only starts 
 * when you're not in the test environment.
 */
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
