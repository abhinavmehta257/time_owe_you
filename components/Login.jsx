import React from "react";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { Router, useRouter } from "next/router";
function Login() {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const router = useRouter();
  function handleUserName(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) return;
    let formData = {
      email: username,
      password: password,
    };
    try {
      console.log(formData);
      const response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:-qIKyLNe/auth/login",
        formData
      );
      const { authToken } = response.data;
      // Save the JWT token in a cookie
      Cookies.set("token", authToken, { path: "/" });
      console.log(authToken);

      if (authToken) {
        router.push("/dashboard");
      }

      // Optionally, you can also set the user data in state or context
      // For example, if you want to display the username or other user information
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors, show error messages, etc.
    }
  };
  return (
    <>
      {" "}
      <div className="pl-[16px] pr-[16px] lg:w-[420px] xl:w-[420px] 2xl:w-[420px] ml-auto mr-auto bg-[#000000] h-[100vh]">
        <div className="pt-[56px] flex-col justify-start items-start gap-1 flex">
          <div className="text-white text-base font-normal font-['Poppins']">
            Hello!
          </div>
          <div className="text-white text-2xl font-semibold font-['Poppins'] leading-9">
            Log into your account
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-[32px]">
            <div className=" text-white text-xs font-normal font-['Poppins']">
              Email ID
            </div>
            <input
              onChange={handleUserName}
              type="email"
              className="text-white w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-[#111111] rounded-[8px] border border-[#75dfc2] focus:outline-none focus:border-[#75dfc2]"
              placeholder="Enter your Email ID"
            />
          </div>
          <div className="mt-[16px]">
            <div className=" text-white text-xs font-normal font-['Poppins']">
              Password
            </div>
            <input
              onChange={handlePassword}
              type="password"
              className="text-white w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-[#111111] rounded-[8px] border border-[#75dfc2] focus:outline-none focus:border-[#75dfc2]"
              placeholder="Enter your Password"
            />
          </div>
          <div className="mt-[8px] text-right flex justify-end">
            <img
              src="./assets/icons/question-mark.png"
              className="w-4 h-4 p-[1.33px] justify-center items-center inline-flex"
            />
          </div>
          <div className="mt-[32px] w-full">
            <button
              type="submit"
              className="w-full py-[11px] bg-[#75dfc2] rounded-[8px] border justify-center items-center inline-flex"
            >
              <div className="text-center text-[#111111] text-xs font-semibold font-['Poppins']">
                Log in
              </div>
            </button>
          </div>
        </form>
        <div className="w-full mt-[8px] h-4 justify-center items-center gap-2 flex">
          <div className="text-white text-xs font-normal font-['Open Sans']">
            New here?
          </div>
          <Link
            href="/signup"
            className="text-[#75dfc2] text-xs font-normal font-['Open Sans'] underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
