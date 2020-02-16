/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";
import React from "react";
import Link from "next/link";

import StyleM from "./styles/StyleM";

import LogoImg from "../public/images/logo.gif";
import VersionBgImg from "../public/images/version_bg.gif";
import VersionLaImg from "../public/images/version_la.gif";
import VersionEnImg from "../public/images/version_en.gif";
import VersionChImg from "../public/images/version_ch.gif";
import VersionKrImg from "../public/images/version_kr.jpg";

import MenuAImg from "../public/images/menu_A0000.gif";
import MenuBImg from "../public/images/menu_B0000.gif";
import MenuCImg from "../public/images/menu_C0000.gif";

import MenuAEImg from "../public/images/menu_A0000e.gif";
import MenuBEImg from "../public/images/menu_B0000e.gif";
import MenuCEImg from "../public/images/menu_C0000e.gif";

import Section3SubImg from "../public/images/section3_subject.gif";

import TextBgAImg from "../public/images/textbg_A.png";
import TextBgBImg from "../public/images/textbg_B.png";
import TextBgCImg from "../public/images/textbg_C.png";

import Header_Icon1 from "../public/images/header_icon1.png";
import Header_Icon2 from "../public/images/header_icon2.png";
import Header_Icon3 from "../public/images/header_icon3.png";

