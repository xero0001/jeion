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

import A4000Img1 from "../../../public/images/A4000_img1.jpg";
import A4000Img2 from "../../../public/images/A4000_img2.jpg";
import A4000Img3 from "../../../public/images/A4000_img3.jpg";
import A4000Img4 from "../../../public/images/A4000_img4.jpg";

import StoryBanner from "../../../components/kr/StoryBanner";

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
                  <h4>경영이념</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/kr/story/about">
                    <a title="Our Story 메뉴로 이동하기">회사소개</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="Management Philosophy 본문 바로가기">
                    {" "}
                    <em className="highlight">경영이념</em>
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
                                setMenu3(SubMenuA3000);
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
                                setMenu4(SubMenuA4000E);
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
                  <ul className="A4000">
                    <li className="txt_a">
                      <dl>
                        <dt>
                          <span>1</span> 경영이념
                        </dt>
                        <dd>
                          지역자원을 활용하여 국제 경쟁력 있는 제품을 개발 및
                          수출 활성화를 도모하고 양질의 일자리 창출과
                          <br />
                          국내외 아동 구호를 실현하는 가족친화형 기업
                        </dd>
                      </dl>
                    </li>

                    <li className="txt_b">
                      <dl>
                        <dt>
                          <span>2</span> 핵심키워드
                        </dt>
                        <dd>소중한 내 아이를 지켜주는 “안심 먹거리” </dd>
                        <dd>엄마와 아이의 마음에 꼭 맞는 “바른 먹거리”</dd>
                        <dd>엄선된 재료에 영양소를 높이는 “착한 먹거리”</dd>
                      </dl>
                      <p className="photo_b"></p>
                    </li>

                    <li class="txt_c">
                      <dl>
                        <dt>
                          <span>3</span> 윤리경영
                        </dt>
                        <dd>
                          <p>
                            <strong>J:ON Ltd. pursues good food</strong>
                            주식회사 제이온은 공정하고 투명한 경영을
                            통해『지역소재 활용 바른 먹거리 수출과 가족이 행복한
                            일터』를 지향한다.{" "}
                          </p>
                        </dd>
                        <dd>
                          <p>
                            <strong>We set our foremost priority</strong>
                            우리는 국내외 고객의 만족과 국가이익의 증진을 최고의
                            가치로 삼고 고객과 국가에 실질적으로 도움이 되는
                            가치를 끊임없이 창출하여 고객과 국민으로부터 사랑과
                            신뢰를 받는다.
                          </p>
                        </dd>
                        <dd class="none">
                          <p>
                            <strong>In this globalization</strong>
                            우리는 세계화 및 지식정보화 시대를 맞이하여 우리의
                            인식과 제도 및 업무관행을 글로벌 스탠다드에
                            부합하도록 향상시키며, 투명하고 공정한 경쟁을 통해
                            지구 사회의 구성원으로서의 책임과 의무를 성실히
                            수행한다.
                          </p>
                        </dd>
                        <dd>
                          <p>
                            <strong>We strive to secure sound</strong>
                            우리는 정직과 성실을 바탕으로 건전한 기업윤리와
                            깨끗한 조직문화를 확립하고 세계적인 경쟁력을
                            배양하기 위하여 끊임없는 자기계발과 혁신을 도모한다.
                          </p>
                        </dd>
                        <dd>
                          <p>
                            <strong>We share our pride</strong>
                            우리는 회사의 가족으로서의 긍지와 소명의식을
                            공유하고 인적, 물적 자원과 정보를 상호 교류하고
                            긴밀히 협력하여 전체적인 시너지를 창출함으로써
                            제이온을 지역의 중추적인 무역 인프라로 발전시킨다.
                          </p>
                        </dd>
                        <dd class="none">
                          <p>
                            <strong>We strive to treat</strong>
                            우리는 모든 임직원을 독립된 인격체로 업적과 능력에
                            따라 공정하게 대우하고, 개개인의 창의성과 도전정신이
                            충분히 발휘되며 상호 존중하고 화합하는 모범적인
                            조직문화를 정착시킨다.
                          </p>
                        </dd>
                      </dl>
                    </li>

                    <li className="txt_d">
                      <dl>
                        <dt>
                          <span>4</span> 사업분야
                        </dt>
                        <dd>
                          <dl>
                            <p>
                              <img src={A4000Img1} alt="/" />
                            </p>
                            <dt>유아 및 어린이 식품</dt>
                            <dd>아이들을 위한 착하고 순수한 음식</dd>
                          </dl>
                        </dd>
                        <dd>
                          <dl>
                            <p>
                              <img src={A4000Img2} alt="" />
                            </p>
                            <dt>음료</dt>
                            <dd>천연재료를 이용한 건강한 음료</dd>
                          </dl>
                        </dd>
                        <dd>
                          <dl>
                            <p>
                              <img src={A4000Img3} alt="" />
                            </p>
                            <dt>건강기능 식품</dt>
                            <dd>
                              활력 있는 생활에 도움을 줄 수 있는 건강기능식품
                            </dd>
                          </dl>
                        </dd>
                        <dd className="none">
                          <dl>
                            <p>
                              <img src={A4000Img4} alt="" />
                            </p>
                            <dt>유통</dt>
                            <dd>
                              효율적 마케팅체계 구축 및 판로확대를 위한 유통거점
                              구축
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
