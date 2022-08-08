import Script from "next/script";
import React from "react";
import NextHead from "next/head";
import Scripts from "./Scripts";

const Head = () => {
  return (
    <>
      <NextHead>
        <title>Foundation NFT</title>
        <meta
          name="description"
          content="NFT that allows little fish to swim alongside whales without being crushed."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Foundation NFT" />
        <meta
          name="twitter:description"
          content="NFT that allows little fish to swim alongside whales without being crushed."
        />

        <meta
          name="og:image"
          content="https://storage.googleapis.com/foundation-349014_cloudbuild/_foundation_twitter-image.jpg"
        />

        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/foundation-349014_cloudbuild/_foundation_twitter-image.jpg"
        />

        <meta name="twitter:site" content="@Foundation_NFT" />
        <meta name="twitter:creator" content="@Foundation_NFT" />

        <link rel="icon" href="/favicon.ico" />
        <Scripts />
      </NextHead>
    </>
  );
};

export default Head;
