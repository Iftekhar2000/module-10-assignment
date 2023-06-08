

const Product = require('../models/products'); 


const getProducts =  async (req, res) => {
    try {
      const products = await Product.find({}, 'name price');
  
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = getProducts;

  