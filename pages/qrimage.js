import React from "react";
import QrImage from "../components/QrImage";
import { useRouter } from "next/router";

function qrimage() {
  const router = useRouter();
  const { query } = router;
  const { id, name } = query;
  const url =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + id;
  return <QrImage url={url} name={name} />;
}

export default qrimage;
