import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
  },
  flightNo: {
    type: Number,
  },
  departs: {
    type: Date,
  }
}, {
  timestamps: true,
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}