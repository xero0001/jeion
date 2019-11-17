import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../components/styles/StyleS";

import SubMenuA1000E from "../../public/images/submenu_A1000e.gif";

import SubMenuB1000E from "../../public/images/submenu_B1000e.gif";

import B1200Img from "../../public/images/B1200_img.jpg";

import ProductsBanner from "../../components/ProductsBanner";

export default () => {
  return (
    <>
      <StyleS />
      <ProductsBanner />
      <div id="MainWrapper">
        <div id="SubWrapper">
          <div id="MainContents">
            <div id="Contents">
              <div className="titleroad">
                <div className="Subtitle">
                  <h4>Our Products</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="inner.php?sMenu=main">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="products/cookies">
                    <a title="Our Products 메뉴로 이동하기">Our Products</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="products/cookies">
                    <a title="Cookies 메뉴로 이동하기">Cookies</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="Citron Cookies 본문 바로가기">
                    {" "}
                    <em className="highlight">Citron Cookies</em>
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
                        <Link href="/products/cookies">
                          <a title="Cookies 메뉴로 이동">
                            <img src={SubMenuB1000E} alt="Cookies" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="contentsbox">
                  <div className="B1200">
                    <div className="tabmenu">
                      <Link href="/products/cookies">
                        <a title="페이지로 이동">
                          <span>About ABC Cookies</span>
                        </a>
                      </Link>
                      <Link href="/products/citroncookies">
                        <a className="on" title="페이지로 이동">
                          <span>Citron Cookies</span>
                        </a>
                      </Link>
                      <Link href="/products/lavercookies">
                        <a title="페이지로 이동">
                          <span>Laver Cookies</span>
                        </a>
                      </Link>
                      <Link href="/products/cheesecookies">
                        <a className="last" title="페이지로 이동">
                          <span>Cheese Cookies</span>
                        </a>
                      </Link>
                    </div>

                    <div className="imgbox">
                      <p className="photo">
                        <img src={B1200Img} alt="ABC유자쿠키 이미지" />
                      </p>
                      <dl>
                        <dt>
                          <span>ABC Citron cookie</span> with natural flavor for
                          children{" "}
                        </dt>
                        <dd>Children's healthy cookie using natural citron</dd>
                        <dd>
                          Excellent texture and easy digestion for young
                          children
                        </dd>
                      </dl>
                    </div>

                    <div className="txtbox2">
                      <dl>
                        <dt>The Citron Story</dt>
                        <dd>
                          It has over 10 times as much calcium as an apple and
                          is good for children' growth.{" "}
                        </dd>
                        <dd>
                          It also has plenty of vitamin C, which helps body
                          functions and health, and it is particularly great for
                          young children in preventing a common cold (showing
                          14% of effectiveness).{" "}
                        </dd>
                      </dl>
                    </div>

                    <div className="txtbox3">
                      <strong>How to enjoy ABC cookie</strong>
                    </div>

                    <div className="txtbox2">
                      <dl>
                        <dt>Check list for babies</dt>
                        <dd>
                          Please give the baby enough water with the cookie and
                          watch the baby until finishing eating.{" "}
                        </dd>
                        <dd>
                          Do not feed the cookie when the baby is lying or there
                          is a chance to block the airway.{" "}
                        </dd>
                        <dd>
                          If the baby is allergic to a certain ingredient,
                          please check all ingredients carefully.
                        </dd>
                      </dl>
                    </div>

                    <table
                      className="tstyle"
                      summary="ABC유자쿠키의 제품상세정보를 안내하는 표입니다."
                    >
                      <colgroup>
                        <col width="25%" />
                        <col width="25%" />
                        <col width="25%" />
                        <col width="25%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th colspan="4" scope="col">
                            Product details
                          </th>
                        </tr>
                        <tr>
                          <td scope="low">ITEM</td>
                          <td>ABC COOKIES</td>
                          <td>G.W/CTN</td>
                          <td>2,600g</td>
                        </tr>
                        <tr>
                          <td scope="low">FLAVOR</td>
                          <td>CITRON</td>
                          <td>PACKING MATERIAL</td>
                          <td>PP,PAPER</td>
                        </tr>
                        <tr>
                          <td scope="low">UNIT</td>
                          <td>46g</td>
                          <td>CTN SIZE</td>
                          <td>490X305X172mm</td>
                        </tr>
                        <tr>
                          <td scope="low">PACKING/CTN</td>
                          <td>30EA</td>
                          <td>LOADAGE</td>
                          <td>1,200CTN(20FT)/2,400CTN(40FT)</td>
                        </tr>
                        <tr>
                          <td scope="low">N.W/CTN</td>
                          <td>1,380g</td>
                          <td>SHELF LIFE</td>
                          <td>12MONTH</td>
                        </tr>
                      </tbody>
                    </table>
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
