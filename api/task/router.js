// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()

const Tasks = require('./model')

router.post('/', (req, res) => {
	const task = req.body
	Tasks.create(task)
		.then(task => {
			res.status(201).json(task)
		})
		.catch(err => {
			res.status(500).json(err.message)
		})
})

router.get('/', (req, res) => {
	Tasks.get()
		.then(tasks => {
			res.status(201).json(tasks)
		})
		.catch(err => {
			res.status(500).json(err.message)
		})
})

module.exports = router
