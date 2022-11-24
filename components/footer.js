import React from "react";

function Footer() {
  return (
    <>
      <p className=" text-white text-center text-xs font-semibold">
        {`© ${new Date().getFullYear()}  All rights reserved.`}
      </p>
    </>
  );
}

export default Footer;
