import App from "next/app";
import React from "react";
import { withRouter } from "next/router";
// import { ThemeProvider } from "styled-components";
import Head from "next/head";

import GlobalStyles from "../components/styles/GlobalStyles";
// import Theme from "../components/styles/Theme";

import Menu from "../components/Menu";
import CNMenu from "../components/cn/Menu";
import Footer from "../components/Footer";
import CNFooter from "../components/cn/Footer";

import Favicon from "../public/images/favicon.ico";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const jssplit = this.props.router.route.split("/");
    const isChinese = jssplit[1] === "cn";
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
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900|Noto+Serif+KR:400,500,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
          />
          <link rel="shortcut icon" type="image/x-icon" href={Favicon} />
        </Head>
        <header>
          {!isChinese && <Menu />}
          {isChinese && <CNMenu />}
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        {!isChinese && <Footer />}
        {isChinese && <CNFooter />}
      </div>
    );
  }
}

export default withRouter(MyApp);
