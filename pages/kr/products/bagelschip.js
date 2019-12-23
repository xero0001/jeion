import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/kr/styles/StyleS";

import Img1 from "../../../public/images/kr/products_bagel1.jpg";
import Img2 from "../../../public/images/kr/products_bagel2.jpg";

import ProductsBanner from "../../../components/kr/ProductsBanner";

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
                  <h4>베이글칩</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/kr">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/kr/products/noodles">
                    <a title="Our Products 메뉴로 이동하기">제품소개</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="About ABC Cookies 본문 바로가기">
                    {" "}
                    <em className="highlight">베이글칩</em>
                  </a>{" "}
                </div>
              </div>
              <hr />

              <h2>CONTENTS</h2>
              <div id="Start">
                <div className="contentsbox">
                  <div className="B1100">
                    <div className="tabmenu">
                      <Link href="/kr/products/noodles">
                        <a title="페이지로 이동">
                          <span>유아국수</span>
                        </a>
                      </Link>
                      <Link href="/kr/products/yogurt">
                        <a title="페이지로 이동">
                          <span>요거트큐브</span>
                        </a>
                      </Link>
                      <Link href="/kr/products/babyfood">
                        <a className="last" title="페이지로 이동">
                          <span>간편쌀이유식</span>
                        </a>
                      </Link>
                      <Link href="/kr/products/kimcook">
                        <a title="페이지로 이동">
                          <span>김쿡</span>
                        </a>
                      </Link>
                      <Link href="/kr/products/bagelschip">
                        <a className="last on" title="페이지로 이동">
                          <span>베이글칩</span>
                        </a>
                      </Link>
                    </div>

                    <ul id="products_content">
                      <li className="list_a">
                        <dl>
                          <dd>
                            <img src={Img1} />
                          </dd>
                          <dd>
                            <img src={Img2} />
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>제품소개</dt>
                          <dd>
                            <p>
                              다른 빵류 대비 소화가 잘되고 지방 함량이 낮은
                              베이글 빵을 얇게 슬라이스 하여 구워낸 제품으로
                              간편한 식사용으로도 안성맞춤
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>특징</dt>
                          <dd>
                            <p>
                              - 보관 및 휴대가 용이하며 아침대용으로 안성맞춤
                            </p>
                            <p>
                              - 기존의 베이글과 다른 바삭한 식감을 살린 제품
                            </p>
                            <p>
                              - 인공색소, 첨가제, 트랜스지방{" "}
                              <span id="han">無</span>첨가
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>100% 즐기는 법</dt>
                          <dd>
                            <p>- 크림치즈와 함께하면 진한 풍미가 가득</p>
                            <p>- 아메리카노 한잔과 함께</p>
                            <p>
                              - 다이어트 중에도 안심하고 먹을 수 있는 저지방
                              스낵
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
