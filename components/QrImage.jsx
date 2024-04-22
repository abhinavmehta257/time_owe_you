import Link from "next/link";
import React from "react";

function QrImage({ url, name }) {
  return (
    <div className="bg-[#111111] h-[100vh] p-[24px] flex flex-col justify-center items-center">
      <Link
        href={"/dashboard"}
        className="w-[48px] h-[48px] rounded-[8px] flex justify-center items-center absolute top-[48px] right-[24px] bg-[#333333] text-white"
      >
        X
      </Link>
      <span className="mb-[24px] text-white">Scan me</span>
      <img className="w-full rounded-[16px]" src={url} alt="" />
      <span className="text-white font-[700] text-[24px] text-center w-full mt-[16px]">
        {name}
      </span>
    </div>
  );
}

export default QrImage;
