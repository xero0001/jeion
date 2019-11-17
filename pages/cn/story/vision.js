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
                        <dt>事业目标</dt>
                        <dd>
                          <ul>
                            <li>幼儿·儿童 放心零食 专门企业</li>
                            <li>
                              活用地域资源开发有竞争力的产品以及生产和流通
                            </li>
                            <li>
                              通过出口的活性化, 创造良好的工作岗位,
                              实现国内外儿童救护援助
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li className="li_st2">
                      <dl>
                        <dt>事业内容</dt>
                        <dd>
                          <ul>
                            <li className="nth_left bg1">
                              <dl>
                                <dt>幼儿·儿童 放心零食</dt>
                                <dd>结合地域资源的商品化</dd>
                                <dd>快速的持续性的 R &amp; D</dd>
                                <dd>主导趋势设计的差别化</dd>
                              </dl>
                            </li>
                            <li className="nth_right bg2">
                              <dl>
                                <dt>地域资源食品的素材化</dt>
                                <dd>省内9大食品群重点活用</dd>
                                <dd>通过素材化创造高产值 </dd>
                                <dd>产品的高级化</dd>
                              </dl>
                            </li>
                            <li className="nth_left nth_line bg3">
                              <dl>
                                <dt>国内外流通</dt>
                                <dd>掌控免税店等固定的流通网</dd>
                                <dd>网上营销 B2C</dd>
                              </dl>
                            </li>
                            <li className="nth_right nth_line bg4">
                              <dl>
                                <dt>海外出口</dt>
                                <dd>通过大型进口商的流通渠道为中心供货 </dd>
                                <dd>运营专门的博览会和进行产品推销</dd>
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
