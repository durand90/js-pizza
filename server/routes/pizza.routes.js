const PizzaController = require('../controllers/pizza.controller');


module.exports = app => {
    app.get('/api/pizzas', PizzaController.findAll);
    app.post('/api/pizzas', PizzaController.createPizza);
    app.get('/api/pizzas/:id', PizzaController.findOnePizza);
    // app.put('/api/authors/:id', AuthorController.updateExistingAuthor);
    // app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}