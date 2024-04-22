import Head from "next/head";
import React from "react";

function HtmlHeader({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default HtmlHeader;
