import React from "react";
import styles from "./Badge.module.css";
import {LevelEnum} from "../utils/LevelEnum";

interface BadgeProps {
  riskLevel: LevelEnum;
  isBadge: boolean;
}

const Badge = ({ riskLevel, isBadge }: BadgeProps) => {

  const riskDescription: string = riskLevel === LevelEnum.veryHigh ? "very high" : riskLevel;

  return (
    <>
      {isBadge ? (
        <div className={`${styles.badge} ${styles[`badge-${riskLevel}`]}`}>
          {riskDescription.toUpperCase()}
        </div>
      ) : (
        <div className={`${styles.label} ${styles[`label-${riskLevel}`]}`}>
          {`${riskDescription.toUpperCase()} RISK`}
        </div>
      )}
    </>
  );
};

export default Badge;
