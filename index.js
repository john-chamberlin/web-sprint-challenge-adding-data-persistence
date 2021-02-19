// start your server here
const server = require('./api/server')
const PORT = process.env.port || 4000

server.listen(PORT, () => {
	console.log(`Server do be a listenin' on port ${PORT}`)
})
