import React from "react";
import StepBar from "./StepBar";
import Img from "../assets/images/icon-arcade.svg";
import Img1 from "../assets/images/icon-advanced.svg";
import Img2 from "../assets/images/icon-pro.svg";
import Img3 from "../assets/images/icon-checkmark.svg";
import { useState } from "react";

function SelectPlan() {
  return (
    <div>
      <Desktop />
      {/* <Mobile /> */}
    </div>
  );
}

export default SelectPlan;

function Desktop() {
  const [isOpen, setIsOpen] = useState(false);

  const [active, setActive] = useState(0)


  return (
    <>
      <div>
        <div className="flex justify-center gap-10 bg-white rounded-lg shadow-lg pl-5 pt-5">
          <div>
            <StepBar />
          </div>
          <div className="flex flex-col gap-12 mt-5 ">
            <div className="w-140">
              <div>
                <h1 className="text-4xl font-U-Bold text-Blue-950">
                  Select your plan
                </h1>
                <p className="text-Grey-500 text-lg">
                  You have the option of monthly or yearly billing.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-4 mt-10 w-full max-w-120">
                  <button
                  onClick={()=>setActive(0)}
                    type="button"
                   className={`w-37 pl-5 rounded-2xl flex gap-10 items-start flex-col border-2  text-Blue-950 p-5 ${active === 0 ? "border-Purple-600 bg-Blue-50" : "border-Purple-200 bg-White"}`}
                  >
                    <img src={Img} alt="" />
                    <div className="flex flex-col items-start">
                      <div className="font-U-Bold text-lg">Arcade</div>
                      <div className="text-Grey-500 font-U-Med">{isOpen ? <p>$90/yrs</p> : <p>$9/mo</p> }</div>
                       <div className="text-sm text-Blue-950 font-U-Bold">
                        {isOpen ? <p>2 months free</p> : <p></p>}
                      </div>
                    </div>
                  </button>
                  <button
                  onClick={()=>setActive(1)}
                    type="button"
                   className={`w-37 pl-5 rounded-2xl flex gap-10 items-start flex-col border-2  text-Blue-950 p-5 ${active ===1 ? "border-Purple-600 bg-Blue-50" : "border-Purple-200 bg-White"}`}
                  >
                    <img src={Img1} alt="" />
                    <div className="flex flex-col items-start">
                      <div className="font-U-Bold text-lg">Advanced</div>
                      <div className="text-Grey-500 font-U-Med">
                        {isOpen ? <p>$120/yrs</p> : <p>$12/mo</p>}
                      </div>
                        <div className="text-sm text-Blue-950 font-U-Bold">
                        {isOpen ? <p>2 months free</p> : <p></p>}
                      </div>
                    </div>
                  </button>
                  <button
                  onClick={()=>setActive(3)}
                    type="button"
                    className={`w-37 pl-5 rounded-2xl flex gap-10 items-start flex-col border-2  text-Blue-950 p-5 ${active === 3 ? "border-Purple-600 bg-Blue-50" : "border-Purple-200 bg-White"}`}
                  >
                    <img src={Img2} alt="" />
                    <div className="flex flex-col items-start">
                      <div className="font-U-Bold text-lg"> Pro</div>
                      <div className="text-Grey-500 font-U-Med">  {isOpen ? <p>$150/yrs</p> : <p>$15/mo</p>}</div>
                       <div className="text-sm text-Blue-950 font-U-Bold">
                        {isOpen ? <p>2 months free</p> : <p></p>}
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex justify-center items-center w-full max-w-120 bg-Purple-200 py-4  font-U-Bold text-lg gap-5">
                  <p>Monthly</p>
          <div
                      onClick={() => setIsOpen(!isOpen)}
                      className={`w-14 h-8 flex items-center hover:opacity-100 cursor-pointer px-1 rounded-4xl ${
                        isOpen ? "bg-Blue-950" : "bg-Purple-600"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 bg-white rounded-full transition-all ${
                          isOpen ? "translate-x-full" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  <p>Yearly</p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-120 flex justify-between">
              <button
                type="submit"
                className="flex justify-center items-center p-3 rounded-lg  bg-white text-blue-500 font-U-Bold text-lg w-37"
              >
                Go Back
              </button>
              <button
                type="submit"
                className="flex justify-center items-center p-3 rounded-lg bg-Blue-950 text-Blue-50 font-U-Bold text-lg w-37"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// function Mobile() {
//   return (
//     <>
//       <div className="lg:hidden ssm:block">
//         <div className="w-140">
//           <div>
//             <h1 className="text-3xl font-U-Bold text-Blue-950">
//               Personal info
//             </h1>
//             <p className="text-Grey-500 text-xl">
//               Please provide your name, email address, and phone number.
//             </p>
//           </div>
//           <div className="flex flex-col justify-center gap-5">
//             <div className="flex gap-3 flex-col text-lg">
//               <label
//                 className="text-xl font-U-Med text-Blue-950"
//                 htmlFor="text"
//               >
//                 Name
//               </label>
//               <input
//                 className="border-2 border-Grey-500 w-120 p-2 rounded-lg"
//                 type="text"
//                 placeholder="  e.g. Stephen King"
//               />
//             </div>
//             <div className="flex gap-3 flex-col text-lg">
//               <label
//                 className="text-xl font-U-Med text-Blue-950"
//                 htmlFor="text"
//               >
//                 Email Address
//               </label>
//               <input
//                 className="border-2 border-Grey-500 w-120 p-2 rounded-lg"
//                 type="text"
//                 placeholder="  e.g. stephenking@lorem.com"
//               />
//             </div>
//             <div className="flex gap-3 flex-col text-lg">
//               <label className="text-xl font-U-Med text-Blue-950" htmlFor="">
//                 Phone Number
//               </label>
//               <input
//                 className="border-2 border-Grey-500 w-120 p-2 rounded-lg"
//                 type="text"
//                 placeholder="e.g. +1 234 567 890 "
//               />
//             </div>
//           </div>
//         </div>
//         <div>Next Step</div>
//       </div>
//     </>
//   );
// }

// function Toggle() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         className={`w-14 h-8 flex items-center hover:opacity-100 cursor-pointer px-1 rounded-4xl ${
//           isOpen ? "bg-Blue-950" : "bg-Purple-600"
//         }`}
//       >
//         <div
//           className={`w-6 h-6 bg-white rounded-full transition-all ${
//             isOpen ? "translate-x-full" : "translate-x-0"
//           }`}
//         ></div>
//       </div>
//     </>
//   );
// }
