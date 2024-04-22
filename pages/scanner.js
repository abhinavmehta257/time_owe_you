import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

function scanner() {
  const router = useRouter();
  const config = { fps: 10, qrbox: { width: 250, height: 250 } };
  async function getRecieverData(id) {
    const authToken = Cookies.get("token");
    const headers = {
      Authorization: authToken, // Add the token to the Authorization header
      "Content-Type": "application/json", // Example of another header
    };
    const response = await axios.get(
      `https://x8ki-letl-twmt.n7.xano.io/api:-qIKyLNe/user/${id}`,
      { headers }
    );
    console.log(response.data);
    router.push(
      `/numberpad?id=${response.data.id}&name=${response.data.name}&email=${response.data.email}`
    );
  }
  useEffect(() => {
    const html5QrCode = new Html5Qrcode(/* element id */ "reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      console.log(decodedResult, decodedText);

      getRecieverData(decodedText);

      html5QrCode
        .stop()
        .then((ignore) => {
          // QR Code scanning is stopped.
        })
        .catch((err) => {
          // Stop failed, handle it.
        });
    };
    html5QrCode.start(
      { facingMode: "environment" },
      config,
      qrCodeSuccessCallback
    );
  }, []);
  return (
    <>
      <Link
        href={"/dashboard"}
        className="w-[48px] h-[48px] rounded-[8px] flex justify-center items-center absolute top-[48px] right-[24px] bg-[#333333] text-white"
      >
        X
      </Link>
      <div className="bg-[#111111] h-[100vh] pt-[150px]">
        <div id="reader" className=" mb-[auto]"></div>
        <div className="text-white"></div>
      </div>
    </>
  );
}

export default scanner;
