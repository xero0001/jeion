import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/styles/StyleS";

import Img from "../../../public/images/kr/products_babyfood.jpg";

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
                  <h4>Beimei Nutritious Rice Cereal</h4>
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
                    <em className="highlight">Rice Cereal</em>
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
                        <a className="last on" title="페이지로 이동">
                          <span>Rice Cereal</span>
                        </a>
                      </Link>
                      <Link href="/en/products/kimcook">
                        <a title="페이지로 이동">
                          <span>Seaweed Cook</span>
                        </a>
                      </Link>
                      <Link href="/en/products/bagelschip">
                        <a className="last" title="페이지로 이동">
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
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>Product Introduction</dt>
                          <dd>
                            <p>
                              Reduce allergies by more than domestic rice (93%),
                              add various vegetables, minerals and vitamins, and
                              provide nutritional support for infants and young
                              children
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>Features</dt>
                          <dd>
                            <p>
                              - 4 flavors : Rice, Pumpkin, Vegetable, Seaweed
                            </p>
                            <p>
                              - Nutritious Rice Cereal for 6 ~ 36 months old
                            </p>
                            <p>
                              - Supplement of essential nutrients through
                              selection of weaning stage by growth stage
                            </p>
                            <p>
                              - Rich flavor and taste while minimizing
                              nutritional loss through Extrusion technology
                            </p>
                            <p>
                              - Nutritional balance with right mix of calcium,
                              zinc, iron and Vitamin A, B, D
                            </p>
                            <p>- No preservatives, No flavoring</p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>How to Enjoy 100%</dt>
                          <dd>
                            <p>- Easy breakfast</p>
                            <p>- Nutritious meal</p>
                            <p>- Quick Meals for Long Distance Travel</p>
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
