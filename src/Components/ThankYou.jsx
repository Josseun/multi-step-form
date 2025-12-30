import React from "react";
import Img from "../assets/images/icon-thank-you.svg";

function ThankYou() {
  return (
    <>
      <div>
        <Desktop />
      </div>
    </>
  );
}

export default ThankYou;

function Desktop() {
  return (
    <>
      <div className="h-full">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="w-140 gap-5 flex flex-col text-center justify-center items-center">
              <img src={Img} alt="" />
              <div className="text-4xl font-U-Bold text-Blue-950">
                Thank you!
              </div>
              <div className="w-110 font-U-Med text-Grey-500">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
