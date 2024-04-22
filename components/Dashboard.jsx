import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Transactions from "./Transactions";
import formatTimeFromMinutes from "../helpers/hoursConverter";
import Link from "next/link";

function Dashboard() {
  const [userData, setUserData] = useState();
  const [qrImg, setQrImg] = useState();
  async function getUserData() {
    const authToken = Cookies.get("token");
    const headers = {
      Authorization: authToken, // Add the token to the Authorization header
      "Content-Type": "application/json", // Example of another header
    };
    const response = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:-qIKyLNe/auth/me",
      { headers }
    );
    console.log(response.data);
    setUserData(response.data.user);
    setQrImg(response.data.qrImg);
  }
  useEffect(() => {
    async function fetchData() {
      await getUserData();
    }
    fetchData();
  }, []);

  return (
    <>
      {userData ? (
        <div className="p-[12px] bg-[#111111] w-full h-[100vh]">
          <div className="p-[12px] rounded-[36px] bg-[#d2a9ff] shadow-[0px_5px_20px_0px_rgba(210,169,255,.5)]">
            <div className="flex py-[24px]">
              <div className="w-[32px] h-[32px] ">
                <img
                  className="rounded-[8px]"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-[#111111] flex flex-col gap-0 ml-[8px]">
                <span className="text-[12px]">HELLO</span>
                <span className="font-[900] mt-[-8px]">
                  {userData ? userData.name : ""}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-[600] text-[#333333]">
                Your Balance
              </span>
              <span className="text-[32px] font-[800] mt-[-10px]">
                {userData ? formatTimeFromMinutes(userData.total_time) : null}
              </span>
            </div>
            <div className="flex mt-[8px]">
              <Link
                href={"/qrimage?id=" + userData.id + "&name=" + userData.name}
                className="font-[600] py-[16px] mr-[8px] w-[50%] rounded-full bg-[#111111] text-white  text-center"
              >
                Recieve
              </Link>
              <Link
                href={"/scanner"}
                className="font-[600] py-[16px] w-[50%] rounded-full bg-white text-[#111111] text-center"
              >
                Send
              </Link>
            </div>
          </div>
          {userData ? <Transactions myId={userData.id} /> : null}
        </div>
      ) : null}
    </>
  );
}

export default Dashboard;
