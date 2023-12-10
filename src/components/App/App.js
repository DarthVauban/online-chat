import react from "react";
import MainPage from "../pages/MainPage";
import { SocketProvider } from "../../Contexts/SocketContext";
import "./App.scss";

function App() {
  return (
    <SocketProvider>
      <MainPage />
    </SocketProvider>
  );
}

export default App;
