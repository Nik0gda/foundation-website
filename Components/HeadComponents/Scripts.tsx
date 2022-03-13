import Script from "next/script";
import React from "react";

const Scripts = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZS35CJ510Y"
      />
      <Script id="set-gtag">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());gtag('config', 'G-ZS35CJ510Y');`}
      </Script>
    </>
  );
};

export default Scripts;
