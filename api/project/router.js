// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

const Projects = require('./model')

router.post('/', (req, res) => {
	const project = req.body
	Projects.create(project)
		.then(project => {
			res.status(201).json(project)
		})
		.catch(err => {
			res.status(500).json(err.message)
		})
})

router.get('/', (req, res) => {
	Projects.get()
		.then(projects => {
			res.status(201).json(projects)
		})
		.catch(err => {
			res.status(500).json(err.message)
		})
})

module.exports = router
