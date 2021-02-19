// build your `Project` model here
const db = require('../../data/dbConfig')

function get() {
	return db('projects').then(projects => {
		return projects.map(proj => {
			return {
				...proj,
				project_completed: Boolean(proj.project_completed)
			}
		})
	})
}

function create(project) {
	return db('projects')
		.insert(project)
		.then(([id]) => {
			return db('projects')
				.where('project_id', id)
				.first()
				.then(proj => {
					return {
						...proj,
						project_completed: Boolean(proj.project_completed)
					}
				})
		})
}

module.exports = {
	get,
	create
}
