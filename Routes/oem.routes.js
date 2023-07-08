const express = require('express');
const OEMModel = require('../models/OEMModel');

const router = express.Router();

// API to query the number of OEM models available
router.get('/', async (req, res) => {
  try {
    const count = await OEMModel.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// API to search for Honda City 2015 OEM specs
router.get('/honda_city_2015', async (req, res) => {
  try {
    const model = await OEMModel.findOne({ name: 'Honda City 2015' });
    if (model) {
      res.json({ specs: model.specs });
    } else {
      res.status(404).json({ error: 'Model not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
