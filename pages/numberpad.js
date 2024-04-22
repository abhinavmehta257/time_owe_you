import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import Numpad from "../components/Numpad";
import Link from "next/link";
import formatTimeFromMinutes from "../helpers/hoursConverter";
import LoadingScreen from "../components/LoadingScreen";
import Success from "../components/Success";
function numberPad() {
  const [time, setTime] = useState("");
  const [formatedTime, setFormattedTime] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const { query } = router;
  const { id, name, email, myId } = query;

  function formatTime(time) {
    setTime(time);
    setFormattedTime(formatTimeFromMinutes(time));
    console.log(time);
  }
  async function sendTime() {
    setIsSubmit(true);
    const authToken = Cookies.get("token");
    const headers = {
      Authorization: authToken, // Add the token to the Authorization header
      "Content-Type": "application/json", // Example of another header
    };
    let formData = {
      sender_id: myId,
      receiver_id: id,
      amount: time,
      is_settlement: false,
    };
    await axios
      .post(
        "https://x8ki-letl-twmt.n7.xano.io/api:esmgj5Bo/send_time",
        formData,
        { headers }
      )
      .then(() => {
        setIsSuccess(true);
      });
  }
  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, []);
  return (
    <>
      {isSubmit ? (
        isSuccess ? (
          <Success />
        ) : (
          <LoadingScreen />
        )
      ) : (
        <div>
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
            <Numpad
              formatTime={formatTime}
              time={time}
              formattedTime={formatedTime}
            />
          </div>
          <div className="bg-[#75dfc3] h-[7vh] mt-[-7vh] mb-0 relative z-[-1]"></div>
          <button
            onClick={sendTime}
            className="bg-[#75dfc3] w-full h-[15vh] text-center text-[32px] font-[700] text-[#111111] flex items-center justify-center"
          >
            Send Time
          </button>
        </div>
      )}
    </>
  );
}

export default numberPad;
