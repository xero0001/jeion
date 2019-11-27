import App from "next/app";
import React from "react";
import { withRouter } from "next/router";
// import { ThemeProvider } from "styled-components";
import Head from "next/head";

import GlobalStyles from "../components/styles/GlobalStyles";
// import Theme from "../components/styles/Theme";

import Menu from "../components/Menu";
import CNMenu from "../components/cn/Menu";
import KRMenu from "../components/kr/Menu";

import Footer from "../components/Footer";
import CNFooter from "../components/cn/Footer";
import KRFooter from "../components/kr/Footer";

import Favicon from "../public/images/favicon.ico";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const jssplit = this.props.router.route.split("/");
    const isChinese = jssplit[1] === "cn";
    const isEnglish = jssplit[1] === "en";
    // const isKorean = jssplit[1] === "kr";
    const isKorean = !(isChinese || isEnglish);
    return (
      <div id="Mainallbg">
        <GlobalStyles />
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
          />
          <link rel="shortcut icon" type="image/x-icon" href={Favicon} />
        </Head>
        <header>
          {isEnglish && <Menu />}
          {isChinese && <CNMenu />}
          {isKorean && <KRMenu />}
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        {isEnglish && <Footer />}
        {isChinese && <CNFooter />}
        {isKorean && <KRFooter />}
      </div>
    );
  }
}

export default withRouter(MyApp);
