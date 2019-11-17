import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../components/styles/StyleS";

import SubMenuA1000 from "../../public/images/submenu_A1000.gif";
import SubMenuA2000 from "../../public/images/submenu_A2000.gif";
import SubMenuA3000 from "../../public/images/submenu_A3000.gif";
import SubMenuA4000 from "../../public/images/submenu_A4000.gif";
import SubMenuA5000 from "../../public/images/submenu_A5000.gif";
import SubMenuA6000 from "../../public/images/submenu_A6000.gif";

import SubMenuA1000E from "../../public/images/submenu_A1000e.gif";
import SubMenuA2000E from "../../public/images/submenu_A2000e.gif";
import SubMenuA3000E from "../../public/images/submenu_A3000e.gif";
import SubMenuA4000E from "../../public/images/submenu_A4000e.gif";
import SubMenuA5000E from "../../public/images/submenu_A5000e.gif";
import SubMenuA6000E from "../../public/images/submenu_A6000e.gif";

import A50002015 from "../../public/images/A5000_2015.jpg";
import A50002014 from "../../public/images/A5000_2014.jpg";
import A50002013 from "../../public/images/A5000_2013.jpg";

import StoryBanner from "../../components/StoryBanner";

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
                  <Link href="/">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/story/about">
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
                        <Link href="/story/about">
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
                        <Link href="/story/vision">
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
                        <Link href="/story/message">
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
                        <Link href="/story/philosophy">
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
                        <Link href="/story/history">
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
                        <Link href="/story/location">
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
                  <ul className="A5000">
                    <li>
                      <dl>
                        <dt>
                          <img src={A50002015} alt="2015" />
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>Jan 2015</strong>{" "}
                              <span>
                                <p>
                                  Korea International Trade Association member
                                  registration
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Feb 2015</strong>
                              <span>
                                <p>
                                  Patent registration for soft cookie containing
                                  sweet potato cream
                                </p>
                                <p>
                                  Started to export ABC Cookie (laver, cheese)
                                  to China
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Apr 2015</strong>{" "}
                              <span>
                                <p>
                                  Selected as the company of “Export Capability
                                  Building Program” by Small and Medium Business
                                  Administration
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Aug 2015</strong>{" "}
                              <span>
                                <p>Operated K-Food Fair Qingdao 2015</p>
                              </span>
                            </li>
                            <li>
                              <strong>Sep 2015</strong>{" "}
                              <span>
                                <p>
                                  Launched comprehensive food brand for infants
                                  and children, "Cheeki Monki."
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>
                          <img src={A50002014} alt="2014" />
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>Jan 2014</strong>{" "}
                              <span>
                                <p>
                                  Started a regular sponsorship, collaborating
                                  with Jeollabuk-do Disabled Welfare Center
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Feb 2014</strong>{" "}
                              <span>
                                <p>
                                  Established R &amp; D conference to promote
                                  local materials in Jeollabuk-do
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Apr 2014</strong>{" "}
                              <span>
                                <p>
                                  Completed development for five kinds of milk
                                  candy to improve lactose intolerance{" "}
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Aug 2014</strong>{" "}
                              <span>
                                <p>
                                  Completed the product development of noodle
                                  (six different kinds) for Chinese market and
                                  initiated sales
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Oct 2014</strong>{" "}
                              <span>
                                <p>
                                  Patent registration for vinegar and vinegar
                                  drinks using raspberry lees and mulberry lees
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Nov 2014</strong>{" "}
                              <span>
                                <p>
                                  Completed development of laver cookie and
                                  cheese cookie, utilizing local resources
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Dec 2014</strong>
                              <span>
                                <p>
                                  Awarded as an excellent company by
                                  Jeollabuk-do Small Business Hope Center
                                </p>
                                <p>
                                  Received Jeollabuk-do High Value-Added
                                  Business Professional Fair Excellence Award:
                                  For cookie in two different kinds
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li className="noline">
                      <dl>
                        <dt>
                          <img src={A50002013} alt="2013" />
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>May 2013</strong>{" "}
                              <span>
                                <p>
                                  Opened main office (3-2, Seogok 5-gil,
                                  Wansan-gu, Jeonju-si)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Aug 2013</strong>{" "}
                              <span>
                                <p>
                                  Developed functional cookie prototypes for
                                  children (citron cookies) utilizing popular
                                  exporting materials
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>Sep 2013</strong>{" "}
                              <span>
                                <p>Company establishment (Sep 11, J:ON Ltd.)</p>
                                <p>
                                  Trader registration (Korea International Trade
                                  Association)
                                </p>
                                <p>Started to export citrus cookies to China</p>
                                <p>
                                  Chonbuk National University Family Business
                                  Registration (Chonbuk National University LINC
                                  Business committee)
                                </p>
                              </span>
                            </li>

                            <li>
                              <strong>Oct 2013</strong>{" "}
                              <span>
                                <p>
                                  Moved company (October 8, Yeoui-dong,
                                  Deokjin-gu, Jeonju-si)
                                </p>
                                <p>
                                  Started to regularly sponsor poor children
                                  collaborating with an international relief
                                  organization, "Good Neighbors," (Myanmar)
                                </p>
                                <p>
                                  Held product promotion events in Shanghai and
                                  Shandong in China
                                </p>
                              </span>
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
