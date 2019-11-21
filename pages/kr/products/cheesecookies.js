import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/cn/styles/StyleS";

import SubMenuA1000E from "../../../public/images/submenu_A1000e.gif";

import SubMenuB1000E from "../../../public/images/cn/submenu_B1000e.gif";

import B1400Img from "../../../public/images/B1400_img.jpg";

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
                  &gt;
                  <a href="#Start" title="Cheese Cookies 본문 바로가기">
                    {" "}
                    <em className="highlight">香甜曲奇</em>
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
                        <Link href="/cn/products/cookies">
                          <a title="Cookies 메뉴로 이동">
                            <img src={SubMenuB1000E} alt="Cookies" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="contentsbox">
                  <div className="B1400">
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
                        <a title="페이지로 이동">
                          <span>海苔曲奇</span>
                        </a>
                      </Link>
                      <Link href="/cn/products/cheesecookies">
                        <a className="last on" title="페이지로 이동">
                          <span>香甜曲奇</span>
                        </a>
                      </Link>
                    </div>

                    <div className="imgbox">
                      <p className="photo">
                        <img src={B1400Img} alt="ABC치즈쿠키 이미지" />
                      </p>
                      <dl>
                        <dt>
                          聪明的我们的宝宝 营养丰富 <span>香甜曲奇饼干</span>
                        </dt>
                        <dd>使用儿童喜爱的芝士制作的香甜柔软的曲奇饼干</dd>
                        <dd>符合儿童喜好的卓越的食感和容易摄取的形态</dd>
                      </dl>
                    </div>

                    <div className="txtbox2">
                      <dl>
                        <dt>芝士的故事</dt>
                        <dd>
                          含有比牛奶多5倍以上的钙, 对成长期的儿童发育非常好{" "}
                        </dd>
                        <dd>对牛奶消化不良的儿童非常好 </dd>
                        <dd>
                          含有大量蛋白质, 对儿童身体的肌肉成长,
                          内脏器官发育有帮助
                        </dd>
                      </dl>
                    </div>

                    <div className="txtbox3">
                      <strong>ABC曲奇的正确食用方法</strong>
                    </div>

                    <div className="txtbox2">
                      <dl>
                        <dt>为了孩子的安心检查</dt>
                        <dd>
                          孩子吃饼干的时候请给孩子喝充足的水,
                          请看护好孩子直到孩子全部吃完{" "}
                        </dd>
                        <dd>
                          孩子躺着或者处在有可能堵住气道的姿势的时候请不要喂孩子吃饼干{" "}
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
