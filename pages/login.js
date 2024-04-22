import React from "react";
import Login from "../components/Login";
import HtmlHeader from "../components/blocks/HtmlHeader";
function login() {
  return (
    <>
      <HtmlHeader title={"Login"} /> <Login />
    </>
  );
}

export default login;
