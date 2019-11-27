import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/kr/styles/StyleS";

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

import StoryBanner from "../../../components/kr/StoryBanner";

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
                  <h4>CEO인사말</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/kr">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/kr/story/about">
                    <a title="Our Story 메뉴로 이동하기">기업소개</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="CEO's Message 본문 바로가기">
                    {" "}
                    <em className="highlight">CEO인사말</em>
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
                        <Link href="/kr/story/about">
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
                        <Link href="/kr/story/vision">
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
                        <Link href="/kr/story/message">
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
                        <Link href="/kr/story/philosophy">
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
                        <Link href="/kr/story/history">
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
                        <Link href="/kr/story/location">
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
                      <dt id="A3000_dt">엄마와 아이에게 필요한 모든 가능성</dt>
                      <dd>
                        <p>
                          (주)제이온 " 엄마와 아이에게 필요한 모든 가능성"
                          이라는 이념아래 모든 엄마들을 위한
                          <br />
                          최고의 가치를 만들기 위해 노력하는 회사입니다.
                        </p>

                        <p>
                          회사 창립 이후, 많은 부모님들은 건강하고 행복한 삶을
                          찾아 제품을 구매하기 시작했습니다. 우리 과자를 시식한
                          고객들은 맛있을 뿐만 아니라 동시에 매우 건강하다는
                          점에 놀라워합니다. 밝은 미래를 가져올 수 있도록 자신의
                          역할을 다해주신 모든 엄마 아빠들에게 우리는 깊은
                          감사를 드립니다.
                        </p>

                        <p>
                          2013년 우리는 건과를 시작하며 고품질 기능성 원재료
                          개발을 통해 다른 제품들과 차별화를 하였습니다. 이후
                          우리는 아이들의 식품 그 이상을 바라보는 종합식품회사로
                          거듭나기 위해 노력하고 있습니다.
                        </p>

                        <p>
                          제이온의 모든 임직원들은 우리의 지난 모든 성과들이
                          고객의 신뢰와 사랑을 근간으로 한 것이라는 사실을 잘
                          알고 있습니다. 우리의 비전은 인간의 건강과 행복을 주는
                          종합식품 회사입니다. 따라서 우리는 최상의 제품과
                          서비스를 통해 아이와 사람에게 기여할 수 있는 모든 일을
                          할 것을 약속합니다. 감사합니다.
                        </p>

                        <p class="sign">
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
