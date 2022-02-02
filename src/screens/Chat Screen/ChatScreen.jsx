import React, { useState } from "react";
import style from "../../app.module.css";
import LeftPanel from "../../screens/Chat Screen/components/Left Panel/LeftPanel";
import RightPanel from "../../screens/Chat Screen/components/Right Panel/RightPanel";
import MidPanel from "../../screens/Chat Screen/components/Mid Panel/MidPanel";

const ChatScreen = () => {
  const [chatToShow, setChat] = useState();

  return (
    <div className={style.app__main}>
      <LeftPanel setChat={setChat}/>
      <MidPanel chatToShow={chatToShow}/>
      <RightPanel />
    </div>
  );
};

export default ChatScreen;
