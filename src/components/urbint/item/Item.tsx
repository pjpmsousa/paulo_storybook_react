import React from "react";
import styles from "./Item.module.css";
import Badge from "../badge/Badge";
import { LevelEnum } from "../utils/LevelEnum";

export interface ItemProps {
  risk: LevelEnum;
  itemId: string;
  type: string;
  street: string;
  town: string;
  startDate: Date;
  task: string;
}

const Item = ({
  risk,
  itemId,
  type,
  street,
  town,
  startDate,
  task,
}: ItemProps) => {
  
  const calculateDays = (startDay: any): number => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const today: any = new Date();
    return Math.round(Math.abs((startDay - today) / oneDay));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.risk}>
            <Badge riskLevel={risk} isBadge={false} />
            <div className={styles.separator}>|</div>
            <div>{itemId}</div>
          </div>
          <div className={styles.type}>{type}</div>
        </div>
        <div className={styles.location}>
          <span className={styles.street}>{street}</span>
          <span className={styles.town}>{town}</span>
        </div>
        <div className={styles.description}>{`Starts in ${calculateDays(
          startDate
        )} days`}</div>
        <div className={styles.description}>{task}</div>
      </div>
    </>
  );
};

export default Item;
