import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()

app.use(cors())
const server = createServer(app)
const socketIO = new Server(server, { cors: { origin: 'http://localhost:3000' } })

let users: Array<any> = []

socketIO.on('connection', (socket) => {
  console.log('A user connected to server');

  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data)
  })

  socket.on('typing', (data) => socket.broadcast.emit('typingResponse', data))

  socket.on('newUser', (data) => {
    users.push(data)

    socketIO.emit('newUserResponse', data)
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected from the server');

    users = users.filter(users => users.socketID !== socket.id)
    socketIO.emit('newUserResponse', users)
    socket.disconnect()
  })
})

app.get('/api', (request, response) => {
  response.json({ message: 'Hello world' })
})

server.listen(3001)