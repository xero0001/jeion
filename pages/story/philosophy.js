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

import A4000Img1 from "../../public/images/A4000_img1.jpg";
import A4000Img2 from "../../public/images/A4000_img2.jpg";
import A4000Img3 from "../../public/images/A4000_img3.jpg";
import A4000Img4 from "../../public/images/A4000_img4.jpg";

import StoryBanner from "../../components/StoryBanner";

export default () => {
  const [menu1, setMenu1] = React.useState(SubMenuA1000);
  const [menu2, setMenu2] = React.useState(SubMenuA2000);
  const [menu3, setMenu3] = React.useState(SubMenuA3000);
  const [menu4, setMenu4] = React.useState(SubMenuA4000E);
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
                  <Link href="/">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/story/about">
                    <a title="Our Story 메뉴로 이동하기">Our Story</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="Management Philosophy 본문 바로가기">
                    {" "}
                    <em className="highlight">Management Philosophy</em>
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
                                setMenu4(SubMenuA4000E);
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
                                setMenu5(SubMenuA5000);
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
                  <ul className="A4000">
                    <li className="txt_a">
                      <dl>
                        <dt>
                          <span>1</span> Management Philosophy
                        </dt>
                        <dd>
                          Family oriented company that strives to develop
                          internationally competitive products through utilizing
                          local resources, promotes exports, creates quality
                          jobs, and supports relief activities for domestic and
                          international children{" "}
                        </dd>
                      </dl>
                    </li>

                    <li className="txt_b">
                      <dl>
                        <dt>
                          <span>2</span> Our motto
                        </dt>
                        <dd>“Safe food” to protect my precious child</dd>
                        <dd>“Right food” welcomed by both mom and child</dd>
                        <dd>
                          “Good food” to increase nutrients from the strictly
                          selected ingredients
                        </dd>
                      </dl>
                      <p className="photo_b"></p>
                    </li>

                    <li className="txt_c">
                      <dl>
                        <dt>
                          <span>3</span> Business Ethics
                        </dt>
                        <dd>
                          <p>
                            <strong>J:ON Ltd. pursues good food</strong> exports
                            via utilizing local materials and happy workplace
                            for families through our fair and transparent
                            management.
                          </p>
                        </dd>
                        <dd>
                          <p>
                            <strong>We set our foremost priority</strong> in
                            satisfying our domestic and international customers
                            and promoting national interests. We strive to
                            continuously create substantial values for our
                            customers and nation to receive love and trust from
                            our customers and citizens.
                          </p>
                        </dd>
                        <dd className="none">
                          <p>
                            <strong>In this globalization</strong> we strive to
                            improve our perspectives and regulations as well as
                            our business practices to meet global standards.
                            Also, we strive to sincerely carry out our
                            responsibilities and obligations as a member of this
                            global society through transparent and fair
                            competition.
                          </p>
                        </dd>
                        <dd>
                          <p>
                            <strong>We strive to secure sound</strong> corporate
                            ethics and organizational culture based on honesty
                            and integrity. Also, we strive to promote constant
                            self-development and innovation in order to
                            strengthen our global competitiveness.
                          </p>
                        </dd>
                        <dd>
                          <p>
                            <strong>We share our pride</strong> and
                            professionalism closely and exchange human and
                            material resources as well as information. We also
                            cooperate closely to generate a synergy effect and
                            promote J:ON to evolve into the central trade
                            infrastructure in the region.
                          </p>
                        </dd>
                        <dd className="none">
                          <p>
                            <strong>We strive to treat</strong> every employee
                            fairly as an independent person based on their
                            abilities and achievements, facilitate individual
                            creativity and challenging spirit, and settle an
                            exemplary corporate culture of mutual respect and
                            harmony.
                          </p>
                        </dd>
                      </dl>
                    </li>

                    <li className="txt_d">
                      <dl>
                        <dt>
                          <span>4</span> Business Areas
                        </dt>
                        <dd>
                          <dl>
                            <p>
                              <img src={A4000Img1} alt="/" />
                            </p>
                            <dt>Baby Foods</dt>
                            <dd>Good and pure food for children</dd>
                          </dl>
                        </dd>
                        <dd>
                          <dl>
                            <p>
                              <img src={A4000Img2} alt="" />
                            </p>
                            <dt>Beverage</dt>
                            <dd>Healthy drinks with natural ingredients</dd>
                          </dl>
                        </dd>
                        <dd>
                          <dl>
                            <p>
                              <img src={A4000Img3} alt="" />
                            </p>
                            <dt>Health Functional Foods</dt>
                            <dd>Dietary supplement to help a vibrant life</dd>
                          </dl>
                        </dd>
                        <dd className="none">
                          <dl>
                            <p>
                              <img src={A4000Img4} alt="" />
                            </p>
                            <dt>Distribution</dt>
                            <dd>
                              Distribution base for building efficient marketing
                              system implementation and market expansion
                            </dd>
                          </dl>
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
