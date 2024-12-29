const express = require('express');
const recipesRoutes = require('./routes/recipes');

const app = express();
const PORT = 3000;


app.use(express.json());

/* Routes */
app.use('/recipes', recipesRoutes);

/* Start the server */
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
