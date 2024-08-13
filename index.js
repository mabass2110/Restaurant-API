const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const app = express();
const port = 3000;
//mocked data
var restaurants = [
     {id: 0, name:"Burako da Velha"},
     {id: 1, name:"South Beach"},
     {id: 3, name:"Cais66"}
    ]

// Serve Swagger API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/restaurants", (req,res) => {
    res.send(restaurants);
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
