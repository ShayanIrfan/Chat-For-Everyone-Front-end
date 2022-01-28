import React from "react";
import styles from "./MyUser.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const MyUser = () => {
  return (
      <div className={styles.MyUser__minibox}>
        <div className={styles.MyUser__datacontainer}>
          <AccountCircleIcon
            style={{ color: "gray", fontSize: "5.7rem" }}
            className={styles.MyUser__avatar}
          />
          <div className={styles.onlineDisplay}>
            <h2>User.</h2>
            <h4 style={{ display: "flex", alignItems: "center" }}>
              <FiberManualRecordIcon style={{ color: "green" }} />
              <span>Online</span>
            </h4>
          </div>
        </div>
      </div>
  );
};

export default MyUser;
