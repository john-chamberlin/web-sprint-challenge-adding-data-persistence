// build your `/api/resources` router here
const express = require('express')
const router = express.Router()

const Resources = require('./model')

router.post('/', (req, res) => {
	const resource = req.body
	Resources.create(resource)
		.then(resource => {
			res.status(201).json(resource)
		})
		.catch(err => {
			res.status(500).json(err.message)
		})
})

router.get('/', (req, res) => {
	Resources.get()
		.then(resources => {
			res.status(200).json(resources)
		})
		.catch(err => {
			res.status(500).json(err)
		})
})

module.exports = router
