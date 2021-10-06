import React from "react";
import { useState } from "react";
import { ItemProps } from "../item/Item";
import { LevelEnum } from "../utils/LevelEnum";
import styles from "./AddItem.module.css";

interface AddItemProps {
  addForm(item: ItemProps): void;
}

const AddItem = ({ addForm }: AddItemProps) => {
  const [type, setType] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [task, setTask] = useState("");
  const [startDate, setStartDate] = useState("");
  const [riskLevel, setRiskLevel] = useState<LevelEnum>(LevelEnum.unknown);
  const [formInvalid, setFormInvalid] = useState(false);

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setType(event.target.value);
  };

  const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setStreet(event.target.value);
  };

  const handleTownChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setTown(event.target.value);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setTask(event.target.value);
  };

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setStartDate(event.target.value);
  };

  const handleRiskLevelChange = (event: any):void => {
    setRiskLevel(event.target.value);
  };

  const clearForm = (): void => {
    setType("");
    setStreet("");
    setTown("");
    setTask("");
    setStartDate("");
  };

  const addItem = (event: any): void => {
    event.preventDefault();

    const newItem: ItemProps = {
      // generate random id
      itemId: `#${Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .substring(1)}`,
      street: street,
      type: type,
      task: task,
      town: town,
      startDate: new Date(startDate),
      risk: riskLevel,
    };

    // adding some basic validation (forms with empty inputs don't get submitted)
    if (
      !town.length ||
      !task.length ||
      !street.length ||
      !startDate.length ||
      !type.length
    ) {
      setFormInvalid(true);
      return;
    }
    addForm(newItem);
    setFormInvalid(false);
    clearForm();
  };

  return (
    <>
      <form className={styles.form} onSubmit={addItem}>
        <div>
          <label className={styles.label} htmlFor="task">
            Task
          </label>
          <input
            className={
              !task.length && formInvalid ? styles.empty : styles.input
            }
            id="task"
            type="text"
            maxLength={100}
            placeholder="Enter task"
            value={task}
            onChange={handleTaskChange}
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="type">
            Type
          </label>
          <input
            className={
              !type.length && formInvalid ? styles.empty : styles.input
            }
            id="type"
            type="text"
            maxLength={20}
            placeholder="Enter type"
            value={type}
            onChange={handleTypeChange}
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="street">
            Street
          </label>
          <input
            className={
              !street.length && formInvalid ? styles.empty : styles.input
            }
            id="street"
            type="text"
            maxLength={45}
            placeholder="Enter street"
            value={street}
            onChange={handleStreetChange}
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="town">
            Town
          </label>
          <input
            className={
              !town.length && formInvalid ? styles.empty : styles.input
            }
            id="town"
            type="text"
            maxLength={20}
            placeholder="Enter town"
            value={town}
            onChange={handleTownChange}
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="date">
            Start Date
          </label>
          <input
            className={
              !startDate.length && formInvalid ? styles.empty : styles.input
            }
            id="date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="risk">
            Risk Level
          </label>
          <select id="risk" onChange={handleRiskLevelChange} value={riskLevel}>
            <option value={LevelEnum.unknown}>Unknown</option>
            <option value={LevelEnum.low}>Low</option>
            <option value={LevelEnum.medium}>Medium</option>
            <option value={LevelEnum.high}>High</option>
            <option value={LevelEnum.veryHigh}>Very High</option>
          </select>
        </div>

        <div>
          <button className={styles.button} type="submit">
            Add Item
          </button>
        </div>
      </form>
    </>
  );
};

export default AddItem;
