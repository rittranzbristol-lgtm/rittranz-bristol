import { RouterProvider } from "react-router";
import ChatWidget from "../components/chat/ChatWidget";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ChatWidget />
    </>
  );
}
