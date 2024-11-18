import React from 'react';
import Script from 'next/script';

const GoogleAds = () => {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ADS_ID}`} />
      <Script id="google-ads">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_ADS_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAds;