export default () => {
  const [menuA, setMenuA] = React.useState(MenuAImg);
  const [menuB, setMenuB] = React.useState(MenuBImg);
  const [menuC, setMenuC] = React.useState(MenuCImg);

  const [menuAClass, setMenuAClass] = React.useState("sub");
  const [menuBClass, setMenuBClass] = React.useState("sub");
  const [menuCClass, setMenuCClass] = React.useState("sub");

  const [language, setLanguage] = React.useState("noshow");

  const [sideMenu, setSideMenu] = React.useState(false);
  const [subSideMenu, setSubSideMenu] = React.useState(0);

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
        <div id="snsbox">
          <div id="snssub">
            <div id="snswrapper">
              <div id="sns">
                <a
                  href="https://smartstore.naver.com/jeionshop"
                  target="_blank"
                >
                  <img src={Header_Icon1} />
                </a>
              </div>
              <div id="sns">
                <a href="https://www.instagram.com/jeionfood" target="_blank">
                  <img src={Header_Icon2} />
                </a>
              </div>
              <div id="sns">
                <a href="https://blog.naver.com/jeion_korea" target="_blank">
                  <img src={Header_Icon3} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div id="headerbox">
          <h2>LOGO</h2>
          <div className="logo">
            <Link href="/en/">
              <a title="Go to Main">
                <img src={LogoImg} width="115" height="55" alt="JEION LOGO" />
              </a>
            </Link>
          </div>
          <div id="language" onClick={() => handleMenu()}>
            <h2>LANGUAGE</h2>
            <dl>
              <dt
                className="ptr"
                css={css`
                  background: url("${VersionBgImg}") left top no-repeat;
                `}
              >
                <span>
                  <img
                    src={VersionLaImg}
                    width="68"
                    height="17"
                    alt="LANGUAGE"
                  />
                </span>
              </dt>
              <dd className={language}>
                <ul>
                  <li>
                    <span>
                      <a
                        href="/"
                        target="_blank"
                        title="새창으로 한국어홈페이지로 이동"
                      >
                        <img
                          src={VersionKrImg}
                          width="75"
                          height="17"
                          alt="KOREAN"
                        />
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a
                        href="/en"
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
                  {
                    // <li>
                    //   <span>
                    //     <a
                    //       href="/cn"
                    //       target="_blank"
                    //       title="새창으로 중문홈페이지로 이동"
                    //     >
                    //       <img
                    //         src={VersionChImg}
                    //         width="75"
                    //         height="17"
                    //         alt="CHINESE"
                    //       />
                    //     </a>
                    //   </span>
                    // </li>
                  }
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
                <Link href="/en/story/about">
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
                                <Link href="/en/contact/post/1">
                                  <a>CEO's Message</a>
                                </Link>
                              </dt>
                              <dd>
                                <Link href="/en/contact/post/1">
                                  <a>
                                    J:ON is a company that tries to create the
                                    highest value for all mothers under the
                                    motto, “Every possible need for mothers and
                                    children.”
                                  </a>
                                </Link>
                              </dd>
                              <dd className="data">2019.11.23</dd>
                            </dl>
                          </dd>
                        </dl>
                      </li>
                      <li className="depth2">
                        <ul>
                          <li>
                            <Link href="/en/story/about">
                              <a title="About J:on 메뉴로 이동">About J:on</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/en/story/vision">
                              <a title="Our Vision 메뉴로 이동">Our Vision</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/en/story/message">
                              <a title="CEO's Message 메뉴로 이동">
                                CEO's Message
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/en/story/philosophy">
                              <a title="Management Philosophy 메뉴로 이동">
                                Management Philosophy
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/en/story/history">
                              <a title="Our History 메뉴로 이동">Our History</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/en/story/location">
                              <a title="Location 메뉴로 이동">Location</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="info">
                        <img src={TextBgAImg} />
                        <p>
                          We are committed to using the best ingredients to give
                          you the great tasting products.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="gnb2">
                <Link href="/en/products/noodles">
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
                                <Link href="/en/contact/post/1">
                                  <a>CEO's Message</a>
                                </Link>
                              </dt>
                              <dd>
                                <Link href="/en/contact/post/1">
                                  <a>
                                    J:ON is a company that tries to create the
                                    highest value for all mothers under the
                                    motto, “Every possible need for mothers and
                                    children.”
                                  </a>
                                </Link>
                              </dd>
                              <dd className="data">2019.11.23</dd>
                            </dl>
                          </dd>
                        </dl>
                      </li>
                      <li className="depth2">
                        <ul>
                          <li>
                            <Link href="/en/products/noodles">
                              <a title="Noodles 메뉴로 이동">
                                Nutritious Baby Noodles
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/en/products/yogurt">
                              <a title="Yogurt 메뉴로 이동">Yogurt Cubes</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/en/products/babyfood">
                              <a title="Babyfood 메뉴로 이동">Rice Cereal</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/en/products/kimcook">
                              <a title="Kimcook 메뉴로 이동">Seaweed Cook</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/en/products/bagelschip">
                              <a title="Haus Backen 메뉴로 이동">Bagel Chip</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="info">
                        <img src={TextBgBImg} />
                        <p>
                          We are committed to using the best ingredients to give
                          you the great tasting products.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="gnb3">
                <Link href="/en/contact/notice">
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
                                <Link href="/en/contact/post/1">
                                  <a>CEO's Message</a>
                                </Link>
                              </dt>
                              <dd>
                                <Link href="/en/contact/post/1">
                                  <a>
                                    J:ON is a company that tries to create the
                                    highest value for all mothers under the
                                    motto, “Every possible need for mothers and
                                    children.”
                                  </a>
                                </Link>
                              </dd>
                              <dd className="data">2019.11.23</dd>
                            </dl>
                          </dd>
                        </dl>
                      </li>
                      <li className="depth2">
                        <ul>
                          <li>
                            <Link href="/en/contact/notice">
                              <a title="Notice 메뉴로 이동">Notice</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/en/contact/contact">
                              <a title="Contact Us  메뉴로 이동">Contact Us </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="info">
                        <img src={TextBgCImg} />
                        <p>
                          We are committed to using the best ingredients to give
                          you the great tasting products.
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
          <i onClick={() => setSideMenu(true)}>주요 서비스 메뉴 펼치기</i>
        </a>
        <nav className={sideMenu ? "mask show" : "mask"}>
          <div id="open_side" style={{ left: "0px" }}>
            <div className="side_gnb" id="side_Gnb">
              <div
                className="btn_side"
                style={{ cursor: "pointer" }}
                onClick={() => setSideMenu(false)}
              >
                <div>
                  <div
                    style={{
                      width: "24px",
                      height: "2px",
                      top: "18px",
                      left: "7px",
                      position: "absolute",
                      backgroundColor: "rgb(120,120,120)",
                      transform: "rotate(135deg)",
                      borderRadius: "2px"
                    }}
                  ></div>
                  <div
                    style={{
                      width: "24px",
                      height: "2px",
                      top: "18px",
                      left: "7px",
                      position: "absolute",
                      backgroundColor: "rgb(120,120,120)",
                      transform: "rotate(45deg)",
                      borderRadius: "2px"
                    }}
                  ></div>
                </div>
              </div>
              <div className="m_topmenu">
                <Link href="/">
                  <a
                    onClick={() => {
                      setSubSideMenu(0);
                      setSideMenu(false);
                    }}
                  >
                    Main
                  </a>
                </Link>
                <span>
                  <div style={{ height: "1px", width: "1px" }}></div>
                </span>
                <Link href="/">
                  <a
                    onClick={() => {
                      setSubSideMenu(0);
                      setSideMenu(false);
                    }}
                  >
                    Korean
                  </a>
                </Link>
                {
                  // <a href="/cn" target="_self">
                  //   Chinese
                  // </a>
                }
              </div>
              <h2>메인메뉴</h2>
              <ul style={{ marginTop: "40px" }}>
                <li className="gnb1 gnbActive">
                  <div
                    title="Our Story 메뉴로 이동"
                    className={subSideMenu === 1 ? "mobsub active" : "mobsub"}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (subSideMenu === 1) {
                        setSubSideMenu(0);
                      } else {
                        setSubSideMenu(1);
                      }
                    }}
                  >
                    OUR STORY
                  </div>
                  <div className={subSideMenu === 1 ? "sub active" : "sub"}>
                    <div className="subbg">
                      <ul>
                        <li>
                          <Link href="/en/story/about">
                            <a
                              title="About J:on 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              About J:on
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/en/story/vision">
                            <a
                              title="Our Visions 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Our Vision
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/en/story/message">
                            <a
                              title="Message 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              CEO's Message
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/en/story/philosophy">
                            <a
                              title="Philosophy 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Management Philosophy
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/en/story/history">
                            <a
                              title="History 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Our History
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/en/story/location">
                            <a
                              title="Location 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Location
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="gnb2 gnbActive">
                  <div
                    title="Our Products 메뉴로 이동"
                    className={subSideMenu === 2 ? "mobsub active" : "mobsub"}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (subSideMenu === 2) {
                        setSubSideMenu(0);
                      } else {
                        setSubSideMenu(2);
                      }
                    }}
                  >
                    OUR PRODUCTS
                  </div>
                  <div className={subSideMenu === 2 ? "sub active" : "sub"}>
                    <div className="subbg">
                      <ul>
                        <li>
                          <Link href="/en/products/noodles">
                            <a
                              title="Noodles 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Nutritious Baby Noodles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/en/products/yogurt">
                            <a
                              title="Yogurt 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Yogurt Cubes
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/en/products/babyfood">
                            <a
                              title="Babyfood 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Rice Cereal
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/en/products/kimcook">
                            <a
                              title="Cook 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Seaweed Cook
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/en/products/bagelschip">
                            <a
                              title="Chips 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Bagel Chip
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="gnb3 gnbActive">
                  <div
                    title="Contact Us 메뉴로 이동"
                    className={subSideMenu === 3 ? "mobsub active" : "mobsub"}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (subSideMenu === 3) {
                        setSubSideMenu(0);
                      } else {
                        setSubSideMenu(3);
                      }
                    }}
                  >
                    CONTACT
                  </div>
                  <div className={subSideMenu === 3 ? "sub active" : "sub"}>
                    <div className="subbg">
                      <ul>
                        <li>
                          <Link href="/en/contact/notice">
                            <a
                              title="Notice 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Notice
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/en/contact/contact">
                            <a
                              title="Contact 메뉴로 이동"
                              onClick={() => {
                                setSubSideMenu(0);
                                setSideMenu(false);
                              }}
                            >
                              Contact
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
