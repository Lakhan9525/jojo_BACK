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
  account_id: { type: String, required: true },
  car_name: { type: String, required: true },
  car_color: { type: String, required: true },
  email: { type: String, required: true },
  Price: { type: String, required: true },
  Mileage: { type: String, required: true },
  
  photo: { type: String },
  description_1: { type: String, required: true },
  description_2: { type: String },
  description_3: { type: String },
  description_4: { type: String },
  description_5: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  country: { type: String, required: true }
  
});

const UserInfo = mongoose.model('UserInfo', personalSchema);

module.exports = UserInfo;