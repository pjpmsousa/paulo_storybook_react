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

  // calculate days remaining to start date
  const calculateDays = (startDay: any): number => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const today: any = new Date();
    return Math.round(Math.abs((startDay - today) / oneDay));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.risk} data-testid="risk-label">
            <Badge riskLevel={risk} isBadge={false} />
            <div className={styles.separator}>|</div>
            <div data-testid="item-id">{itemId}</div>
          </div>
          <div className={styles.type} data-testid="item-type">{type}</div>
        </div>
        <div className={styles.location}>
          <span className={styles.street} data-testid="address-street">{street}</span>
          <span className={styles.town} data-testid="address-town">{town}</span>
        </div>
        <div className={styles.description} data-testid="start-date">{`Starts in ${calculateDays(
          startDate
        )} days`}</div>
        <div className={styles.description} data-testid="task-description">{task}</div>
      </div>
    </>
  );
};

export default Item;
