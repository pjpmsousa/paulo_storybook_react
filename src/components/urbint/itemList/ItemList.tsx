import { LevelEnum } from "../utils/LevelEnum";
import Item from "../item/Item";
import styles from "./ItemList.module.css";
import { ItemProps } from "../item/Item";
import AddItem from "../addItem/AddItem";
import { useState } from "react";

const ItemList = () => {

  //mocked data for testing purposes
  const dummyItems: ItemProps[] = [
    {
      risk: LevelEnum.medium,
      itemId: "#837403928",
      type: "DESIGN",
      street: "122 Lexington Ave",
      town: "Staten Island, NY",
      startDate: new Date("November 12, 2021"),
      task: "Planting Tree by Nyc Parks",
    },
    {
      risk: LevelEnum.high,
      itemId: "#983774387",
      type: "DESIGN",
      street: "135 Main Avenue",
      town: "Boston, MA",
      startDate: new Date("November 20, 2021"),
      task: "Planting Tree by Nyc Parks",
    },
    {
      risk: LevelEnum.veryHigh,
      itemId: "#2987429384",
      type: "DESIGN",
      street: "163 Second Street",
      town: "Chicago, IL",
      startDate: new Date("December 3, 2021"),
      task: "Planting Tree by Nyc Parks",
    },
  ];

  const [list, setList] = useState(dummyItems);

  const onAddItem = (newItem: ItemProps): void => {
    setList((previousList) => {
      return [
        ...previousList,
        {
          risk: newItem.risk,
          itemId: newItem.itemId,
          type: newItem.type,
          street: newItem.street,
          town: newItem.town,
          startDate: newItem.startDate,
          task: newItem.task,
        },
      ];
    });
  };

  return (
    <>
      <AddItem addForm={onAddItem}></AddItem>
      <div className={styles.wrapper}>
        {list.map((item) => {
          return <Item key={item.itemId} {...item}></Item>;
        })}
      </div>
    </>
  );
};

export default ItemList;
