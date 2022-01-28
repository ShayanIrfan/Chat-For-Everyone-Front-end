import React, { useEffect, useState } from "react";
import styles from "./SignIn.module.css";
import style from "../../../../app.module.css";
import cx from "classnames";

const SignIn = () => {
  // STATES

  const [themeToggle, setThemeToggle] = useState(false);

  // FUNCTIONS

  useEffect(() => {
    const themeChanger = () => {
      themeToggle
        ? document.body.classList.add(`${style.darkTheme}`)
        : document.body.classList.remove(`${style.darkTheme}`);
    };
    themeChanger();
  }, [themeToggle]);

  return (
    <main>
      <div className={style.subDiv}>
        <header className={styles.header}>
          <>
            <p className={styles.Logo}>BlockChainSmokers</p>
          </>
          <div onClick={() => setThemeToggle(!themeToggle)}>
            <i
              className={cx(
                `uil ${themeToggle ? `uil-sun` : `uil-moon`}`,
                styles.sunIcon
              )}
            />
          </div>
        </header>
        <div className={styles.formDiv}>
          <form onSubmit={() => {}}>
            <div>
              <p className={styles.label}>Email</p>
              <input className={styles.inputField} type="email" required />
            </div>
            <div>
              <p className={styles.label}>Password</p>
              <input className={styles.inputField} type="password" required />
            </div>
            <div className={styles.checkBoxDiv}>
              <label>
                <input type="checkbox" />
                <span className={styles.checkBox} />
              </label>
              <p className={styles.checkBoxText}>Remember Me</p>
            </div>
            <div>
              <button className={styles.submitBtn} type="submit">
                Sign In
              </button>
            </div>
          </form>
          <div className={styles.signUpBtnDiv}>
            <p>Don't have an account?</p>
            <button className={styles.signUpBtn}>Sign Up.</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
