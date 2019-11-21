import React from "react";
import Link from "next/link";

import StyleS from "../../../components/kr/styles/StyleS";

import ProductsBanner from "../../../components/kr/ProductsBanner";

import Img from "../../../public/images/kr/products_babyfood.jpg";

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
                  <h4>쌀이유식</h4>
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
                    <em className="highlight">쌀이유식</em>
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
                        <a className="last on" title="페이지로 이동">
                          <span>쌀이유식</span>
                        </a>
                      </Link>
                      <Link href="/kr/products/kimcook">
                        <a title="페이지로 이동">
                          <span>김쿡</span>
                        </a>
                      </Link>
                      <Link href="/kr/products/pasta">
                        <a title="페이지로 이동">
                          <span>쌀파스타</span>
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
                              국내산 쌀(93%) 이상으로 알러지를 감소시키고, 각종
                              채소와 미네랄 및 비타민을 넣어 영유아 성장과
                              단계(6~36개월)별 영양설계로 성장기 영유아의
                              영양공급
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>특징</dt>
                          <dd>
                            <p>- 6개월~36개월 영유아 이유식</p>
                            <p>
                              - 성장 단계별 이유식 선택을 통한 필수 영양소 보충
                            </p>
                            <p>
                              - 인공색소, 첨가제, 트랜스지방{" "}
                              <span id="han">無</span>첨가
                            </p>
                            <p>
                              - Extrusion기술로 재료의 맛과 향은 살리고 영양소
                              파괴는 최소화
                            </p>
                            <p>
                              - 칼슘, 아연, 철분, 비타민(A, B1, D3) 포함한
                              영유아 맞춤형 영양설계
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>100% 즐기는 법</dt>
                          <dd>
                            <p>- 간편한 아침식사</p>
                            <p>- 영양만점 한 끼 식사</p>
                            <p>- 장거리 여행 시 간편식사</p>
                            <p>- 영양보충 간식</p>
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
