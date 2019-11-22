import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/cn/styles/StyleS";

import SubMenuA1000E from "../../../public/images/submenu_A1000e.gif";

import SubMenuB1000E from "../../../public/images/cn/submenu_B1000e.gif";

import B1300Img from "../../../public/images/B1300_img.jpg";

import ProductsBanner from "../../../components/cn/ProductsBanner";

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
                  <h4>我们的产品</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/cn">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/cn/products/cookies">
                    <a title="Our Products 메뉴로 이동하기">我们的产品</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/cn/products/cookies">
                    <a title="Cookies 메뉴로 이동하기">饼干</a>
                  </Link>{" "}
                  &gt;{" "}
                  <a href="#Start" title="Laver Cookies 본문 바로가기">
                    <em className="highlight">海苔曲奇</em>
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
                        <Link href="inner.php?sMenu=B1100">
                          <a title="Cookies 메뉴로 이동">
                            <img src={SubMenuB1000E} alt="Cookies" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="contentsbox">
                  <div className="B1300">
                    <div className="tabmenu">
                      <Link href="/cn/products/cookies">
                        <a title="페이지로 이동">
                          <span>关于ABC饼干</span>
                        </a>
                      </Link>
                      <Link href="/cn/products/citroncookies">
                        <a title="페이지로 이동">
                          <span>柚子曲奇</span>
                        </a>
                      </Link>
                      <Link href="/cn/products/lavercookies">
                        <a className="on" title="페이지로 이동">
                          <span>海苔曲奇</span>
                        </a>
                      </Link>
                      <Link href="/cn/products/cheesecookies">
                        <a className="last" title="페이지로 이동">
                          <span>香甜曲奇</span>
                        </a>
                      </Link>
                    </div>
                    <div className="imgbox">
                      <p className="photo">
                        <img src={B1300Img} alt="ABC김쿠키 이미지" />
                      </p>
                      <dl>
                        <dt>
                          健壮的我们的宝宝 大海的味道 <span>海苔曲奇饼干</span>
                        </dt>
                        <dd>
                          使用天然产的海苔制作的健康和美味能够同时享受的儿童曲奇饼干
                        </dd>
                        <dd>符合儿童喜好的卓越的食感和容易摄取的形态</dd>
                      </dl>
                    </div>
                    <div className="txtbox2">
                      <dl>
                        <dt>海苔的故事</dt>
                        <dd>钙含量丰富对于成长期儿童的骨骼发育有很大帮助 </dd>
                        <dd>
                          含有大量维他命A成分, 对眼睛健康有很大帮助
                          特别是对经常使用智能手机和电脑的人非常好{" "}
                        </dd>
                        <dd>
                          含有大量海藻类, 而褐藻酸有能够刺激肠运动的效果,
                          对于有便秘的儿童非常好
                        </dd>
                      </dl>
                    </div>
                    <div className="txtbox3">
                      <strong> ABC曲奇的正确食用方法</strong>
                    </div>
                    <div className="txtbox2">
                      <dl>
                        <dt>为了孩子的安心检查</dt>
                        <dd>
                          孩子吃饼干的时候请给孩子喝充足的水,
                          请看护好孩子直到孩子全部吃完
                        </dd>
                        <dd>
                          孩子躺着或者处在有可能堵住气道的姿势的时候请不要喂孩子吃饼干
                        </dd>
                        <dd>有特别性过敏情况的孩子请确认产品成分后再喂孩子</dd>
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
                            产品详细情报
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
                          <td>LAVER</td>
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
                  </div>
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