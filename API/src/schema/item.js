const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  group: {
    type: String,
    enum: ["work", "personal"],
    required: [true, 'Group is required']
  },
  category: {
    type: String,
    enum: ["quick task", "task", "project"]
  },
  estimatedTime: {
    type: String
  },
  status: {
    type: String,
    enum: ["completed", "not complete"]
  }
})

module.exports = itemSchema