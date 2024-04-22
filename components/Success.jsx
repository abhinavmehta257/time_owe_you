import Link from "next/link";
import React from "react";

function Success() {
  return (
    <div className="h-[100vh] w-full flex flex-col items-center justify-center bg-[#111111] p-[24px]">
      <img
        src="/assets/icons/success.gif"
        alt=""
        srcset=""
        className="w-[50%]"
      />
      <Link
        href={"/dashboard"}
        className="mt-[56px] px-[16px] py-[11px] bg-[#75dfc2] rounded-[8px] border justify-center items-center inline-flex"
      >
        Go to dashboard
      </Link>
    </div>
  );
}

export default Success;
