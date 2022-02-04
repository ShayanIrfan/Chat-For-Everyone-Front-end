import "./App.css";
import style from "./app.module.css";
import { SignInSignUp, ChatScreen, SettingsScreen } from "./screens/Index";
import { Routes, Route } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignInSignUp />} />
        <Route path="/chat" element={<Chat />}>
          <Route path="" element={<ChatScreen />} />
          <Route path="settings" element={<SettingsScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
