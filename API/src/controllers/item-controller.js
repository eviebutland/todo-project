const express = require('express')
const Router = express.Router
const controller = new Router()
const Item = require('../model/item.js')

controller.post('/add', async (req, res) => {
  try {
    console.log(req.body)
    res.send(req.body) // this doesn't seem to be showing in mongo atlas
	} 
	catch (err) {
		res.status(500).json({
			"message": `Unable to complete request. ${err}`
		})
	}
})

controller.get('/', async (req, res) => {

  try {
		let items = await Item.find();
    if(items.length === 0) {
			res.status(404).json({
				"message": "No items found"
			})
		} else {
			res.send(items)
		}
    console.log(items)

	} 
	catch (err) {
		res.status(500).json({
			"message": `Unable to complete request. ${err}`
		})
	}
})
// controller.get('/:id', async (req, res) => {
// 	getMentorById(req, res)
// })
// controller.delete('/:id', async (req, res) => {
// 	deleteMentorById(req, res)
// })
// controller.put('/:id', validatePUT(), async (req, res) => {
// 	updateMentor(req, res)
// })

module.exports = controller