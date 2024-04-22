import React from "react";
import Dashboard from "../components/Dashboard";
import HtmlHeader from "../components/blocks/HtmlHeader";
import withAuth from "../helpers/withAuth";

function dashboard() {
  return (
    <>
      <HtmlHeader title={"Dashboard"} />
      <Dashboard />
    </>
  );
}

export default withAuth(dashboard);
