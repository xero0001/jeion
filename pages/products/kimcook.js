import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../components/styles/StyleS";

import Img from "../../public/images/kr/products_kimcook.jpg";

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
                  <h4>Cheeki Monki Seaweed Cook</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/products/noodles">
                    <a title="Our Products 메뉴로 이동하기">Our Products</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="About ABC Cookies 본문 바로가기">
                    {" "}
                    <em className="highlight">Seaweed Cook</em>
                  </a>{" "}
                </div>
              </div>
              <hr />

              <h2>CONTENTS</h2>
              <div id="Start">
                <div className="contentsbox">
                  <div className="B1100">
                    <div className="tabmenu">
                      <Link href="/products/noodles">
                        <a className="long" title="페이지로 이동">
                          <span>Cheeki Monki Nutritious Baby Noodles</span>
                        </a>
                      </Link>
                      <Link href="/products/yogurt">
                        <a title="페이지로 이동">
                          <span>Cheeki Monki Yogurt Cubes</span>
                        </a>
                      </Link>
                      <Link href="/products/babyfood">
                        <a className="last" title="페이지로 이동">
                          <span>Beimei Nutritious Rice Cereal</span>
                        </a>
                      </Link>
                      <Link href="/products/kimcook">
                        <a className="on" title="페이지로 이동">
                          <span>Cheeki Monki Seaweed Cook</span>
                        </a>
                      </Link>
                      <Link href="/products/bagelschip">
                        <a className="last" title="페이지로 이동">
                          <span>Haus Backen Bagel Chip</span>
                        </a>
                      </Link>
                    </div>

                    <ul id="products_content">
                      <li className="list_a">
                        <dl>
                          <dd>
                            <img src={Img} />
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>Product Introduction</dt>
                          <dd>
                            <p>
                              A freeze-dried block for instant soup to make
                              various dishes such as noodles, porridge, soup and
                              dumpling soup, which can be cooked simply by
                              pouring warm water
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>Features</dt>
                          <dd>
                            <p>
                              - Maximizes taste and nutrition using a
                              freeze-drying method
                            </p>
                            <p>- Can be cooked easily anytime, anywhere</p>
                            <p>
                              - Can be used for various dishes such as noodles,
                              porridge, and soup
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>How to Enjoy 100%</dt>
                          <dd>
                            <p>
                              - A variety of dishes made easily anytime,
                              anywhere by putting in noodles, stew and soup
                            </p>
                            <p>- Nutritious porridge for one meal </p>
                            <p>
                              - When traveling, bring Kim Cook, which turns into
                              a meal such as seaweed soup, water noodles, and
                              more!
                            </p>
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
