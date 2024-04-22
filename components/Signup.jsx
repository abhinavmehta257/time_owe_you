import Link from "next/link";
import React from "react";

function Signup() {
  return (
    <div className="lg:w-[420px] xl:w-[420px] 2xl:w-[420px] w-full ml-auto mr-auto bg-[#000000] h-[100vh]">
      <div className="w-full pl-[16px] pr-[16px]">
        <div className="pt-[56px] flex-col justify-start items-start gap-1 flex">
          <div className="text-white text-base font-normal font-['Poppins']">
            New here?
          </div>
          <div className="text-white text-2xl font-semibold font-['Poppins'] leading-9">
            Create a new account
          </div>
        </div>
        <div className="mt-[32px]">
          <div className=" text-white text-xs font-normal font-['Poppins']">
            Name
          </div>
          <input
            className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-[#111111] rounded-[8px] border border-[#75dfc2] focus:outline-none focus:border-orange-400"
            placeholder="Enter your Name"
          />
        </div>
        <div className="mt-[16px]">
          <div className=" text-white text-xs font-normal font-['Poppins']">
            Email ID
          </div>
          <input
            className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-[#111111] rounded-[8px] border border-[#75dfc2] focus:outline-none focus:border-orange-400"
            placeholder="Enter your Email ID"
          />
        </div>
        <div className="mt-[16px]">
          <div className=" text-white text-xs font-normal font-['Poppins']">
            Password
          </div>
          <input
            className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-[#111111] rounded-[8px] border border-[#75dfc2] focus:outline-none focus:border-orange-400"
            placeholder="Enter your Password"
          />
        </div>
        <div className="mt-[32px] w-full">
          <button className="text-[#111111] w-full py-[11px] bg-[#75dfc2] rounded-[8px] border border-[#75dfc2] justify-center items-center inline-flex">
            <div className="text-center text-xs font-semibold font-['Poppins']">
              Sign Up
            </div>
          </button>
        </div>
        <div className="w-full mt-[8px] h-4 justify-center items-center gap-2 flex">
          <div className="text-white text-xs font-normal font-['Open Sans']">
            Already a user?
          </div>
          <Link
            href="/login"
            className="text-[#75dfc2] text-xs font-normal font-['Open Sans'] underline"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
