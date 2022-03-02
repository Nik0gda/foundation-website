import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [width, setWidth] = useState(1080);

  useEffect(() => {
    setWidth(global.innerWidth);
    const handleResize = () => {
      setWidth(global.innerWidth);
    };

    global.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.main}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZS35CJ510Y"
      />
      <Script id="set-gtag">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());gtag('config', 'G-ZS35CJ510Y');`}
      </Script>
      <Head>
        <title>Foundation NFT</title>
        <meta
          name="description"
          content="NFT that allows little fish to swim alongside whales without being crushed."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {width > 900 ? (
        <div className={styles.img_big}>
          <Image
            src="/Foundation_Logo_Full.svg"
            alt="Foundation_Logo"
            width={4076}
            height={4076}
          />
        </div>
      ) : (
        <div className={styles.img_small}>
          <Image
            src="/Foundation_Logo_Symbol.svg"
            alt="Foundation_Logo"
            width={4076}
            height={4076}
          />
        </div>
      )}
      <h1 className={styles.text}>Coming soon...</h1>
    </div>
  );
};

export default Home;
