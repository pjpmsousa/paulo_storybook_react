import React from "react";
import styles from "./Navigation.module.css";
import urbint from "./urbint.svg";
import bell from "./bell.svg";


interface NavigationProps {
    isIconVisible: boolean
}

const Navigation = ({isIconVisible}: NavigationProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.company}>
          <img src={urbint} className={styles.logo} alt="logo" />
          <div>DAMAGE PREVENTION</div>
        </div>
        {isIconVisible && <img src={bell} className={styles.icon} alt="bell" />}
      </div>
    </>
  );
};

export default Navigation;
