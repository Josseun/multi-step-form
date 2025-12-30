import { useState } from "react";

function Summary({ next, back }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Desktop isOpen={isOpen} setIsOpen={setIsOpen} back={back} next={next} />
    </div>
  );
}

export default Summary;

function Desktop({ isOpen, setIsOpen, back, next }) {
  return (
    <>
      <div>
        <div></div>
        <div className="flex flex-col gap-18 mt-5 ">
          <div className="w-140 flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-U-Bold text-Blue-950">
                Finishing up
              </h1>
              <p className="text-Grey-500 text-lg">
                Double-check everything looks OK before confirming.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-5 w-full max-w-115 bg-Blue-50 p-5">
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="flex gap-1 font-U-Bold text-Blue-950">
                    Arcade {isOpen ? <p> (Yearly)</p> : <p> (Monthly)</p>}
                  </h3>
                  <p
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-sm underline text-Grey-500 font-U-Med cursor-pointer hover:text-Purple-600"
                  >
                    Change
                  </p>
                </div>
                <div className="text-base text-Blue-950 font-U-Bold">
                  {isOpen ? <p> $90/yr</p> : <p> $9/mo</p>}
                </div>
              </div>
              <hr className="border-Purple-200 justify-center items-center w-full" />
              <div className="flex flex-col justify-center gap-5">
                <div className="flex justify-between w-105 items-center">
                  <div className="text-sm font-U-Med text-Grey-500">
                    Online service
                  </div>
                  <div className="text-sm text-Blue-950 font-U-Med">
                    {isOpen ? <p> +$10/yr</p> : <p> +$1/mo</p>}
                  </div>
                </div>
                <div className="flex justify-between w-105 items-center">
                  <div className="text-sm font-U-Med text-Grey-500">
                    Larger storage
                  </div>
                  <div className="text-sm text-Blue-950 font-U-Med">
                    {isOpen ? <p> +$20/yr</p> : <p> +$2/mo</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between pl-3  w-110 items-center">
              <div className="text-sm font-U-Med text-Grey-500">
                Total (per month)
              </div>
              <div className="font-U-Bold text-Purple-600 text-xl">
                {isOpen ? <p> +$120/yr</p> : <p> +$12/mo</p>}
              </div>
            </div>
          </div>

          <div className="w-full max-w-120 flex justify-between">
            <button
              onClick={back}
              type="submit"
              className="flex justify-center items-center p-3 rounded-lg  bg-white text-Grey-500 font-U-Bold text-base w-35 cursor-pointer"
            >
              Go Back
            </button>
            <button
              onClick={next}
              type="submit"
              className="flex justify-center items-center p-3 rounded-lg bg-Blue-950 text-Blue-50 font-U-Bold text-lg w-35 hover:bg-Purple-600 cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
