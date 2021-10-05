import { render, screen } from "@testing-library/react";
import Item from "./Item";
import { LevelEnum } from "../utils/LevelEnum";

const exampleItem = {
    risk: LevelEnum.medium,
    itemId: "#837403928",
    type: "DESIGN",
    street: "122 Lexington Ave",
    town: "Staten Island, NY",
    startDate: new Date("November 12, 2021"),
    task: "Planting Tree by Nyc Parks",
  };

describe('Item', () => {
    test('Checking if risk level label is displayed', () => {
        render(<Item key={exampleItem.itemId} {...exampleItem}></Item>);
        const element = screen.getByTestId('risk-label');
        expect(element).toBeInTheDocument();

    });

    test('Checking if item id is displayed', () => {
        render(<Item key={exampleItem.itemId} {...exampleItem}></Item>);
        const element = screen.getByTestId('item-id');
        expect(element).toBeInTheDocument();

    });

    test('Checking if item type is displayed', () => {
        render(<Item key={exampleItem.itemId} {...exampleItem}></Item>);
        const element = screen.getByTestId('item-type');
        expect(element).toBeInTheDocument();

    });

    test('Checking if street label is displayed', () => {
        render(<Item key={exampleItem.itemId} {...exampleItem}></Item>);
        const element = screen.getByTestId('address-street');
        expect(element).toBeInTheDocument();

    });

    test('Checking if town label is displayed', () => {
        render(<Item key={exampleItem.itemId} {...exampleItem}></Item>);
        const element = screen.getByTestId('address-town');
        expect(element).toBeInTheDocument();

    });

    test('Checking if start date is displayed', () => {
        render(<Item key={exampleItem.itemId} {...exampleItem}></Item>);
        const element = screen.getByTestId('start-date');
        expect(element).toBeInTheDocument();

    });

    test('Checking if task description is displayed', () => {
        render(<Item key={exampleItem.itemId} {...exampleItem}></Item>);
        const element = screen.getByTestId('task-description');
        expect(element).toBeInTheDocument();

    });
})
