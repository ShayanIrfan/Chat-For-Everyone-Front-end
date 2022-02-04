import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import style from "../../../../app.module.css";
import cx from "classnames";
import logo from "../../../../logo/Chat For Everyone.png"

const SignUp = ({ changeState }) => {

  return (
    <div className={style.subDiv}>
      <header className={styles.header}>
        <img src={logo} alt="Chat For Everyone" width="198px" />
      </header>
      <div className={styles.formDiv}>
        <form onSubmit={() => { }}>
          <div>
            <p className={styles.label}>Email</p>
            <input className={styles.inputField} type="email" required />
          </div>
          <div>
            <p className={styles.label}>Username</p>
            <input className={styles.inputField} type="text" required />
          </div>
          <div>
            <p className={styles.label}>Password</p>
            <input className={styles.inputField} type="password" required />
          </div>
          <div>
            <p className={styles.label}>Confirm Password</p>
            <input className={styles.inputField} type="password" required />
          </div>
          <div>
            <button className={styles.submitBtn} type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <div className={styles.signInBtnDiv}>
          <p>Already have an account?</p>
          <button className={styles.signInBtn} onClick={() => changeState("Sign in")}>Sign In.</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
