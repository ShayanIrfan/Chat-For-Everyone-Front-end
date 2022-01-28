import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import style from "../../../../app.module.css";
import cx from "classnames";

const SignUp = () => {
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
    const icon = () => {
      themeToggle ? (
        <span class="iconify" data-icon="carbon:sun"></span>
      ) : (
        <span class="iconify" data-icon="clarity:moon-line"></span>
      );
    };
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
            <button className={styles.signInBtn}>Sign In.</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
