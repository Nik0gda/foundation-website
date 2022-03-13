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
        <link rel="icon" href="/favicon.ico" />
        <Scripts />
      </NextHead>
    </>
  );
};

export default Head;
