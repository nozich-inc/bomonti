import crypto from 'crypto';
import { WebSocketServer } from 'ws';
import './lib/crons.js';

const port = process.env.PORT_WS || 3001;

const wss = new WebSocketServer({ port: port, path: '/ws' }, () => {
  console.log(
    '[SERVER]',
    'WebSocket running on port',
    port,
    `⚡ Link: ws://localhost:${port}/ws`
  );
});

wss.on('connection', (socket) => {
  socket.id = crypto.randomUUID();

  console.log('[SERVER]', 'Socket connected:', socket.id);

  socket.on('connect', () => {
    console.log('[SERVER]', 'Socket connected:', socket.id);
  });

  socket.on('disconnect', () => {
    console.log('[SERVER]', 'Socket disconnected:', socket.id);
  });

  socket.on('message', (incoming) => {
    const message = incoming.toString();
    console.log('[SERVER]', 'Message received:', message);
    socket.send(message);

    switch (message) {
      case 'signOut':
        console.log('[SERVER]', 'Sign out');
        break;
      default:
        break;
    }
  });
});
