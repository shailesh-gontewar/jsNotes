const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
// Create an Express app
const app = express();
// Create an HTTP server using the Express app
const server = http.createServer(app);
// Create a Socket.io instance attached to the server
const io = socketIo(server);

// Serve a simple HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Define Socket.io event handlers
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle custom events
  socket.on('chat message', (message) => {
    console.log('Message: ' + message);
    // Broadcast the message to all connected clients
    io.emit('chat message', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3500;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
