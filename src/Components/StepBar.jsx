import React from "react";
import SidebarBg from "../assets/images/bg-sidebar-desktop.svg";
import PersonInfo from "./PersonInfo";
import SelectPlan from "./SelectPlan";
import PickAddOns from "./PickAddOns";
import Summary from "./Summary";
import ThankYou from "./ThankYou";

import { useState } from "react";

function StepBar() {
  const SidebarData = [
    {
      id: 0,
      number: 1,
      name: " Your info",
      step: " Step 1",
    },
    {
      id: 1,
      number: 2,
      name: "Select plan",
      step: "Step 2",
    },
    {
      id: 2,
      number: 3,
      name: " Add-ons",
      step: " Step 3",
    },
    {
      id: 3,
      number: 4,
      name: "Summary",
      step: "Step 4",
    },
  ];

  const [step, setStep] = useState(0);

  const steps = [
    <PersonInfo next={() => setStep(step + 1)} />,
    <SelectPlan
      next={() => setStep(step + 1)}
      back={() => setStep(step - 1)}
    />,
    <PickAddOns
      next={() => setStep(step + 1)}
      back={() => setStep(step - 1)}
    />,
    <Summary next={() => setStep(step + 1)} back={() => setStep(step - 1)} />,
    <ThankYou />,
  ];

  return (
    <>
      <div className="flex items-center">
        <div className="flex justify-center gap-10 bg-white rounded-lg shadow-lg pl-5 pt-5">
          <div className="flex flex-col h-full w-full gap-5 items-start text-White bgImage">
            {SidebarData.map((data, index) => {
              return (
                <div key={index}>
                  <div>
                    <div className="flex gap-5 text-left  justify-center items-center">
                      <div
                        onClick={() => setStep(index)}
                        className={`px-4 py-2 border-2 text-lg font-U-Bold border-Blue-200 rounded-full cursor-pointer ${
                          step === index ? "text-Blue-950 bg-Blue-200" : ""
                        }`}
                      >
                        {data.number}
                      </div>
                      <div>
                        <p className="text-m font-U-Med uppercase text-Blue-300">
                          {data.step}
                        </p>
                        <p className="text-lg text-Blue-50 font-U-Bold uppercase">
                          {data.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {steps[step]}
        </div>
      </div>
    </>
  );
}

export default StepBar;
