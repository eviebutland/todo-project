const mongoose = require('mongoose')
const itemSchema = require('../schema/item.js')
const Item = mongoose.model("Item", itemSchema)

module.exports = Item