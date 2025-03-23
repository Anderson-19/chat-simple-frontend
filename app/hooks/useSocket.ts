import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { Message } from '../interfaces/message';
import { v4 } from 'uuid';

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [sala, setSala] = useState<string>('');

  useEffect(() => {
    const socketIo = io('http://192.168.56.103:3001/',{
      extraHeaders: {
        authentication: `Bearer ${v4()}`
      }
    });

    socketIo.on('connect', () => {
      setIsConnected(true);
    });

    socketIo.on('disconnect', () => {
      setIsConnected(false);
    });

    socketIo.on('chat message', (msg: Message) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  const sendMessage = (message: Message) => {
    if (socket) {
      const data = {
        room: sala,
        message
      }
      socket.emit('chat message', data);
    }
  };

  const unirmeSala = (sala: string) => socket?.emit('unirmeAlGrupo', sala);

  return { isConnected, messages, sendMessage, unirmeSala, setSala };
};
