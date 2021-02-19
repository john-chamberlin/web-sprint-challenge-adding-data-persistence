// build your `Task` model here
const db = require('../../data/dbConfig')

function get() {
	return db('tasks as t')
		.join('projects as p', 't.project_id', 'p.project_id')
		.select(
			't.task_id',
			't.task_description',
			'task_notes',
			'task_completed',
			'project_name',
			'project_description'
		)
		.then(tasks => {
			return tasks.map(task => {
				return {
					...task,
					task_completed: Boolean(task.task_completed)
				}
			})
		})
}

function create(task) {
	return db('tasks')
		.insert(task)
		.then(([id]) => {
			return db('tasks')
				.where('task_id', id)
				.first()
				.then(task => {
					return {
						...task,
						task_completed: Boolean(task.task_completed)
					}
				})
		})
}

module.exports = {
	get,
	create
}
