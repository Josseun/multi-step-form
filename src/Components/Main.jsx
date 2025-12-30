import React from "react";
import PersonInfo from "./PersonInfo";
import SelectPlan from "./SelectPlan";
import PickAddOns from "./PickAddOns";
import ThankYou from "./ThankYou";
import Summary from "./Summary";
import StepBar from "./StepBar";

function Main() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-100">
      <StepBar />
    </div>
  );
}

export default Main;
