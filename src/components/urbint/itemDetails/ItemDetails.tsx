import React from "react";
import { Link } from "react-router-dom";
import styles from "./ItemDetails.module.css";
import { useLocation } from "react-router-dom";
import Badge from "../badge/Badge";
import { ItemProps } from "../item/Item";

const ItemDetails = () => {

  // Stretch Goal: basic component that serves only the purpose of displaying item detail and routes working
  const info: any = useLocation();
  const item: ItemProps = {
    risk: info.state.risk,
    itemId: info.state.itemId,
    type: info.state.type,
    street: info.state.street,
    town: info.state.town,
    startDate: info.state.startDate,
    task: info.state.task,
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <b>Id:</b> {item.itemId}
        </div>
        <div>
          <b>Task:</b> {item.task}
        </div>
        <div>
          <b>Type:</b> {item.type}
        </div>
        <div>
          <b>Street:</b> {item.street}
        </div>
        <div>
          <b>Town:</b> {item.town}
        </div>
        <div>
          <b>Start date:</b> {new Date(item.startDate).toLocaleString()}
        </div>
        <Badge isBadge riskLevel={item.risk} />
      </div>

      <Link className={styles.link} to="/">
        Go Back
      </Link>
    </>
  );
};

export default ItemDetails;
