import React from "react";
import styles from "./Item.module.css";
import Badge from "../badge/Badge";
import { LevelEnum } from "../badge/Badge";

interface ItemProps {
    risk: LevelEnum;
    itemId: string;
    type: string;
    street: string;
    town: string;
    startDate: string;
    task: string;
}

const Item = ({risk, itemId, type, street, town, startDate, task}: ItemProps) => {
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
        <div className={styles.description}>{startDate}</div>
        <div className={styles.description}>{task}</div>
      </div>
    </>
  );
};

export default Item;
