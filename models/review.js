const mongoose = require("mongoose");

// pull out Schema from mongoose
const Schema = mongoose.Schema;   // ✅ this is the correct way

const reviewSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
