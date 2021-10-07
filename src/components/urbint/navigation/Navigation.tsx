import React from "react";
import urbint from "./urbint.svg";
import bell from "./bell.svg";


interface NavigationProps {
    isIconVisible: boolean
}

const Navigation = ({isIconVisible}: NavigationProps) => {
  return (
    <>
      <div className="flex items-center p-4 bg-gray-700 font-sans font-bold text-white justify-between">
        <div className="flex items-center">
          <img src={urbint} className=" h-5 pr-3" alt="logo" />
          <div>DAMAGE PREVENTION</div>
        </div>
        {isIconVisible && <img src={bell} className="h-4 hidden sm:block" alt="bell" />}
      </div>
    </>
  );
};

export default Navigation;
