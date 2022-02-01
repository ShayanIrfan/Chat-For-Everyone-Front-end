import React from 'react';
import style from '../../app.module.css';
import styles from './SettingsScreen.module.css';
import cx from 'classnames';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SettingsScreen = () => {
    return (
        <div className={style.subDiv}>
            <header className={styles.headerDiv}>
                <button className={styles.backBtn}>
                    <i className={cx(`uil uil-corner-up-left-alt`, styles.backIconBtn)} />
                </button>
                <span>
                    <h1 className={styles.title}>
                        Settings
                    </h1>
                </span>
            </header>

            {/* <div className={styles.divisionline} /> */}
            <div className={styles.userCredentials}>
                <div className={styles.userImg}>
                    <AccountCircleIcon
                        style={{ color: "rgb(120 120 120)", fontSize: "7rem" }}
                        className={styles.MyUser__avatar}
                    />
                </div>
                <div className={styles.userData}>
                    <h2>
                        User
                    </h2>
                    <p>
                        Can't talk BlockChainSmokers Only...
                    </p>
                </div>
                <div className={styles.themeChangerBtn}>
                    <i className={cx(`uil uil-moon`, styles.sunIcon)} />
                </div>
            </div>
            <div>
                <div className={styles.chatsSetting}>
                    <p className={styles.sectionHeading}>
                        Chats
                    </p>
                    <div className={styles.sectionBtns}>
                        <div className={styles.underLine}>

                            <button className={styles.sectionBtn}>
                                <>
                                    <i className={cx(`uil uil-trash-alt`, styles.trashIcon, styles.BtnIcon)} />
                                </>

                                <span className={styles.BtnText}>
                                    Delete All Chats
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.accountSettings}>
                    <p className={styles.sectionHeading}>
                        Account
                    </p>
                    <div className={styles.sectionBtns}>
                        <div className={styles.underLine}>
                            <button className={styles.sectionBtn}>
                                <>
                                    <i className={cx(`uil uil-users-alt`, styles.trashIcon, styles.BtnIcon)} />
                                </>

                                <span className={styles.BtnText}>
                                    Add another Account
                                </span>
                            </button>
                        </div>
                        <div className={styles.underLine}>
                            <button className={styles.sectionBtn}>
                                <>
                                    <i className={cx(`uil uil-user-minus`, styles.trashIcon, styles.BtnIcon)} />
                                </>

                                <span className={styles.BtnText}>
                                    Delete this Account
                                </span>
                            </button>
                        </div>

                        <div className={styles.underLine}>
                            <button className={styles.sectionBtn}>
                                <>
                                    <i className={cx(`uil uil-signout`, styles.trashIcon, styles.BtnIcon)} />
                                </>

                                <span className={styles.BtnText}>
                                    Logout
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.branding}>
                        By Matrix
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SettingsScreen


{/* <i className={cx(`uil ${themeToggle ? `uil-sun` : `uil-moon`}`, styles.sunIcon)} /> */ }