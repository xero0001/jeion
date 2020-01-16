import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleM from "../components/kr/styles/StyleM";

import MainBG from "../public/images/mainbg_01.jpg";

import Section2Img1 from "../public/images/kr/section2_babyfood.jpg";
import Section2Img2 from "../public/images/kr/section2_noodles.jpg";
import Section2Img3 from "../public/images/kr/section2_yogurt.jpg";

import Section2Img4 from "../public/images/kr/section2_kimcook.jpg";
// import Section2Img5 from "../../public/images/kr/yogurtcube.jpg";
import Section2Img6 from "../public/images/kr/section2_bagel.jpg";

import Section2Sub1 from "../public/images/section2_subject1.gif";
import Section2Sub2 from "../public/images/section2_subject2.gif";
import Section2Sub3 from "../public/images/section2_subject3.gif";

import Section3Ban1 from "../public/images/kr/section3_banner1.jpeg";
import Section3Sub from "../public/images/section3_subject.gif";
import Section3More from "../public/images/section3_more.gif";

/**
 * We can use macros in `styled`.
 */
const Header = styled.div`
  ${tw`font-mono text-sm text-gray-800 hover:text-red-500`}
`;

const Button = styled.button`
  ${tw`bg-blue-500 text-white font-mono px-4 py-2 rounded`} :hover {
    ${tw`bg-blue-700`}
  }
`;

/**
 * Also, we can use `css`.
 */
const CardStyle = css`
  ${tw`p-4 border-solid border border-gray-300  rounded p-4 shadow-xl`}
`;

const Card = styled.div`
  ${CardStyle}
`;

const ImgBox1 = styled.li`
  background: url(${MainBG}) center top no-repeat;
`;

const Example = () => (
  <>
    <StyleM />
    <div id="Mainvisual">
      <h2>디자인 구성 요소</h2>
      <div className="elementbox">
        <ul className="Mainbg">
          <ImgBox1 className="imgbox1" />
          <li className="imgbox2" styledd="display:none;"></li>
          <li className="imgbox3" styledd="display:none;"></li>
        </ul>
        <div className="Maintext">
          <div className="titleWrap">
            <div className="title">Smile Care</div>
            <div className="subTitle">스마일 케어</div>
          </div>
          <div className="container">
            <ul>
              <li>
                <strong>Safe food</strong>
                <span>소중한 내 아이를 지켜주는 “안심 먹거리”</span>
              </li>
              <li>
                <strong>Right food</strong>
                <span>엄마와 아이의 마음에 꼭 맞는 "바른 먹거리"</span>
              </li>
              <li>
                <strong>Good food</strong>
                <span>엄선된 재료에 영양소를 높이는 "착한 먹거리"</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="MainWrapper">
      <div id="SubWrapper">
        <div id="MainContents">
          <div id="Section2">
            <dl>
              <dt id="sec_title">
                <span>제품 소개</span>
              </dt>
              <dd>
                <ul>
                  <li>
                    <p>
                      <img src={Section2Img2} alt="유아국수 이미지" />
                    </p>
                    <dl>
                      <dt>
                        <span>유아국수</span>
                      </dt>
                      <dd>
                        <Link href="/kr/products/noodles">
                          <a title=" 페이지로 이동" className="btn">
                            Read More
                          </a>
                        </Link>
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <p>
                      <img src={Section2Img3} alt="요거트큐브 이미지" />
                    </p>
                    <dl>
                      <dt>
                        <span>요거트큐브</span>
                      </dt>
                      <dd>
                        <Link href="/kr/products/yogurt">
                          <a title=" 페이지로 이동" className="btn">
                            Read More
                          </a>
                        </Link>
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <p>
                      <img src={Section2Img1} alt="간편쌀이유식 이미지" />
                    </p>
                    <dl>
                      <dt>
                        <span>간편쌀이유식</span>
                      </dt>
                      <dd>
                        <Link href="/kr/products/babyfood">
                          <a title=" 페이지로 이동" className="btn">
                            Read More
                          </a>
                        </Link>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
              <dd>
                <ul>
                  <li className="main_padding">
                    <p>
                      <img src={Section2Img4} alt="김쿡 이미지" />
                    </p>
                    <dl>
                      <dt>
                        <span>김쿡</span>
                      </dt>
                      <dd>
                        <Link href="/kr/products/kimcook">
                          <a title=" 페이지로 이동" className="btn">
                            Read More
                          </a>
                        </Link>
                      </dd>
                    </dl>
                  </li>
                  <li className="main_padding">
                    <p>
                      <img src={Section2Img6} alt="베이글칩 이미지" />
                    </p>
                    <dl>
                      <dt>
                        <span>베이글칩</span>
                      </dt>
                      <dd>
                        <Link href="/kr/products/bagelschip">
                          <a title=" 페이지로 이동" className="btn">
                            Read More
                          </a>
                        </Link>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div id="Section1">
            <dl>
              <dt id="sec_title">
                <span>사업분야</span>
              </dt>
              <dd>
                <ul>
                  <li>
                    <p className="imgbox1"></p>
                    <dl>
                      <dt id="main_subtitle">유아용식품</dt>
                      <dd>
                        <span></span>아이들을 위한 안전하고
                        <br />
                        깨끗한 먹거리
                      </dd>
                      <dd className="more">
                        <Link href="/kr/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <p className="imgbox2"></p>
                    <dl>
                      <dt id="main_subtitle">음료</dt>
                      <dd>
                        <span></span>천연재료로 만든 건강한 음료
                      </dd>
                      <dd className="more">
                        <Link href="/kr/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <p className="imgbox3"></p>
                    <dl>
                      <dt id="main_subtitle">건강기능식품</dt>
                      <dd>삶에 활력을 불어 넣어주는 건강기능성 식품</dd>
                      <dd className="more">
                        <Link href="/kr/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li className="lilast">
                    <p className="imgbox4"></p>
                    <dl>
                      <dt id="main_subtitle">유통</dt>
                      <dd>
                        <span></span>효율적인 시장 운영 시스템과 시장 판로 확대
                        유통 거점 보유
                      </dd>
                      <dd className="more">
                        <Link href="/kr/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Example;
