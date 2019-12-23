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
import VersionKrImg from "../../public/images/version_kr.jpg";

import MenuAImg from "../../public/images/menu_A0000.gif";
import MenuBImg from "../../public/images/menu_B0000.gif";
import MenuCImg from "../../public/images/menu_C0000.gif";

import MenuAEImg from "../../public/images/menu_A0000e.gif";
import MenuBEImg from "../../public/images/menu_B0000e.gif";
import MenuCEImg from "../../public/images/menu_C0000e.gif";

import Section3SubImg from "../../public/images/section3_subject.gif";

import TextBgAImg from "../../public/images/textbg_A.png";
import TextBgBImg from "../../public/images/textbg_B.png";
import TextBgCImg from "../../public/images/textbg_C.png";

import Header_Icon1 from "../../public/images/header_icon1.png";
import Header_Icon2 from "../../public/images/header_icon2.png";
import Header_Icon3 from "../../public/images/header_icon3.png";

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
            <Link href="/">
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
                        title="새창으로 중문홈페이지로 이동"
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
                <Link href="/kr/story/about">
                  <a title="Our Story 메뉴로 이동">
                    <span
                      onMouseEnter={() => {
                        setMenuAClass("");
                        setMenuBClass("sub");
                        setMenuCClass("sub");
                      }}
                    >
                      기업소개
                    </span>
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
                          <dt id="menu_notice">공지사항</dt>
                          <dd>
                            <dl>
                              <dt>
                                <Link href="/kr/contact/post/1">
                                  <a>CEO 인사말</a>
                                </Link>
                              </dt>
                              <dd>
                                <Link href="/kr/contact/post/1">
                                  <a>
                                    (주)제이온 " 엄마와 아이에게 필요한 모든
                                    가능성" 이라는 이념아래 모든 엄마들을 위한
                                    최고의 가치를 만들기 위해 노력하는
                                    회사입니다.
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
                            <Link href="/kr/story/about">
                              <a title="About J:on 메뉴로 이동">제이온소개</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/kr/story/vision">
                              <a title="Our Vision 메뉴로 이동">비전</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/kr/story/message">
                              <a title="CEO's Message 메뉴로 이동">CEO인사말</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/kr/story/philosophy">
                              <a title="Management Philosophy 메뉴로 이동">
                                경영이념
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/kr/story/history">
                              <a title="Our History 메뉴로 이동">회사연혁</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/kr/story/location">
                              <a title="Location 메뉴로 이동">찾아오시는길</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="info">
                        <img src={TextBgAImg} />
                        <p>
                          제이온은 여러분께 맛있는 제품을 제공해드리기 위해
                          최선을 다해 엄선된 재료만을 사용합니다.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="gnb2">
                <Link href="/kr/products/noodles">
                  <a title="Our Products 메뉴로 이동">
                    {" "}
                    <span
                      onMouseEnter={() => {
                        setMenuAClass("sub");
                        setMenuBClass("");
                        setMenuCClass("sub");
                      }}
                    >
                      제품소개
                    </span>
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
                          <dt id="menu_notice">공지사항</dt>
                          <dd>
                            <dl>
                              <dt>
                                <Link href="/kr/contact/post/1">
                                  <a>CEO 인사말</a>
                                </Link>
                              </dt>
                              <dd>
                                <Link href="/kr/contact/post/1">
                                  <a>
                                    (주)제이온 " 엄마와 아이에게 필요한 모든
                                    가능성" 이라는 이념아래 모든 엄마들을 위한
                                    최고의 가치를 만들기 위해 노력하는
                                    회사입니다.
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
                            <Link href="/kr/products/noodles">
                              <a title="Noodles 메뉴로 이동">유아국수</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/kr/products/yogurt">
                              <a title="Yogurt 메뉴로 이동">요거트큐브</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/kr/products/babyfood">
                              <a title="Yogurt 메뉴로 이동">간편쌀이유식</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/kr/products/kimcook">
                              <a title="Yogurt 메뉴로 이동">김쿡</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/kr/products/bagelschip">
                              <a title="Yogurt 메뉴로 이동">베이글칩</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="info">
                        <img src={TextBgBImg} />
                        <p>
                          제이온은 여러분께 맛있는 제품을 제공해드리기 위해
                          최선을 다해 엄선된 재료만을 사용합니다.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="gnb3">
                <Link href="/kr/contact/notice">
                  <a title="Contact Us 메뉴로 이동">
                    <span
                      onMouseEnter={() => {
                        setMenuAClass("sub");
                        setMenuBClass("sub");
                        setMenuCClass("");
                      }}
                    >
                      고객문의
                    </span>
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
                          <dt id="menu_notice">공지사항</dt>

                          <dd>
                            <dl>
                              <dt>
                                <Link href="/kr/contact/post/1">
                                  <a>CEO 인사말</a>
                                </Link>
                              </dt>
                              <dd>
                                <Link href="/kr/contact/post/1">
                                  <a>
                                    (주)제이온 " 엄마와 아이에게 필요한 모든
                                    가능성" 이라는 이념아래 모든 엄마들을 위한
                                    최고의 가치를 만들기 위해 노력하는
                                    회사입니다.
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
                            <Link href="/kr/contact/notice">
                              <a title="Notice 메뉴로 이동">공지사항</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/kr/contact/contact">
                              <a title="Contact Us 메뉴로 이동">고객문의</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="info">
                        <img src={TextBgCImg} />
                        <p>
                          제이온은 여러분께 맛있는 제품을 제공해드리기 위해
                          최선을 다해 엄선된 재료만을 사용합니다.
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
