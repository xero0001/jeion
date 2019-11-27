import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/styles/StyleS";

import SubMenuA1000 from "../../../public/images/submenu_A1000.gif";
import SubMenuA2000 from "../../../public/images/submenu_A2000.gif";
import SubMenuA3000 from "../../../public/images/submenu_A3000.gif";
import SubMenuA4000 from "../../../public/images/submenu_A4000.gif";
import SubMenuA5000 from "../../../public/images/submenu_A5000.gif";
import SubMenuA6000 from "../../../public/images/submenu_A6000.gif";

import SubMenuA1000E from "../../../public/images/submenu_A1000e.gif";
import SubMenuA2000E from "../../../public/images/submenu_A2000e.gif";
import SubMenuA3000E from "../../../public/images/submenu_A3000e.gif";
import SubMenuA4000E from "../../../public/images/submenu_A4000e.gif";
import SubMenuA5000E from "../../../public/images/submenu_A5000e.gif";
import SubMenuA6000E from "../../../public/images/submenu_A6000e.gif";

import A3000Photo from "../../../public/images/A3000_photo.jpg";
import A3000Title from "../../../public/images/A3000_title.gif";
import A3000Sign from "../../../public/images/A3000_sign.jpg";

import StoryBanner from "../../../components/StoryBanner";

export default () => {
  const [menu1, setMenu1] = React.useState(SubMenuA1000);
  const [menu2, setMenu2] = React.useState(SubMenuA2000);
  const [menu3, setMenu3] = React.useState(SubMenuA3000E);
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
                  <h4>Our Story</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/en/">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/en/story/about">
                    <a title="Our Story 메뉴로 이동하기">Our Story</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="CEO's Message 본문 바로가기">
                    {" "}
                    <em className="highlight">CEO's Message</em>
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
                        <Link href="/en/story/about">
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
                        <Link href="/en/story/vision">
                          <a title="Our Vision 메뉴로 이동">
                            <img
                              src={menu2}
                              onMouseEnter={() => {
                                setMenu2(SubMenuA2000E);
                              }}
                              onMouseOut={() => {
                                setMenu2(SubMenuA2000);
                              }}
                              alt="Our Vision"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar3 rollout">
                        <Link href="/en/story/message">
                          <a title="CEO's Message 메뉴로 이동">
                            <img
                              src={menu3}
                              onMouseEnter={() => {
                                setMenu3(SubMenuA3000E);
                              }}
                              onMouseOut={() => {
                                setMenu3(SubMenuA3000E);
                              }}
                              alt="CEO's Message"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar4 rollout">
                        <Link href="/en/story/philosophy">
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
                        <Link href="/en/story/history">
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
                        <Link href="/en/story/location">
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
                  <div className="A3000">
                    <dl className="txtbox">
                      <dt id="A3000_dt">
                        Every possible need for mothers and children
                      </dt>
                      <dd>
                        <p>
                          <u>
                            J:ON is a company that tries to create the highest
                            value for all mothers under the motto, “Every
                            possible need for mothers and children”.
                          </u>
                        </p>

                        <p>
                          Ever since J:ON was founded, parents have bought their
                          products in search of healthy and happy life.
                          Customers go home astounded after trying our cookies,
                          which are not only delicious, but extremely healthy at
                          the same time. We would like to express our deep
                          gratitude for all mothers and fathers for doing their
                          part in bringing a brighter future.
                        </p>

                        <p>
                          In 2013, we launched dried confectionary, but we
                          differentiated them from other products by developing
                          high-quality, functional raw material. Since then, we
                          put all our efforts into becoming a total food
                          company, having our eyes set on something beyond
                          children food.
                        </p>

                        <p>
                          All the employees of J:ON are aware of the fact that
                          all our past achievements were based upon trust and
                          love from its customers. Our vision is “a total food
                          company contributing to the health and happiness of
                          the human”. Thus, we promise that we will do all we
                          can to help out infants and human life through the
                          best products and services. Thank you.{" "}
                        </p>

                        <p className="sign">
                          <img src={A3000Sign} alt="CEO사인" />
                        </p>
                      </dd>
                    </dl>
                  </div>{" "}
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
