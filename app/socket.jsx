'use client';

import io from '@/lib/io';
import uuid from '@/packages/uuid';
import { Fragment, useEffect } from 'react';
import toast from 'react-hot-toast';
import { create } from 'zustand';

export const useStoreSocket = create((set) => ({
  id: null,
  connected: false,
  messages: [],
  connect: (id) => set((state) => ({ ...state, id, connected: true })),
  disconnect: () => set((state) => ({ ...state, connected: false })),
  addMessage: (message) =>
    set((state) => ({ ...state, messages: [...state.messages, message] })),
  clearMessages: () => set((state) => ({ ...state, messages: [] })),
}));

const Socket = () => {
  const { connect, disconnect, addMessage } = useStoreSocket();

  useEffect(() => {
    if (!io.socket) {
      const ws = window.WebSocket || window.MozWebSocket;
      const socket = ws && new ws(process.env.NEXT_PUBLIC_WS_URL);

      socket.id = uuid();

      socket.onopen = () => {
        console.log('[CLIENT]', 'Socket connected:', socket.id);
        connect(socket.id);
      };

      socket.onclose = () => {
        console.log('[CLIENT]', 'Socket disconnected:', socket.id);
        disconnect();
      };

      socket.onmessage = ({ data }) => {
        console.log('[CLIENT]', 'Message received:', data);
        addMessage({ date: new Date(), data });
        toast.success(`Socket.IO: ${data}`);
      };

      io.socket = socket;
    }
  }, [connect, disconnect, addMessage]);

  return Fragment;
};

export default Socket;
