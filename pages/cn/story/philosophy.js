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

import A4000Img1 from "../../../public/images/A4000_img1.jpg";
import A4000Img2 from "../../../public/images/A4000_img2.jpg";
import A4000Img3 from "../../../public/images/A4000_img3.jpg";
import A4000Img4 from "../../../public/images/A4000_img4.jpg";

import StoryBanner from "../../../components/cn/StoryBanner";

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
                  <a href="#Start" title="Management Philosophy 본문 바로가기">
                    {" "}
                    <em className="highlight">经营理念</em>
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
                                setMenu2(SubMenuA2000);
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
                                setMenu4(SubMenuA4000E);
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
                  <ul className="A4000">
                    <li className="txt_a">
                      <dl>
                        <dt>
                          <span>1</span> 经营理念
                        </dt>
                        <dd>
                          活用地域资源开发有国际竞争力的产品,
                          通过刺激出口创造良好的工作岗位和实现援助国内外儿童救助的家庭亲环境企业
                        </dd>
                      </dl>
                    </li>

                    <li className="txt_b">
                      <dl>
                        <dt>
                          <span>2</span> 核心关键词
                        </dt>
                        <dd>为心爱的宝宝精心设计的“放心零食” </dd>
                        <dd>妈妈和宝宝都称心的“健康零食”</dd>
                        <dd>精选的原料融合各种营养的“亲近零食”</dd>
                      </dl>
                      <p className="photo_b"></p>
                    </li>

                    <li class="txt_c">
                      <dl>
                        <dt>
                          <span>3</span> 经营伦理
                        </dt>
                        <dd>
                          <p>
                            <strong>智益安股份有限公司通过</strong>
                            公正透明的经营以『活用地域素材出口好食品和守护家庭幸福』为目标。
                          </p>
                        </dd>
                        <dd>
                          <p>
                            <strong>我们以满足国内外顾客的</strong>
                            需求和增加国家利益为最高价值,
                            不断的创造顾客和国家实际性有帮助的价值,
                            从而得到顾客及国民的爱和信赖。
                          </p>
                        </dd>
                        <dd class="none">
                          <p>
                            <strong>我们迎合世界化和</strong>
                            知识情报化时代的潮流,
                            为适应国际化基准不断提高我们的认识, 制度及业务习惯,
                            作为地球村社会的一员通过透明公正的竞争诚实地履行自己的责任和义务。
                          </p>
                        </dd>
                        <dd>
                          <p>
                            <strong>我们以正直和诚实为</strong>基准,
                            树立健全的企业理念和纯净的组织文化,
                            为了培养世界性的竞争力不断的探索自我开发和改革创新的道路。
                          </p>
                        </dd>
                        <dd>
                          <p>
                            <strong>我们共感作为</strong>
                            一名社会家族的组织成员的矜持和使命意识,
                            相互交流人力,
                            物力资源和情报紧密协助合作创造出全体协助效果,{" "}
                            <span lang="zh-CN">将</span>
                            我们智益安公司发展成地域中枢性的贸易基础。
                          </p>
                        </dd>
                        <dd class="none">
                          <p>
                            <strong>我们全体员工一视同仁</strong>
                            根据每个人的业绩和能力给予公平的待遇,
                            持有个人的创意性和挑战性精神充分发挥的话给予尊重和理解的模范性的组织文化。
                          </p>
                        </dd>
                      </dl>
                    </li>

                    <li className="txt_d">
                      <dl>
                        <dt>
                          <span>4</span> 商业领域
                        </dt>
                        <dd>
                          <dl>
                            <p>
                              <img src={A4000Img1} alt="/" />
                            </p>
                            <dt>儿童食品</dt>
                            <dd>为了孩子们的纯净的食品</dd>
                          </dl>
                        </dd>
                        <dd>
                          <dl>
                            <p>
                              <img src={A4000Img2} alt="" />
                            </p>
                            <dt>饮料</dt>
                            <dd>利用天然材料制作的健康的饮料</dd>
                          </dl>
                        </dd>
                        <dd>
                          <dl>
                            <p>
                              <img src={A4000Img3} alt="" />
                            </p>
                            <dt>健康机能性食品</dt>
                            <dd>帮助生活充满活力的健康机能性食品</dd>
                          </dl>
                        </dd>
                        <dd className="none">
                          <dl>
                            <p>
                              <img src={A4000Img4} alt="" />
                            </p>
                            <dt>流通网</dt>
                            <dd>
                              具备效率性的市场营销体系和扩大市场的流通据点
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
