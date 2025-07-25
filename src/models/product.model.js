const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");

const ratingSchema = new mongoose.Schema({
  rate: Number,
  count: Number,
}, { _id: false });

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: { type: String, required: true },
  image: String,
  rating: ratingSchema,
}, { timestamps: true });

productSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Product', productSchema);
