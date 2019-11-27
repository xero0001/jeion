import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/kr/styles/StyleS";

import Img from "../../../public/images/kr/products_kimcook.jpg";

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
                  <h4>김쿡</h4>
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
                    <em className="highlight">김쿡</em>
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
                          <span>쌀이유식</span>
                        </a>
                      </Link>
                      <Link href="/kr/products/kimcook">
                        <a className="on" title="페이지로 이동">
                          <span>김쿡</span>
                        </a>
                      </Link>
                      <Link href="/kr/products/bagelschip">
                        <a className="last" title="페이지로 이동">
                          <span>베이글칩</span>
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
                          <dt>제품소개</dt>
                          <dd>
                            <p>
                              간편하게 따뜻한 물만 부어 국수, 죽, 탕, 만둣국 등
                              다양한 요리가 가능한 즉석 국물요리용 동결건조블럭
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>특징</dt>
                          <dd>
                            <p>- 동결건조 공법을 이용해 맛과 영양을 최대화</p>
                            <p>- 조리가 간편하여 언제 어디서든 요리가 가능</p>
                            <p>- 국수, 죽, 탕 등 다양한 요리에 활용이 가능</p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>100% 즐기는 법</dt>
                          <dd>
                            <p>
                              - 국수, 국, 탕 등에 넣어 언제 어디서나 간편하게
                              다양한 요리 완성
                            </p>
                            <p>- 영양만점 한 끼 죽</p>
                            <p>
                              - 여행 갈 때 김쿡 하나면 미역국, 물국수 등 요리로
                              뚝딱!{" "}
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
