import React from "react";
import StepBar from "./StepBar";

function PersonInfo() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

export default PersonInfo;

function Desktop() {
  return (
    <>
      <div>
        <div className="flex justify-center gap-15 bg-white rounded-lg shadow-lg pl-5 pt-5">
          <div>
            <StepBar />
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div className="w-140 pb-15">
              <div>
                <h1 className="text-4xl font-U-Bold text-Blue-950">
                  Personal info
                </h1>
                <p className="text-Grey-500 text-lg">
                  Please provide your name, email address, and phone number.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div className="flex gap-3 flex-col text-lg">
                  <label
                    className="text-xl font-U-Med text-Blue-950"
                    htmlFor="text"
                  >
                    Name
                  </label>
                  <input
                    className="border-2 border-Grey-500 w-120 p-2 rounded-lg"
                    type="text"
                    placeholder="  e.g. Stephen King"
                  />
                </div>
                <div className="flex gap-3 flex-col text-lg">
                  <label
                    className="text-xl font-U-Med text-Blue-950"
                    htmlFor="text"
                  >
                    Email Address
                  </label>
                  <input
                    className="border-2 border-Grey-500 w-120 p-2 rounded-lg"
                    type="text"
                    placeholder="  e.g. stephenking@lorem.com"
                  />
                </div>
                <div className="flex gap-3 flex-col text-lg">
                  <label
                    className="text-xl font-U-Med text-Blue-950"
                    htmlFor=""
                  >
                    Phone Number
                  </label>
                  <input
                    className="border-2 border-Grey-500 w-120 p-2 rounded-lg"
                    type="text"
                    placeholder="e.g. +1 234 567 890 "
                  />
                </div>
              </div>
            </div>
            <div className="w-full max-w-120 flex justify-end">
                <button type="submit" className="flex justify-center items-center p-3 rounded-lg bg-Blue-950 text-Blue-50 font-U-Bold text-lg w-35">
                Next Step
            </button>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
}

function Mobile() {
  return (
    <>
      <div className="lg:hidden ssm:block">
        <div className="w-140">
          <div>
            <h1 className="text-3xl font-U-Bold text-Blue-950">
              Personal info
            </h1>
            <p className="text-Grey-500 text-xl">
              Please provide your name, email address, and phone number.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="flex gap-3 flex-col text-lg">
              <label
                className="text-xl font-U-Med text-Blue-950"
                htmlFor="text"
              >
                Name
              </label>
              <input
                className="border-2 border-Grey-500 w-120 p-2 rounded-lg"
                type="text"
                placeholder="  e.g. Stephen King"
              />
            </div>
            <div className="flex gap-3 flex-col text-lg">
              <label
                className="text-xl font-U-Med text-Blue-950"
                htmlFor="text"
              >
                Email Address
              </label>
              <input
                className="border-2 border-Grey-500 w-120 p-2 rounded-lg"
                type="text"
                placeholder="  e.g. stephenking@lorem.com"
              />
            </div>
            <div className="flex gap-3 flex-col text-lg">
              <label className="text-xl font-U-Med text-Blue-950" htmlFor="">
                Phone Number
              </label>
              <input
                className="border-2 border-Grey-500 w-120 p-2 rounded-lg"
                type="text"
                placeholder="e.g. +1 234 567 890 "
              />
            </div>
          </div>
        </div>
        <div>Next Step</div>
      </div>
    </>
  );
}
