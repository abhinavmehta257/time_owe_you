import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";

function scanner() {
  const [scannedValue, setScannedValue] = useState();
  const [recieverData, setRecieverData] = useState();
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
    setRecieverData(response.data);
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
      <div className="bg-[#111111] h-[100vh]">
        <Link
          href={"/dashboard"}
          className="p-[16px] rounded-xl m-[16px] text-white bg-[#333333]"
        >
          back
        </Link>
        <div id="reader" className="mt-[50px] mb-[auto]"></div>
        <div className="text-white">
          {scannedValue}
          {recieverData ? (
            <span>
              {recieverData.id}
              {recieverData.email}
              {recieverData.name}{" "}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default scanner;
