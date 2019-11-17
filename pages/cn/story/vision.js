import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/cn/styles/StyleS";

import SubMenuA1000 from "../../../public/images/cn/submenu_A1000.gif";
import SubMenuA2000 from "../../../public/images/cn/submenu_A2000.gif";
import SubMenuA3000 from "../../../public/images/cn/submenu_A3000.gif";
import SubMenuA4000 from "../../../public/images/cn/submenu_A4000.gif";
import SubMenuA5000 from "../../../public/images/cn/submenu_A5000.gif";
import SubMenuA6000 from "../../../public/images/cn/submenu_A6000.gif";

import SubMenuA1000E from "../../../public/images/cn/submenu_A1000e.gif";
import SubMenuA2000E from "../../../public/images/cn/submenu_A2000e.gif";
import SubMenuA3000E from "../../../public/images/cn/submenu_A3000e.gif";
import SubMenuA4000E from "../../../public/images/cn/submenu_A4000e.gif";
import SubMenuA5000E from "../../../public/images/cn/submenu_A5000e.gif";
import SubMenuA6000E from "../../../public/images/cn/submenu_A6000e.gif";

import A1000Img2 from "../../../public/images/A1000_img2.jpg";
import A1000Img3 from "../../../public/images/A1000_img3.jpg";

import StoryBanner from "../../../components/cn/StoryBanner";

export default () => {
  const [menu1, setMenu1] = React.useState(SubMenuA1000);
  const [menu2, setMenu2] = React.useState(SubMenuA2000E);
  const [menu3, setMenu3] = React.useState(SubMenuA3000);
  const [menu4, setMenu4] = React.useState(SubMenuA4000);
  const [menu5, setMenu5] = React.useState(SubMenuA5000);
  const [menu6, setMenu6] = React.useState(SubMenuA6000);

  return (
    <>
      <StyleS />
      <StoryBanner />
      <div id="MainWrapper">
        <div id="SubWrapper">
          <div id="MainContents">
            <div id="Contents">
              <div className="titleroad">
                <div className="Subtitle">
                  <h4>我们的故事</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/cn/story/about">
                    <a title="Our Story 메뉴로 이동하기">我们的故事</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="Our Vision 본문 바로가기">
                    {" "}
                    <em className="highlight">我们的未来展望</em>
                  </a>{" "}
                </div>
              </div>
              <hr />

              <h2>CONTENTS</h2>
              <div id="Start">
                <div id="subleft">
                  <h2>하위메뉴</h2>
                  <div id="SubMenu" className="sidebar">
                    <ul>
                      <li className="sidebar1 sidebarActive">
                        <Link href="/cn/story/about">
                          <a title="About J:on 메뉴로 이동">
                            <img
                              src={menu1}
                              onMouseEnter={() => {
                                setMenu1(SubMenuA1000E);
                              }}
                              onMouseOut={() => {
                                setMenu1(SubMenuA1000);
                              }}
                              alt="About J:on"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar2 rollout">
                        <Link href="/cn/story/vision">
                          <a title="Our Vision 메뉴로 이동">
                            <img
                              src={menu2}
                              onMouseEnter={() => {
                                setMenu2(SubMenuA2000E);
                              }}
                              onMouseOut={() => {
                                setMenu2(SubMenuA2000E);
                              }}
                              alt="Our Vision"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar3 rollout">
                        <Link href="/cn/story/message">
                          <a title="CEO's Message 메뉴로 이동">
                            <img
                              src={menu3}
                              onMouseEnter={() => {
                                setMenu3(SubMenuA3000E);
                              }}
                              onMouseOut={() => {
                                setMenu3(SubMenuA3000);
                              }}
                              alt="CEO's Message"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar4 rollout">
                        <Link href="/cn/story/philosophy">
                          <a title="Management Philosophy 메뉴로 이동">
                            <img
                              src={menu4}
                              onMouseEnter={() => {
                                setMenu4(SubMenuA4000E);
                              }}
                              onMouseOut={() => {
                                setMenu4(SubMenuA4000);
                              }}
                              alt="Management Philosophy"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar5 rollout">
                        <Link href="/cn/story/history">
                          <a title="Our History 메뉴로 이동">
                            <img
                              src={menu5}
                              onMouseEnter={() => {
                                setMenu5(SubMenuA5000E);
                              }}
                              onMouseOut={() => {
                                setMenu5(SubMenuA5000);
                              }}
                              alt="Our History"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar6 rollout">
                        <Link href="/cn/story/location">
                          <a title="Location 메뉴로 이동">
                            <img
                              src={menu6}
                              onMouseEnter={() => {
                                setMenu6(SubMenuA6000E);
                              }}
                              onMouseOut={() => {
                                setMenu6(SubMenuA6000);
                              }}
                              alt="Location"
                            />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="contentsbox">
                  <ul className="A2000">
                    <li className="li_st1">
                      <dl>
                        <dt>Our business objectives</dt>
                        <dd>
                          <ul>
                            <li>
                              Safe food production company for infants and
                              children
                            </li>
                            <li>
                              Product development utilizing local resources and
                              competitive production and distribution
                            </li>
                            <li>
                              Realizing new job creation through promoting
                              exports and implementing relief activities for
                              domestic and international children
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li className="li_st2">
                      <dl>
                        <dt>Our business objectives</dt>
                        <dd>
                          <ul>
                            <li className="nth_left bg1">
                              <dl>
                                <dt>
                                  Safe food production for infants and children
                                </dt>
                                <dd>
                                  Merchandising and commercialization, utilizing
                                  local resources
                                </dd>
                                <dd>Prompt and continuous R &amp; D</dd>
                                <dd>Trend leader design differentiation</dd>
                              </dl>
                            </li>
                            <li className="nth_right bg2">
                              <dl>
                                <dt>
                                  Utilizing local resources for food production
                                </dt>
                                <dd>
                                  Utilizing 9 major food clusters in the
                                  province
                                </dd>
                                <dd>
                                  Creating high value through utilizing
                                  materials{" "}
                                </dd>
                                <dd>Developing high-end products</dd>
                              </dl>
                            </li>
                            <li className="nth_left nth_line bg3">
                              <dl>
                                <dt>Domestic and international distribution</dt>
                                <dd>
                                  Ensuring distribution channels such as duty
                                  free shops
                                </dd>
                                <dd>Online marketing B2C</dd>
                              </dl>
                            </li>
                            <li className="nth_right nth_line bg4">
                              <dl>
                                <dt>Exports</dt>
                                <dd>
                                  Supplying product through local buyers based
                                  on the distribution channel{" "}
                                </dd>
                                <dd>
                                  Operating trade fairs and product promotions
                                </dd>
                              </dl>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                  </ul>{" "}
                </div>
              </div>
              <hr />

              <h2>본문 다시읽기</h2>
              <div className="skipNav">
                <p className="summary">
                  리뷰컨텐츠는 현재 페이지의 본문내용에 다시 접근할 수 있도록
                  링크를 제공합니다.
                </p>
                <div className="review">
                  <a href="#Start" title="본문첫부분으로 이동">
                    본문 다시읽기
                  </a>
                </div>
              </div>
              <hr />
            </div>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
