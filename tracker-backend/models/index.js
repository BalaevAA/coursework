const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  category:{
    type: String,
    required: [true, 'Please choose category']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);