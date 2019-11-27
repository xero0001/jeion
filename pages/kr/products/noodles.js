import React from "react";
import Link from "next/link";

import StyleS from "../../../components/kr/styles/StyleS";

import ProductsBanner from "../../../components/kr/ProductsBanner";
import Img from "../../../public/images/kr/products_noodles.jpg";
import Img2 from "../../../public/images/kr/products_noodles2.jpg";

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
                  <h4>유아국수</h4>
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
                    <em className="highlight">유아국수</em>
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
                        <a className="on" title="페이지로 이동">
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
                            <img src={Img2} />
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>제품소개</dt>
                          <dd>
                            <p>
                              유아에게 적합한 채소 원재료에 미네럴과 비타민으로
                              맞춤형 영양설계, 나트륨 무첨가 제면기술은 물론 목
                              넘김에 맞춘 10cm의 면 길이와 먹기 편한 30g 묶음
                              포장까지 우리 아이를 위한 유아 전용면
                            </p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>특징</dt>
                          <dd>
                            <p>
                              - 8개월 이상부터 먹을 수 있는{" "}
                              <span id="han">無</span>
                              나트륨 유아 전용 국수
                            </p>
                            <p>
                              - 유아의 목 넘김에 맞춘 10cm길이/ 인공색소, 나트륨
                              無첨가
                            </p>
                            <p>
                              - 1회분 30g 묶음으로 간편 조리, 지퍼백 포장으로
                              안심 보관
                            </p>
                            <p>
                              - 채소와 칼슘, 아연, 철분, 비타민A, B, D 포함한
                              맞춤형 영양설계
                            </p>
                            <p>- 중국 국가표준(GB)인증 획득 제품</p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>100% 즐기는 법</dt>
                          <dd>
                            <p>
                              - 성장 단계별 채소와 함께 마음까지 쑥쑥 물국수
                            </p>
                            <p>- 평생 건강까지 생각한 저염 간장으로 비빔국수</p>
                            <p>- 이유식과 함께하는 유아국수로 오감발달 놀이</p>
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
