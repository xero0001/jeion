import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/cn/styles/StyleS";

import SubMenuA1000E from "../../../public/images/submenu_A1000e.gif";

import SubMenuB1000E from "../../../public/images/cn/submenu_B1000e.gif";

import B1100Img1 from "../../../public/images/B1100_img1.jpg";
import B1100Img2 from "../../../public/images/B1100_img2.jpg";
import B1100Img3 from "../../../public/images/B1100_img3.jpg";
import B1100Img4 from "../../../public/images/B1100_img4.jpg";
import B1100Img5 from "../../../public/images/B1100_img5.jpg";
import B1100Img6 from "../../../public/images/B1100_img6.jpg";

import B11004Title from "../../../public/images/cn/B1100_4title.gif";

import ArrowLt from "../../../public/images/arrow_lt.gif";
import ArrowBt from "../../../public/images/arrow_bt.gif";
import ArrowRt from "../../../public/images/arrow_rt.gif";

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
                  <a href="#Start" title="About ABC Cookies 본문 바로가기">
                    {" "}
                    <em className="highlight">关于ABC饼干</em>
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
                  <div className="B1100">
                    <div className="tabmenu">
                      <Link href="/cn/products/cookies">
                        <a className="on" title="페이지로 이동">
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
                        <a className="last" title="페이지로 이동">
                          <span>香甜曲奇</span>
                        </a>
                      </Link>
                    </div>

                    <ul>
                      <li>
                        <dl>
                          <dt>
                            <span>1</span> 机能性
                          </dt>
                          <dd>
                            强化维生素, 钙, DHA 等
                            主要营养要素和通过天然发酵法制作的儿童饼干
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>
                            <span>2</span> 便利性
                          </dt>
                          <dd>
                            符合年龄层别(未满7岁)的喜好的卓越的食感和容易吸收的形态以及包装
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>
                            <span>3</span> 安定性
                          </dt>
                          <dd>
                            兼备HACCP, ISO认证的国内最大规模的坚果生产设施{" "}
                          </dd>
                          <dd>不使用卵黄对儿童的过敏反应有安全保障</dd>
                          <dd>
                            为了顺利出口通关不使用卵黄, 维持了干果的食感和风味
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>
                            <span>4</span>{" "}
                            <img
                              src={B11004Title}
                              width="290"
                              height="31"
                              alt=""
                            />
                          </dt>
                          <dd className="tbox">
                            <table className="tb_normal">
                              <tbody>
                                <tr>
                                  <td>01. 混合</td>
                                  <td rowspan="2" className="rt">
                                    <img src={ArrowRt} alt="" />
                                  </td>
                                  <td>02. 发酵</td>
                                  <td rowspan="2" className="rt">
                                    <img src={ArrowRt} alt="" />
                                  </td>
                                  <td>03. 成型</td>
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
                                  <td>06. 包装</td>
                                  <td rowspan="2" className="lt">
                                    <img src={ArrowLt} alt="" />
                                  </td>
                                  <td>05. 冷卻</td>
                                  <td rowspan="2" className="lt">
                                    <img src={ArrowLt} alt="" />
                                  </td>
                                  <td>04. 烘焙</td>
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
