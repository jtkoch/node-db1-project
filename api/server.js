const express = require("express");
const accountsRouter = require("../accounts/account-router");
const server = express();

server.use(express.json());
server.use('/api/accounts', accountsRouter)

server.get('/', (req, res) => {
  res.status(200).json({
    message: "Main route working",
  })
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})


module.exports = server;