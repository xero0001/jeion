import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/styles/StyleS";

import Img from "../../../public/images/kr/products_yogurt.jpg";

import ProductsBanner from "../../../components/ProductsBanner";

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
                  <h4>Cheeki Monki Yogurt Cubes</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/en/">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/en/products/noodles">
                    <a title="Our Products 메뉴로 이동하기">Our Products</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="About ABC Cookies 본문 바로가기">
                    {" "}
                    <em className="highlight">Yogurt Cubes</em>
                  </a>{" "}
                </div>
              </div>
              <hr />

              <h2>CONTENTS</h2>
              <div id="Start">
                <div className="contentsbox">
                  <div className="B1100">
                    <div className="tabmenu">
                      <Link href="/en/products/noodles">
                        <a className="long" title="페이지로 이동">
                          <span>Cheeki Monki Nutritious Baby Noodles</span>
                        </a>
                      </Link>
                      <Link href="/en/products/yogurt">
                        <a className="on" title="페이지로 이동">
                          <span>Cheeki Monki Yogurt Cubes</span>
                        </a>
                      </Link>
                      <Link href="/en/products/babyfood">
                        <a className="last" title="페이지로 이동">
                          <span>Beimei Nutritious Rice Cereal</span>
                        </a>
                      </Link>
                      <Link href="/en/products/kimcook">
                        <a title="페이지로 이동">
                          <span>Cheeki Monki Seaweed Cook</span>
                        </a>
                      </Link>
                      <Link href="/en/products/bagelschip">
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
                              Yogurt and fruit are processed by freeze-dried
                              method, and it is easy to store and carry zipper
                              bag pouch in yogurt snack which has plenty of
                              nutrition and lactic acid bacteria needed for
                              infant.
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>Features</dt>
                          <dd>
                            <p>
                              - 4 flavors : Strawberry, Blueberry, Mango, Apple
                            </p>
                            <p>
                              - Contains over 400 million alive probiotics and
                              fruits over 47%
                            </p>
                            <p>
                              - Rich flavor and taste while minimizing
                              nutritional loss through freeze-dride technology
                            </p>
                            <p>
                              - Cube shape Baby suitable for infant's small
                              muscle development
                            </p>
                            <p>- No preservatives, Np flavoring</p>
                            <p>
                              - Triple packing and zip-lock bag type for easy
                              storage and carrying
                            </p>
                            <p>
                              - ITI was recognized as a differentiated flavor by
                              the evaluation result of 1 star
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>How to Enjoy 100%</dt>
                          <dd>
                            <p>
                              - Mix yogurt cubes and milk, a simple way to make
                              fruits yogurt
                            </p>
                            <p>
                              - Turns into a nutritional cheese ball if rolled
                              with cheese
                            </p>
                            <p>- Cube yogurt bites, good for finger plays</p>
                            <p>- yogurt cube topping on fruit puree</p>
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
