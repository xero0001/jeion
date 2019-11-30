import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/styles/StyleS";

import Img from "../../../public/images/kr/products_bagel1.jpg";
import Img2 from "../../../public/images/kr/products_bagel2.jpg";

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
                  <h4>Haus Backen Bagel Chip</h4>
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
                    <em className="highlight">Bagel Chip</em>
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
                        <a title="페이지로 이동">
                          <span>Nutritious Baby Noodles</span>
                        </a>
                      </Link>
                      <Link href="/en/products/yogurt">
                        <a title="페이지로 이동">
                          <span>Yogurt Cubes</span>
                        </a>
                      </Link>
                      <Link href="/en/products/babyfood">
                        <a className="last" title="페이지로 이동">
                          <span>Rice Cereal</span>
                        </a>
                      </Link>
                      <Link href="/en/products/kimcook">
                        <a title="페이지로 이동">
                          <span>Seaweed Cook</span>
                        </a>
                      </Link>
                      <Link href="/en/products/bagelschip">
                        <a className="last on" title="페이지로 이동">
                          <span>Bagel Chip</span>
                        </a>
                      </Link>
                    </div>

                    <ul id="products_content">
                      <li className="list_a">
                        <dl>
                          <dd>
                            <img src={Img} />
                          </dd>
                          <dd>
                            <img src={Img2} />
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>Product Introduction</dt>
                          <dd>
                            <p>
                              A product made by thinly slicing a bagel with
                              better digestibility and lower fat than other
                              breads and perfect for a simple meal
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>Features</dt>
                          <dd>
                            <p>
                              - Easy to keep and carry and perfect for a
                              breakfast alternative
                            </p>
                            <p>
                              - Improved crispy texture unlike existing bagels
                            </p>
                            <p>
                              - No artificial colors, additives or trans fats
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>How to Enjoy 100%</dt>
                          <dd>
                            <p>- Rich flavor with cream cheese</p>
                            <p>- With a cup of Americano</p>
                            <p>
                              - A low-fat snack that can be taken with
                              confidence while on a diet
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
