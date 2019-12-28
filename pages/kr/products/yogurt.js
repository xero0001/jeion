import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/kr/styles/StyleS";

import Img from "../../../public/images/kr/products_yogurt.jpg";
import Img2 from "../../../public/images/kr/yogurt_cube.jpeg";

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
                  <h4>요거트 큐브</h4>
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
                    <em className="highlight">요거트 큐브</em>
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
                        <a className="on" title="페이지로 이동">
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
                          <dd>
                            <img id="yimg2" src={Img2} />
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>제품소개</dt>
                          <dd>
                            <p>
                              요거트와 과일을 동결건조 공법으로 가공하여
                              유아에게 필요한 영양과 유산균을 듬뿍 담은 요거트
                              스낵에 지퍼백 파우치 포장의 간편한 보관과 휴대까지
                              기능과 편의성을 높인 제품
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>특징</dt>
                          <dd>
                            <p>- 12개월 이상 유아 전용 요거트 스낵</p>
                            <p>
                              - 살아있는 유산균이 4억 마리 이상, 순수 과일
                              47%이상 함유
                            </p>
                            <p>
                              - 동결건조기술로 재료의 맛과 향은 살리고 영양소
                              파괴는 최소화
                            </p>
                            <p>
                              - 3중 필름 포장과 지퍼백으로 간편한 보관과 휴대성
                            </p>
                            <p>
                              - 보존료, 향료 <span id="han">無</span>첨가
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>100% 즐기는 법</dt>
                          <dd>
                            <p>- 우유와 함께 과일 가득 요거트 간편 이유식</p>
                            <p>- 유아용 치즈와 돌돌 말아 영양만점 치즈볼</p>
                            <p>- 큐브형 요거트 스낵으로 소근육 발달 놀이</p>
                            <p>- 과일퓨레 위에 올리는 요거트큐브 토핑</p>
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
