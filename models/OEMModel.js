const mongoose = require('mongoose');

const oemModelSchema = new mongoose.Schema({
  name: String,
  specs: String,
});

const OEMModel = mongoose.model('OEMModel', oemModelSchema);

module.exports = OEMModel;
