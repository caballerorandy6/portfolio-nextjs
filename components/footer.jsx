import React from "react";

function Footer() {
  return (
    <>
      <p className=" text-slate-400 text-center text-xs font-semibold">
        {`© ${new Date().getFullYear()}  All rights reserved.`}
      </p>
    </>
  );
}

export default Footer;
