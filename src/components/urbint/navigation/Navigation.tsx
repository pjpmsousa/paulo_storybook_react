import React from "react";
import styles from "./Navigation.module.css";
import logo from "../../../logo.svg";
import colors from "../../../stories/assets/colors.svg";

interface NavigationProps {
    isIconVisible: boolean
}

const Navigation = ({isIconVisible}: NavigationProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.company}>
          <img src={logo} className={styles.logo} alt="logo" />
          <div>DAMAGE PREVENTION</div>
        </div>
        {isIconVisible && <img src={colors} className={styles.icon} alt="icon" />}
      </div>
    </>
  );
};

export default Navigation;
