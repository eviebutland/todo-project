const express = require('express')
const Router = express.Router
const controller = new Router()
const Item = require('../model/item.js')

// controller.post('/', validatePOST(), async (req, res) => {
//   createNewMentor(req, res)
// })
controller.get('/', async (req, res) => {
	console.log(req)
  try {
		let returnedMentors = await Item.find();
		res.send(returnedMentors)
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