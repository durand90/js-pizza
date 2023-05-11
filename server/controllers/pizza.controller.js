const Pizza = require('../models/pizza.model');

module.exports.findAll = (req, res) => {
    Pizza.find()
        .then(allPizza => res.json(allPizza))
        .catch(err => res.status(400).json(err));
}

module.exports.createPizza = (req, res) => {
    Pizza.create(req.body)
        .then(newPizza => {
            console.log('DB SUCCESS!!!')
            res.json(newPizza)})
        .catch(err => {
            console.log('DB ERROR!!!')
            res.status(400).json(err)});
}


module.exports.findOnePizza = (req, res) => {
    Pizza.findOne({ _id: req.params.id })
        .then(onePizza => res.json(onePizza))
        .catch(err => res.status(400).json(err));
}


// module.exports.updateExistingAuthor = (req, res) => {
//     Author.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedAuthor => {
//             console.log('DB SUCCESS!!!')
//             res.json(updatedAuthor)})
//         .catch(err => {
//             console.log('DB ERROR!!!')
//             res.status(400).json(err)});
// }

// module.exports.deleteAuthor = (req, res) => {
//     Author.deleteOne({ _id: req.params.id })
//         .then(result => res.json(result))
//         .catch(err => res.status(400).json('Something went wrong',err));
// }