import { useEffect, useState, ReactNode, createContext } from "react";
import socketIOClient, { Socket } from "socket.io-client";

interface SocketContextProps {
  socket?: Socket;
  initiateConnection: () => void;
}

interface SocketContainerProps {
  children: ReactNode;
}

export const SocketContext = createContext<SocketContextProps>({
  initiateConnection: () => { },
});

export default function SocketContainer({ children }: SocketContainerProps) {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);

  // Initialized socket connection.
  const initiateConnection = () => {
    const isAuthenticated = localStorage.getItem("_token");
    if (isAuthenticated) {
      const _userUUID = JSON.parse(localStorage.getItem('_user') || '{}');
      const _user_uuid = _userUUID ? _userUUID.uuid : "";
      const socketInitialise = socketIOClient(`${process.env.REACT_APP_SOCKET_URL}`, {
        transports: ['websocket'],
        query: { userUUID: _user_uuid },
        autoConnect: true
      });
      setSocket(socketInitialise);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log("connect", socket.id);
      });
      socket.on('disconnect', () => {
        console.log("disconnect");
      });
    }

    // Cleanup the socket connection on unmount
    return () => {
      socket?.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value=
      {{
        socket,
        initiateConnection
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}
