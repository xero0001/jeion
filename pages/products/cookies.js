import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../components/styles/StyleS";

import SubMenuA1000E from "../../public/images/submenu_A1000e.gif";

import SubMenuB1000E from "../../public/images/submenu_B1000e.gif";

import B1100Img1 from "../../public/images/B1100_img1.jpg";
import B1100Img2 from "../../public/images/B1100_img2.jpg";
import B1100Img3 from "../../public/images/B1100_img3.jpg";
import B1100Img4 from "../../public/images/B1100_img4.jpg";
import B1100Img5 from "../../public/images/B1100_img5.jpg";
import B1100Img6 from "../../public/images/B1100_img6.jpg";

import ArrowLt from "../../public/images/arrow_lt.gif";
import ArrowBt from "../../public/images/arrow_bt.gif";
import ArrowRt from "../../public/images/arrow_rt.gif";

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
                  <a href="#Start" title="About ABC Cookies 본문 바로가기">
                    {" "}
                    <em className="highlight">About ABC Cookies</em>
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
                  <div className="B1100">
                    <div className="tabmenu">
                      <Link href="/products/cookies">
                        <a className="on" title="페이지로 이동">
                          <span>About ABC Cookies</span>
                        </a>
                      </Link>
                      <Link href="/products/citroncookies">
                        <a title="페이지로 이동">
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

                    <ul>
                      <li>
                        <dl>
                          <dt>
                            <span>1</span> Functional
                          </dt>
                          <dd>
                            Cookies for children with strengthening nutrients
                            such as vitamins, calcium, DHA, etc. by natural
                            fermentation method
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>
                            <span>2</span> Easy
                          </dt>
                          <dd>
                            Easy shape and package that has excellent texture
                            and digestibility for the target users (under 7
                            years old)
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>
                            <span>3</span> Safe
                          </dt>
                          <dd>
                            The nation's largest dried confectionaries
                            production facilities with HACCP and ISO
                          </dd>
                          <dd>
                            Does not use any egg yolk and is safe for young
                            children with hypersensitivity
                          </dd>
                          <dd>
                            To ensure easy international custom inspection
                            process, no yolk (egg) has been used, maintaining
                            its texture and flavor
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>
                            <span>4</span> How Are ABC Cookies Made?
                          </dt>
                          <dd className="tbox">
                            <table className="tb_normal">
                              <tbody>
                                <tr>
                                  <td>01. MIXING</td>
                                  <td rowspan="2" className="rt">
                                    <img src={ArrowRt} alt="" />
                                  </td>
                                  <td>02. FERMENTATION</td>
                                  <td rowspan="2" className="rt">
                                    <img src={ArrowRt} alt="" />
                                  </td>
                                  <td>03. FORMING</td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src={B1100Img1} alt="" />
                                  </td>
                                  <td>
                                    <img src={B1100Img2} alt="" />
                                  </td>
                                  <td>
                                    <img src={B1100Img3} alt="" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td>&nbsp;</td>
                                  <td className="bt">
                                    <img src={ArrowBt} alt="" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>06. PACKING</td>
                                  <td rowspan="2" className="lt">
                                    <img src={ArrowLt} alt="" />
                                  </td>
                                  <td>05. COOLING</td>
                                  <td rowspan="2" className="lt">
                                    <img src={ArrowLt} alt="" />
                                  </td>
                                  <td>04. BAKING</td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src={B1100Img6} alt="" />
                                  </td>
                                  <td>
                                    <img src={B1100Img5} alt="" />
                                  </td>
                                  <td>
                                    <img src={B1100Img4} alt="" />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </dd>
                        </dl>
                      </li>
                    </ul>
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
