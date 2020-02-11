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
import history from "../../../public/images/jeonhistory.jpg";

import A50002015 from "../../../public/images/A5000_2015.jpg";
import A50002014 from "../../../public/images/A5000_2014.jpg";
import A50002013 from "../../../public/images/A5000_2013.jpg";

import StoryBanner from "../../../components/StoryBanner";

export default () => {
  const [menu1, setMenu1] = React.useState(SubMenuA1000);
  const [menu2, setMenu2] = React.useState(SubMenuA2000);
  const [menu3, setMenu3] = React.useState(SubMenuA3000);
  const [menu4, setMenu4] = React.useState(SubMenuA4000);
  const [menu5, setMenu5] = React.useState(SubMenuA5000E);
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
                  <a href="#Start" title="Our History 본문 바로가기">
                    {" "}
                    <em className="highlight">Our History</em>
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
                                setMenu3(SubMenuA3000);
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
                                setMenu5(SubMenuA5000E);
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
                <div className="historyPC">
                  <img src={history} style={{ width: "100%" }} />
                </div>
                <div className="contentsbox historyMobile">
                  <ul className="A5000">
                    <li>
                      <dl>
                        <dt>2019</dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>Nov. 2019</strong>{" "}
                              <span>
                                <p>
                                  Introduced in Incheon Airport City/SM Duty
                                  Free Shop
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Oct. 2019</strong>{" "}
                              <span>
                                <p>
                                  Received commendation for development of food
                                  industry (Minister of Agriculture, Food and
                                  Rural Affairs)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Sep. 2019</strong>{" "}
                              <span>
                                <p>Launched products in NAVER Smart Store</p>
                              </span>
                            </li>
                            <li>
                              <strong>Jun. 2019</strong>{" "}
                              <span>
                                <p>
                                  Received International Taste Recognition Award
                                  of International Taste &amp; Quality Institute
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>May 2019</strong>{" "}
                              <span>
                                <p>
                                  Received Innovation Award in processed food
                                  section from Thailand THAIFEX{" "}
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Jan. 2019</strong>{" "}
                              <span>
                                <p>
                                  Started regular donation linked to
                                  international relief organization “Good
                                  Neighbors” for poor children (Bangladesh)
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>2018</dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>Mar. 2018</strong>{" "}
                              <span>
                                <p>
                                  Moved into national food polis (Material
                                  processing and packaging line)
                                </p>
                                <p>
                                  Development of synbiotic food targeting on
                                  chinese infants
                                </p>
                                <p>
                                  Acquired Chinese GB certification (4 kinds of
                                  Rice Cereal)
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>2017</dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>Dec. 2017</strong>{" "}
                              <span>
                                <p>
                                  Acquired Chinese GB certification (4 kinds of
                                  baby noodles)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Jul. 2017</strong>{" "}
                              <span>
                                <p>Certified as venture business </p>
                              </span>
                            </li>
                            <li>
                              <strong>Apr. 2017</strong>{" "}
                              <span>
                                <p>
                                  Certified as research institute of Jeonbuk
                                  research district{" "}
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Jan. 2017</strong>{" "}
                              <span>
                                <p>
                                  (Preliminary) Designated as certified social
                                  enterprise (No. 2016-041 / Other type)
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>2016</dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>Dec. 2016</strong>{" "}
                              <span>
                                <p>
                                  Participated in Sejong University Technology
                                  Holding Company (Team of Professor Yoo
                                  Sang-ho)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Jan. 2016</strong>{" "}
                              <span>
                                <p>
                                  Received Excellence Award for achievement in
                                  academic-industry cooperation (President,
                                  Chonbuk National University){" "}
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>2015</dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>Jan. 2015</strong>{" "}
                              <span>
                                <p>
                                  Received Excellence Award in Jeollabuk-do High
                                  Value-added Business Experts' Competition: 2
                                  types of ABC cookies
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>2014</dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>Dec. 2014</strong>{" "}
                              <span>
                                <p>
                                  Received Excellent SME Award (Head of
                                  Jeollabukdo Business Agency){" "}
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Apr. 2014</strong>{" "}
                              <span>
                                <p>
                                  Established R&amp;D meeting to revitalize
                                  regional companies in Jeollabuk-do
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Jan. 2014</strong>{" "}
                              <span>
                                <p>
                                  Started regular donation liked to Jeollabuk-do
                                  Disabled Welfare Center
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li className="noline">
                      <dl>
                        <dt>2013 </dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>Oct. 2013</strong>{" "}
                              <span>
                                <p>
                                  Relocated company (Oct. 8, Yeoui-dong,
                                  Deokjin-gu, Jeonju)
                                </p>
                                <p>
                                  Started regular donation linked to
                                  international relief organization “Good
                                  Neighbors” for poor children (Myanmar)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Sep. 2013</strong>{" "}
                              <span>
                                <p>
                                  Established company (Sept. 11, JEION Co.,
                                  Ltd.)
                                </p>
                                <p>
                                  Started exporting baby cookies to China (Sept.
                                  13)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>May 2013</strong>{" "}
                              <span>
                                <p>
                                  Opened office (Seogok 5-gil, Wansan-gu,
                                  Jeonju)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Apr. 2013</strong>{" "}
                              <span>
                                <p>
                                  Selected as the 2nd start-up team for social
                                  entrepreneurship incubation project
                                  (Jeollabukdo Business Agency)
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                  </ul>
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
