const mongoose = require('mongoose');


const PizzaSchema = new mongoose.Schema({
    crustType: {
        type: String,
    },
    isReg: {
        type: Boolean
    },
    isPesto: {
        type: Boolean
    },
    isPepperoni: {
        type: Boolean
    },
    isSteak: {
        type: Boolean
    },
    isMushrooms: {
        type: Boolean
    },
    isOnions: {
        type: Boolean
    }

}, {timestamps: true});

const Pizza = mongoose.model('Pizza', PizzaSchema);

module.exports = Pizza;