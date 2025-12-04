import React from 'react'
import StepBar from './StepBar';



function PickAddOns() {
  return (
    <div>
      <Desktop/>
    </div>
  )
}

export default PickAddOns






function Desktop() {
  // const [isOpen, setIsOpen] = useState(false);

  // const [active, setActive] = useState(0)


  return (
    <>
      <div>
        <div className="flex justify-center gap-10 bg-white rounded-lg shadow-lg pl-5 pt-5">
          <div>
            <StepBar />
          </div>
          <div className="flex flex-col gap-20 mt-5 ">
            <div className="w-140 flex flex-col gap-10">
                <div>
                <h1 className="text-4xl font-U-Bold text-Blue-950">
             Pick add-ons
                </h1>
                <p className="text-Grey-500 text-lg">
                Add-ons help enhance your gaming experience.
                </p>
              </div>
              <div className='flex flex-col justify-center items-start gap-5 w-full'>
<div className='flex justify-between items-center bg-white w-120 p-4 rounded-lg border border-Purple-200'>
<div className='flex justify-center items-center gap-10'>
  <input type="checkbox"   name="" id="" />
  <div>
    <p className='text-Blue-950 font-U-Bold text-xl'> Online service</p>
    <p className='text-Grey-500 font-U-Med'>Access to multiplayer games</p>
  </div>
</div>
<div className='text-Purple-600 font-U-Med'>+$1/mo</div>
</div>
<div className='flex justify-between items-center bg-white w-120 p-4 rounded-lg border border-Purple-200'>
<div className='flex justify-center items-center gap-10'>
  <input type="checkbox"   name="" id="" />
  <div>
    <p className='text-Blue-950 font-U-Bold text-xl'> Larger storage</p>
    <p className='text-Grey-500 font-U-Med'>  Extra 1TB of cloud save</p>
  </div>
</div>
<div className='text-Purple-600 font-U-Med'>+$2/mo</div>
</div>
<div className='flex justify-between items-center bg-white w-120 p-4 rounded-lg border border-Purple-200'>
<div className='flex justify-center items-center gap-10'>
  <input type="checkbox"   name="" id="" />
  <div>
    <p className='text-Blue-950 font-U-Bold text-xl'> Customizable Profile</p>
    <p className='text-Grey-500 font-U-Med'> Custom theme on your profile</p>
  </div>
</div>
<div className='text-Purple-600 font-U-Med'>+$2/mo</div>
</div>
       </div>
            </div>

            <div className="w-full max-w-120 flex justify-between">
              <button
                type="submit"
                className="flex justify-center items-center p-3 rounded-lg  bg-white text-blue-500 font-U-Bold text-lg w-35"
              >
                Go Back
              </button>
              <button
                type="submit"
                className="flex justify-center items-center p-3 rounded-lg bg-Blue-950 text-Blue-50 font-U-Bold text-lg w-35"
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