// build your `Resource` model here
const db = require('../../data/dbConfig')

function get() {
	return db('resources')
}

function create(resource) {
	return db('resources')
		.insert(resource)
		.then(([id]) => {
			return db('resources').where('resource_id', id).first()
		})
}

module.exports = {
	get,
	create
}
