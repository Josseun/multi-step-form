import React from "react";
import SidebarBg from "../assets/images/bg-sidebar-desktop.svg";
import PersonInfo from "./PersonInfo";
import SelectPlan from "./SelectPlan";

// import { useState } from "react";

function StepBar() {

  const SidebarData = [
    {
      id: 0,
      number: 1,
      name: " Your info",
      step: " Step 1",
      file: PersonInfo,
    },
    {
      id: 1,
      number: 2,
      name: "Select plan",
      step: "Step 2",
      file: SelectPlan,
    },
    {
      id: 2,
      number: 3,
      name: " Add-ons",
      step: " Step 3",
      // file: ,
    },
    {
      id: 3,
      number: 4,
      name: "Summary",
      step: "Step 4",
      // file: ,
    },
  ];

  // const [active, setActive] = useState(0)
  // const ActiveStep = SidebarData[active]

  return (
    <>
      <div className="flex items-center">
               <div className="flex flex-col h-full w-full gap-5 items-start text-White bgImage">
          {SidebarData.map((data, index) => {
            return (
              <div key={index}>
                <div>
                  <div className="flex gap-5 text-left  justify-center items-center">
                    <div className="px-4 py-2 border-2 text-lg font-U-Bold border-Blue-200 rounded-full active:text-Blue-950 active:bg-Blue-300">
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
      </div>
    </>
  );
}

export default StepBar;





{/* <img src="/assets/images/bg-sidebar-desktop.svg" className="absolute z-10" alt="" /> */}
{
  /* <div >
          
          <div className="flex gap-5 text-left  justify-center items-center">
            <div className="px-4 py-2 border-2 text-lg font-U-Bold border-Blue-200 rounded-full ">
              2
            </div>
            <div>
              <p className="text-m font-U-Med uppercase text-Blue-300"></p>
              <p className="text-lg text-Blue-50 font-U-Bold uppercase"></p>
            </div>
          </div>
          <div className="flex gap-5 text-left  justify-center items-center">
            <div className="px-4 py-2 border-2 text-lg font-U-Bold border-Blue-200 rounded-full ">
              3
            </div>
            <div>
              <p className="text-m font-U-Med uppercase text-Blue-300"></p>
              <p className="text-lg text-Blue-50 font-U-Bold uppercase"></p>
            </div>
          </div>
          <div className="flex gap-5 text-left  justify-center items-center">
            <div className="px-4 py-2 border-2 text-lg font-U-Bold border-Blue-200 rounded-full ">
              4
            </div>
            <div>
              <p className="text-m font-U-Med uppercase text-Blue-300"></p>
              <p className="text-lg text-Blue-50 font-U-Bold uppercase"></p>
            </div>
          </div>
        </div>  */
}
