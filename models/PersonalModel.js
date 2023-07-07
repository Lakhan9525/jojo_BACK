const mongoose = require('mongoose');

// const addressSchema = new mongoose.Schema({
//   address_line_1: { type: String, required: true },
//   address_line_2: { type: String },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   zipcode: { type: String, required: true },
//   country: { type: String, required: true }
// });

const personalSchema = new mongoose.Schema({
  
  car_name: { type: String, required: true },
  car_color: { type: String, required: true },
  
  Price: { type: String, required: true },
  Mileage: { type: String, required: true },
  Power: { type: Number, required: true },
  Speed: { type:Number, required: true},
  Year: { type:Number, required: true},
  Model: { type:Number, required: true},
  
  photo: { type: String },
  description_1: { type: String, required: true },
  description_2: { type: String },
  description_3: { type: String },
  description_4: { type: String },
  description_5: { type: String }
 
  
});

const UserInfo = mongoose.model('UserInfo', personalSchema);

module.exports = UserInfo;