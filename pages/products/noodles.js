import React from "react";
import Link from "next/link";

import StyleS from "../../components/styles/StyleS";

import ProductsBanner from "../../components/ProductsBanner";
import Img from "../../public/images/kr/products_noodles.jpg";
import Img2 from "../../public/images/kr/products_noodles2.jpg";

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
                <div className="Subtitle long">
                  <h4>Cheeki Monki Nutritious Baby Noodles</h4>
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
                    <em className="highlight">Baby Noodles</em>
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
                        <a className="on long" title="페이지로 이동">
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
                        <a title="페이지로 이동">
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
                              The nutritional design with minerals and vitamins
                              to the vegetable raw materials suitable for
                              infants, the sodium-free noodle technology, and
                              the infant-only noodles
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>Features</dt>
                          <dd>
                            <p>
                              - 4 flavors : Plain, Spanish, Carrot, Sweet
                              Pumpkin
                            </p>
                            <p>
                              - Nutritional balance with right mix of vegetable
                              ingredients, calcium, zinc, iron, and Vitamin A,
                              B, D
                            </p>
                            <p>
                              - 10cm long noodle suitable for babies swallow
                            </p>
                            <p>- No sodium added, No color additives</p>
                            <p>
                              - Acquired GB certification for babies processed
                              food
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>How to Enjoy 100%</dt>
                          <dd>
                            <p>
                              - Enjoy as soup noodle complemented with healthy
                              vegetables
                            </p>
                            <p>
                              - No too salty food! Use low-sodium healthy soy
                              sauce to make mixed noodle
                            </p>
                            <p>
                              - Play for developing five-senses by eating baby
                              noodles and baby food together
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
