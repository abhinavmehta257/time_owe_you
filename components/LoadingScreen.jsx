import React from "react";
import Loader from "./blocks/Loader";

function LoadingScreen() {
  return (
    <div className="h-[100vh] w-full bg-[#111111] flex justify-center items-center">
      <Loader />
    </div>
  );
}

export default LoadingScreen;
