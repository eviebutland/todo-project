const express = require('express')
const Router = express.Router

const router = new Router()
router.use((req, res, next) => {
  console.log(res)
  next()
})

router.use('/todo', require('../controllers/item-controller'))

module.exports = router