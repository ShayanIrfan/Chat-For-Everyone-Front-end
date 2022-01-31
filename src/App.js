import "./App.css";
import style from "./app.module.css";
import { SignInSignUp, ChatScreen, SettingsScreen } from "./screens/Index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignInSignUp />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </div>
  );
}

export default App;
