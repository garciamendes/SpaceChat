import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()

app.use(cors())
const server = createServer(app)
const socketIO = new Server(server, { cors: { origin: 'http://localhost:3000' } })

socketIO.on('connection', (socket) => {
  console.log('A user connected to server');

  socket.on('disconnect', () => {
    console.log('A user disconnected from the server');

  })
})

app.get('/api', (request, response) => {
  response.json({ message: 'Hello world' })
})

server.listen(3001)