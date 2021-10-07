import React from "react";
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
      <div className="border-1 p-2 border-gray-300 font-sans max-w-xs font-medium text-gray-500 break-words">
        <div className="flex justify-between text-sm">
          <div className="flex" data-testid="risk-label">
            <Badge riskLevel={risk} isBadge={false} />
            <div className="text-gray-300 px-1">|</div>
            <div data-testid="item-id">{itemId}</div>
          </div>
          <div className="text-sm text-right text-gray-700" data-testid="item-type">{type}</div>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-base font-bold text-black text-left" data-testid="address-street">{street}</span>
          <span className="text-sm text-right flex items-center" data-testid="address-town">{town}</span>
        </div>
        <div className="text-sm flex text-left" data-testid="start-date">{`Starts in ${calculateDays(
          startDate
        )} days`}</div>
        <div className="text-sm flex text-left" data-testid="task-description">{task}</div>
      </div>
    </>
  );
};

export default Item;
