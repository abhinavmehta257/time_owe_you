import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import Numpad from "../components/Numpad";
import Link from "next/link";
function numberPad() {
  const [recieverData, setRecieverData] = useState();
  const router = useRouter();
  const { query } = router;
  const { id, name, email } = query;
  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, []);
  return (
    <>
      <Link
        href={"/dashboard"}
        className="w-[48px] h-[48px] rounded-[8px] flex justify-center items-center absolute top-[24px] right-[24px] bg-[#333333] text-white"
      >
        X
      </Link>
      <div className="bg-[#111111] h-[85vh] rounded-[0_0_56px_56px] text-white px-[32px] pt-[48px]">
        <div className="flex flex-col justify-center items-center w-full">
          <img
            className="w-[56px] h-[56px] rounded-[16px]"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
          />
          <span className="text-white font-[600] mt-[8px]">
            {name ? name : "Abhinav test"}
          </span>
        </div>
        <Numpad />
      </div>
      <div className="bg-[#75dfc3] h-[7vh] mt-[-7vh] mb-0 relative z-[-1]"></div>
      <div className="bg-[#75dfc3] h-[15vh] text-center text-[32px] font-[700] text-[#111111] flex items-center justify-center">
        Send Time
      </div>
    </>
  );
}

export default numberPad;
