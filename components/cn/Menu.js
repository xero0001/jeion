/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";
import React from "react";
import Link from "next/link";

import StyleM from "./styles/StyleM";

import LogoImg from "../../public/images/logo.gif";
import VersionBgImg from "../../public/images/version_bg.gif";
import VersionLaImg from "../../public/images/version_la.gif";
import VersionEnImg from "../../public/images/version_en.gif";
import VersionChImg from "../../public/images/version_ch.gif";

import MenuAImg from "../../public/images/cn/menu_A0000.gif";
import MenuBImg from "../../public/images/cn/menu_B0000.gif";
import MenuCImg from "../../public/images/cn/menu_C0000.gif";

import MenuAEImg from "../../public/images/cn/menu_A0000e.gif";
import MenuBEImg from "../../public/images/cn/menu_B0000e.gif";
import MenuCEImg from "../../public/images/cn/menu_C0000e.gif";

import Section3SubImg from "../../public/images/cn/section3_subject.gif";

import TextBgAImg from "../../public/images/textbg_A.png";
import TextBgBImg from "../../public/images/textbg_B.png";
import TextBgCImg from "../../public/images/textbg_C.png";

export default () => {
  const [menuA, setMenuA] = React.useState(MenuAImg);
  const [menuB, setMenuB] = React.useState(MenuBImg);
  const [menuC, setMenuC] = React.useState(MenuCImg);

  const [menuAClass, setMenuAClass] = React.useState("sub");
  const [menuBClass, setMenuBClass] = React.useState("sub");
  const [menuCClass, setMenuCClass] = React.useState("sub");

  const [language, setLanguage] = React.useState("noshow");

  const handleMenu = () => {
    if (language === "noshow") {
      setLanguage("show");
    } else {
      setLanguage("noshow");
    }
  };

  return (
    <>
      <StyleM />
      <div id="Mainheader">
        <div id="headerbox">
          <h2>LOGO</h2>
          <div className="logo">
            <Link href="/cn">
              <a title="Go to Main">
                <img src={LogoImg} width="115" height="55" alt="JEION LOGO" />
              </a>
            </Link>
          </div>
          <div id="language" onClick={() => handleMenu()}>
            <h2>LANGUAGE</h2>
            <dl>
              <dt
                css={css`
                  background: url("${VersionBgImg}") left top no-repeat;
                `}
              >
                <span>
                  <a href="#" title="페이지로 이동">
                    <img
                      src={VersionLaImg}
                      width="68"
                      height="17"
                      alt="LANGUAGE"
                    />
                  </a>
                </span>
              </dt>
              <dd className={language}>
                <ul>
                  <li>
                    <span>
                      <a
                        href="/"
                        target="_blank"
                        title="새창으로 영문홈페이지로 이동"
                      >
                        <img
                          src={VersionEnImg}
                          width="75"
                          height="17"
                          alt="ENGLISH"
                        />
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a
                        href="/cn"
                        target="_blank"
                        title="새창으로 중문홈페이지로 이동"
                      >
                        <img
                          src={VersionChImg}
                          width="75"
                          height="17"
                          alt="CHINESE"
                        />
                      </a>
                    </span>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <hr />
        <div id="menulist">
          <div className="gnb" id="Gnb">
            <h2>MENU</h2>
            <ul>
              <li className="gnb1">
                <Link href="/cn/story/about">
                  <a title="Our Story 메뉴로 이동">
                    <img
                      src={menuA}
                      onMouseEnter={() => {
                        setMenuA(MenuAEImg);
                        setMenuAClass("");
                        setMenuBClass("sub");
                        setMenuCClass("sub");
                      }}
                      onMouseOut={() => {
                        setMenuA(MenuAImg);
                      }}
                      alt="Our Story"
                      className="png24"
                    />
                  </a>
                </Link>
                <div className={menuAClass}>
                  <div
                    className="subbg"
                    onMouseLeave={() => {
                      setMenuAClass("sub");
                      setMenuBClass("sub");
                      setMenuCClass("sub");
                    }}
                  >
                    <ul>
                      <li className="notice">
                        <dl>
                          <dt>
                            <img src={Section3SubImg} />
                          </dt>
                          <dd>
                            <dl>
                              <dt>
                                <a href="inner.php?sMenu=C1000&amp;mode=view&amp;no=5">
                                  CEO's Message
                                </a>
                              </dt>
                              <dd>
                                <a href="inner.php?sMenu=C1000&amp;mode=view&amp;no=5">
                                  J:ON is a company that tries to create the
                                  highest value for all mothers under the motto,
                                  “Every possible need for mothers and
                                  children”.Ever since..
                                </a>
                              </dd>
                              <dd className="data">2016.02.16</dd>
                            </dl>
                          </dd>
                        </dl>
                      </li>
                      <li className="depth2">
                        <ul>
                          <li>
                            <Link href="/cn/story/about">
                              <a title="About J:on 메뉴로 이동">
                                关于我们智益安
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/cn/story/vision">
                              <a title="Our Vision 메뉴로 이동">
                                我们的未来展望
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/cn/story/message">
                              <a title="CEO's Message 메뉴로 이동">CEO的心声</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/cn/story/philosophy">
                              <a title="Management Philosophy 메뉴로 이동">
                                经营理念
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/cn/story/history">
                              <a title="Our History 메뉴로 이동">
                                我们的发展史
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/cn/story/location">
                              <a title="Location 메뉴로 이동">访问我们</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="info">
                        <img src={TextBgAImg} />
                        <p>
                          (株)智益安秉承着 妈妈和宝宝需要的所有的可能性 的理念,
                          为所有的妈妈们创造最高的价值而努力的公司
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="gnb2">
                <Link href="/cn/products/cookies">
                  <a title="Our Products 메뉴로 이동">
                    <img
                      src={menuB}
                      onMouseEnter={() => {
                        setMenuB(MenuBEImg);
                        setMenuAClass("sub");
                        setMenuBClass("");
                        setMenuCClass("sub");
                      }}
                      onMouseOut={() => {
                        setMenuB(MenuBImg);
                      }}
                      alt="Our Products"
                      className="png24"
                    />
                  </a>
                </Link>
                <div className={menuBClass}>
                  <div
                    className="subbg"
                    onMouseLeave={() => {
                      setMenuAClass("sub");
                      setMenuBClass("sub");
                      setMenuCClass("sub");
                    }}
                  >
                    <ul>
                      <li className="notice">
                        <dl>
                          <dt>
                            <img src={Section3SubImg} />
                          </dt>
                          <dd>
                            <dl>
                              <dt>
                                <a href="inner.php?sMenu=C1000&amp;mode=view&amp;no=5">
                                  CEO's Message
                                </a>
                              </dt>
                              <dd>
                                <a href="inner.php?sMenu=C1000&amp;mode=view&amp;no=5">
                                  J:ON is a company that tries to create the
                                  highest value for all mothers under the motto,
                                  “Every possible need for mothers and
                                  children”.Ever since..
                                </a>
                              </dd>
                              <dd className="data">2016.02.16</dd>
                            </dl>
                          </dd>
                        </dl>
                      </li>
                      <li className="depth2">
                        <ul>
                          <li>
                            <Link href="/cn/products/cookies">
                              <a title="Cookies 메뉴로 이동">饼干</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="info">
                        <img src={TextBgBImg} />
                        <p>
                          (株)智益安秉承着 妈妈和宝宝需要的所有的可能性 的理念,
                          为所有的妈妈们创造最高的价值而努力的公司
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="gnb3">
                <Link href="/cn/contact/notice">
                  <a title="Contact Us 메뉴로 이동">
                    <img
                      src={menuC}
                      onMouseEnter={() => {
                        setMenuC(MenuCEImg);
                        setMenuAClass("sub");
                        setMenuBClass("sub");
                        setMenuCClass("");
                      }}
                      onMouseOut={() => {
                        setMenuC(MenuCImg);
                      }}
                      alt="Contact Us"
                      className="png24"
                    />
                  </a>
                </Link>
                <div className={menuCClass}>
                  <div
                    className="subbg"
                    onMouseLeave={() => {
                      setMenuAClass("sub");
                      setMenuBClass("sub");
                      setMenuCClass("sub");
                    }}
                  >
                    <ul>
                      <li className="notice">
                        <dl>
                          <dt>
                            <img src={Section3SubImg} />
                          </dt>
                          <dd>
                            <dl>
                              <dt>
                                <a href="inner.php?sMenu=C1000&amp;mode=view&amp;no=5">
                                  CEO's Message
                                </a>
                              </dt>
                              <dd>
                                <a href="inner.php?sMenu=C1000&amp;mode=view&amp;no=5">
                                  J:ON is a company that tries to create the
                                  highest value for all mothers under the motto,
                                  “Every possible need for mothers and
                                  children”.Ever since..
                                </a>
                              </dd>
                              <dd className="data">2016.02.16</dd>
                            </dl>
                          </dd>
                        </dl>
                      </li>
                      <li className="depth2">
                        <ul>
                          <li>
                            <Link href="/cn/contact/notice">
                              <a title="Notice 메뉴로 이동">公告事项</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/cn/contact/contact">
                              <a title="Contact Us  메뉴로 이동">联系我们</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="info">
                        <img src={TextBgCImg} />
                        <p>
                          (株)智益安秉承着 妈妈和宝宝需要的所有的可能性 的理念,
                          为所有的妈妈们创造最高的价值而努力的公司
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <a className="btn_side" href="#">
          <i>주요 서비스 메뉴 펼치기</i>
        </a>
      </div>
    </>
  );
};
