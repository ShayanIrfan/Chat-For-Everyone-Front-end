import React from "react";
import styles from "./MyUser.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useSelector } from "react-redux";

const MyUser = () => {
  const me = useSelector(state => state.me)
  const name = me.firstName + " " + me.lastName;

  return (
      <div className={styles.MyUser__minibox}>
        <div className={styles.MyUser__datacontainer}>
          <AccountCircleIcon
            style={{ color: "rgb(120 120 120)", fontSize: "5.8rem" }}
            className={styles.MyUser__avatar}
          />
          <div className={styles.onlineDisplay}>
            <h2>{name.split(" ")[0]}</h2>
            <h4 style={{ display: "flex", alignItems: "center"}}>
              <FiberManualRecordIcon style={{ color: "#41CA00", fontSize: 13 }} />
              <span>Online</span>
            </h4>
          </div>
        </div>
      </div>
  );
};

export default MyUser;
