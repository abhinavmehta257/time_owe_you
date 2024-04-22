import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
function Signup() {
  const [username, setUsername] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [isSubmit, setIsSubmit] = useState(null);

  const router = useRouter();
  function handleUserName(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  const handleSubmit = async (e) => {
    console.log("text");
    e.preventDefault();
    if (!email || !password) return;
    let formData = {
      email: email,
      password: password,
      name: username,
    };
    try {
      setIsSubmit(true);
      console.log(formData);
      const response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:-qIKyLNe/auth/signup",
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
    <form onSubmit={handleSubmit}>
      <div className="lg:w-[420px] xl:w-[420px] 2xl:w-[420px] w-full ml-auto mr-auto bg-[#000000] h-[100vh]">
        <div className="w-full pl-[16px] pr-[16px]">
          <div className="pt-[56px] flex-col justify-start items-start gap-1 flex">
            <div className="text-white text-base font-normal font-['Poppins']">
              New here?
            </div>
            <div className="text-white text-2xl font-semibold font-['Poppins'] leading-9">
              Create a new account
            </div>
          </div>
          <div className="mt-[32px]">
            <div className=" text-white text-xs font-normal font-['Poppins']">
              Name
            </div>
            <input
              onChange={handleUserName}
              className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-[#111111] rounded-[8px] border border-[#75dfc2] text-white"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mt-[16px]">
            <div className=" text-white text-xs font-normal font-['Poppins']">
              Email ID
            </div>
            <input
              onChange={handleEmail}
              type="email"
              className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-[#111111] rounded-[8px] border border-[#75dfc2] text-white"
              placeholder="Enter your Email ID"
            />
          </div>
          <div className="mt-[16px]">
            <div className=" text-white text-xs font-normal font-['Poppins']">
              Password
            </div>
            <input
              onChange={handlePassword}
              className=" w-full h-10 mt-[6px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] bg-[#111111] rounded-[8px] border border-[#75dfc2] text-white"
              placeholder="Enter your Password"
            />
          </div>
          <div className="mt-[32px] w-full">
            <button
              disabled={isSubmit}
              type="submit"
              className="text-[#111111] w-full py-[11px] bg-[#75dfc2] rounded-[8px] border border-[#75dfc2] justify-center items-center inline-flex"
            >
              {isSubmit ? (
                <div className="text-center text-xs font-semibold font-['Poppins']">
                  Processing...
                </div>
              ) : (
                <div className="text-center text-xs font-semibold font-['Poppins']">
                  Sign Up
                </div>
              )}
            </button>
          </div>
          <div className="w-full mt-[8px] h-4 justify-center items-center gap-2 flex">
            <div className="text-white text-xs font-normal font-['Open Sans']">
              Already a user?
            </div>
            <Link
              href="/login"
              className="text-[#75dfc2] text-xs font-normal font-['Open Sans'] underline"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
