import { createContext } from "react";
import { io } from "socket.io-client";

export const socket = io(process.env.NEXT_PUBLIC_APP_API);
export const SocketContext = createContext(socket);
