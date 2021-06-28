import mongoose from 'mongoose'

export const product = mongoose.model('product', new mongoose.Schema({
  name: String,
  price: Number,
  description: String
}))
