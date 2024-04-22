import Link from "next/link";
import React from "react";

function ForgotPassword() {
  return (
    <div className="flex justify-center">
      <div className="w-full pl-[16px] pr-[16px]">
        <div className="h-[150px] w-full fixed bg-[url('/assets/img/login-1.png')] bg-no-repeat bg-contain bg-right z-[-1]"></div>
        <div className="mt-[48px] flex-col justify-start items-start gap-1 flex">
          <div className="text-indigo-950 text-base font-normal font-['Poppins']">
            Oopsie!
          </div>
          <div className="text-indigo-950 text-2xl font-semibold font-['Poppins'] leading-9">
            Forgot Password?
          </div>
        </div>
        <div className="mt-[32px]">
          <div className=" text-indigo-950 text-xs font-normal font-['Poppins']">
            Email ID
          </div>
          <input
            type="email"
            className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-white rounded-2xl border border-orange-200 focus:outline-none focus:border-orange-400"
            placeholder="Enter your Email ID"
          />
        </div>
        <div className="mt-[32px] w-full">
          <div className="w-full py-[11px] bg-amber-100 rounded-2xl border border-indigo-950 shadow-[1px_4px_0px_0px_rgba(39,25,74,1)] justify-center items-center inline-flex">
            <div className="text-center text-indigo-950 text-xs font-semibold font-['Poppins']">
              Submit
            </div>
          </div>
        </div>
        <div className="w-full mt-[8px] h-4 justify-center items-center gap-2 flex">
          <div className="text-indigo-950 text-xs font-normal font-['Open Sans']">
            Have an account?
          </div>
          <Link
            href="/login"
            className="text-sky-300 text-xs font-normal font-['Open Sans'] underline"
          >
            Log In
          </Link>
        </div>
      </div>
      <div className="h-[150px] bottom-0 left-0 w-full fixed bg-[url('/assets/img/login-2.png')] bg-no-repeat bg-contain bg-left-bottom z-[-1]"></div>
    </div>
  );
}

export default ForgotPassword;
