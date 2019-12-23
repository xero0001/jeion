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

import A50002015 from "../../../public/images/A5000_2015.jpg";
import A50002014 from "../../../public/images/A5000_2014.jpg";
import A50002013 from "../../../public/images/A5000_2013.jpg";

import StoryBanner from "../../../components/kr/StoryBanner";

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
                  <h4>회사연혁</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/kr">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/kr/story/about">
                    <a title="Our Story 메뉴로 이동하기">회사소개</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="Our History 본문 바로가기">
                    {" "}
                    <em className="highlight"> 회사연혁</em>
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
                                setMenu5(SubMenuA5000E);
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
                  <ul className="A5000">
                    <li>
                      <dl>
                        <dt>2019</dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>2019년 11월</strong>{" "}
                              <span>
                                <p>인천공항 시티/SM 면세점 입점</p>
                              </span>
                            </li>
                            <li>
                              <strong>2019년 10월</strong>{" "}
                              <span>
                                <p>
                                  식품외식산업 발전 유공 표창 (농림축산식품부
                                  장관)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>2019년 09월</strong>{" "}
                              <span>
                                <p>네이버 스마트스토어 제품 런칭</p>
                              </span>
                            </li>
                            <li>
                              <strong>2019년 06월</strong>{" "}
                              <span>
                                <p>국제식음료품평원(ITI) 국제미각인증상 수상</p>
                              </span>
                            </li>
                            <li>
                              <strong>2019년 05월</strong>{" "}
                              <span>
                                <p>태국 THAIFEX 가공식품분야 혁신상 수상</p>
                              </span>
                            </li>
                            <li>
                              <strong>2019년 01월</strong>{" "}
                              <span>
                                <p>
                                  국제구호단체 “월드비전” 연계 빈곤아동 정기후원
                                  개시(방글라데시)
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
                              <strong>2018년 03월</strong>{" "}
                              <span>
                                <p>
                                  국가식품클러스터 입주 (소재가공 및 패키징
                                  라인)
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
                              <strong>2017년 12월</strong>{" "}
                              <span>
                                <p>중국GB인증 획득 (유아용 국수 4종) </p>
                              </span>
                            </li>
                            <li>
                              <strong>2017년 07월</strong>{" "}
                              <span>
                                <p>벤처기업인증</p>
                              </span>
                            </li>
                            <li>
                              <strong>2017년 04월</strong>{" "}
                              <span>
                                <p>전북연구특구 연구소기업 인증</p>
                              </span>
                            </li>
                            <li>
                              <strong>2017년 01월</strong>{" "}
                              <span>
                                <p>
                                  (예비)인증사회적기업 지정
                                  (제2016-041호/기타형)
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
                              <strong>2016년 12월</strong>{" "}
                              <span>
                                <p>
                                  세종대학교기술지주 참여 (쌀면제조기술 유상호
                                  교수팀)
                                </p>
                                <p>전라북도 성장우수기업 인증 (전라북도지사)</p>
                              </span>
                            </li>
                            <li>
                              <strong>2016년 01월</strong>{" "}
                              <span>
                                <p>
                                  산학협력 성과창출 우수 표창 (전북대학교 총장)
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
                              <strong>2015년 01월</strong>{" "}
                              <span>
                                <p>
                                  전라북도 고부가가치사업 전문가 품평회 우수상
                                  수상 : ABC쿠키2종
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
                              <strong>2014년 12월</strong>{" "}
                              <span>
                                <p>
                                  우수소상공인 표창 (전라북도경제통상진흥원장)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>2014년 04월</strong>{" "}
                              <span>
                                <p>
                                  전라북도 지역소재 활성화를 위한 R&amp;D 모임
                                  발족{" "}
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>2014년 01월</strong>{" "}
                              <span>
                                <p>전라북도장애인복지관 연계 정기후원 개시 </p>
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
                              <strong>2013년 10월</strong>{" "}
                              <span>
                                <p>회사이전(10월 08일, 전주시 덕진구 여의동)</p>
                                <p>
                                  국제구호단체 “굿네이버스” 연계 빈곤아동
                                  정기후원 개시(미얀마)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>2013년 09월</strong>{" "}
                              <span>
                                <p>회사설립(09월 11일, 주식회사 제이온)</p>
                                <p>유아용 쿠키 중국 수출 개시(09월 13일)</p>
                              </span>
                            </li>
                            <li>
                              <strong>2013년 05월</strong>{" "}
                              <span>
                                <p>사무실 개소(전주시 완산구 서곡5길)</p>
                              </span>
                            </li>
                            <li>
                              <strong>2013년 04월</strong>{" "}
                              <span>
                                <p>
                                  사회적기업가육성사업 2기 창업팀 선정
                                  (전라북도경제통상진흥원)
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
