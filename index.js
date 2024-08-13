const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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

app.post("/restaurant", (req, res) => {
  const restaurant = {
    id: req.body.id,
    name: req.body.name
  }

  //checks if the id is a number and the name is a string
  if( typeof restaurant.id === "number" && typeof restaurant.name === "string") {
    restaurants.push(restaurant);
    return res.status(201).json({
        status: 201,
        message: "Restaurant successfully created"
      });
  };
      //error response
      return res.status(400).json({
        status: 400,
        message: "Select a valid name and id."
      })


}
)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port} 🚀`);
});
