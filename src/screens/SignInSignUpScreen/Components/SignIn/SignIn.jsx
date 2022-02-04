import React, { useRef } from "react";
import styles from "./SignIn.module.css";
import style from "../../../../app.module.css";
import logo from "../../../../logo/Chat For Everyone.png"

const SignIn = ({ changeState }) => {

  const remeberParaRef = useRef();
  const inputCheck = useRef();

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
            <p className={styles.label}>Password</p>
            <input className={styles.inputField} type="password" required />
          </div>
          <div className={styles.checkBoxDiv}>
            <label onMouseOver={() => remeberParaRef.current.style.color = "hsl(191, 99%, 67%)"} onMouseOut={() => { if (inputCheck.current.checked) { remeberParaRef.current.style.color = "hsl(191, 99%, 67%)" } else { remeberParaRef.current.style.color = "hsl(190, 99%, 33%)" } }} >
              <input type="checkbox" ref={inputCheck} />
              <span className={styles.checkBox} />
            </label>
            <p className={styles.checkBoxText} ref={remeberParaRef}>Remember Me</p>
          </div>
          <div>
            <button className={styles.submitBtn} type="submit">
              Sign In
            </button>
          </div>
        </form>
        <div className={styles.signUpBtnDiv}>
          <p>Don't have an account?</p>
          <button className={styles.signUpBtn} onClick={() => changeState("Sign up")}>Sign Up.</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
