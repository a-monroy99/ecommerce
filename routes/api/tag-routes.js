const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const products = await Tag.findAll({
      include: [{
        model: Product,
        through: ProductTag
      }]
    })
    res.json(products)
  } catch (err) {
    res.json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const products = await Tag.findOne({
      include: [{
        model: Product,
        through: ProductTag
      }]
    })
    res.json(products)
  } catch (err) {
    res.json(err)
  }
  // model: Product
  // through ProductTag
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    
  } catch (err) {
    
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;