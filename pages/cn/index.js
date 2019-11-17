import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleM from "../../components/cn/styles/StyleM";

import MainBG from "../../public/images/mainbg_01.jpg";

import Section1Title from "../../public/images/cn/section1_title1.gif";
import Section2Title from "../../public/images/cn/section2_title.gif";
import Section3Title from "../../public/images/cn/section3_title.gif";

import Section1Sub1 from "../../public/images/section1_subject1.gif";
import Section1Sub2 from "../../public/images/section1_subject2.gif";
import Section1Sub3 from "../../public/images/section1_subject3.gif";
import Section1Sub4 from "../../public/images/section1_subject4.gif";

import Section2Img1 from "../../public/images/section2_img1.jpg";
import Section2Img2 from "../../public/images/section2_img2.jpg";
import Section2Img3 from "../../public/images/section2_img3.jpg";

import Section2Sub1 from "../../public/images/cn/section2_subject1.gif";
import Section2Sub2 from "../../public/images/cn/section2_subject2.gif";
import Section2Sub3 from "../../public/images/cn/section2_subject3.gif";

import Section3Ban1 from "../../public/images/cn/section3_banner1.jpg";
import Section3Sub from "../../public/images/cn/section3_subject.gif";
import Section3More from "../../public/images/section3_more.gif";

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
          <div className="container">
            <ul>
              <li>
                <strong>放心零食</strong>
                <span>为心爱的宝宝精心设计的</span>
              </li>
              <li>
                <strong>健康零食</strong>
                <span>妈妈和宝宝都称心的</span>
              </li>
              <li>
                <strong>亲近零食</strong>
                <span>精选的原料融合各种营养的</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="MainWrapper">
      <div id="SubWrapper">
        <div id="MainContents">
          <div id="Section1">
            <dl>
              <dt>
                <img
                  src={Section1Title}
                  width="187"
                  height="39"
                  alt="Business Areas"
                />
              </dt>
              <dd>
                <ul>
                  <li>
                    <p className="imgbox1"></p>
                    <dl>
                      <dt>儿童食品</dt>
                      <dd>
                        <span></span>为了孩子们的纯净的食品
                      </dd>
                      <dd className="more">
                        <Link href="/cn/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <p className="imgbox2"></p>
                    <dl>
                      <dt>饮料</dt>
                      <dd>
                        <span></span>利用天然材料制作的健康的饮料
                      </dd>
                      <dd className="more">
                        <Link href="/cn/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <p className="imgbox3"></p>
                    <dl>
                      <dt>健康机能性食品</dt>
                      <dd>帮助生活充满活力的健康机能性食品</dd>
                      <dd className="more">
                        <Link href="/cn/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li className="lilast">
                    <p className="imgbox4"></p>
                    <dl>
                      <dt>流通网</dt>
                      <dd>
                        <span></span>
                        具备效率性的市场营销体系和扩大市场的流通据点
                      </dd>
                      <dd className="more">
                        <Link href="/cn/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div id="Section2">
            <dl>
              <dt>
                <img
                  src={Section2Title}
                  width="187"
                  height="39"
                  alt="Products &amp; Services"
                />
              </dt>
              <dd>
                <ul>
                  <li>
                    <p>
                      <img src={Section2Img2} alt="ABC Citron Cookies 이미지" />
                    </p>
                    <dl>
                      <dt>
                        <img src={Section2Sub2} alt="ABC Citron Cookies" />
                        <span>Citron Cookies</span>
                      </dt>
                      <dd>
                        <Link href="/cn/products/citroncookies">
                          <a title=" 페이지로 이동" className="btn">
                            Read More
                          </a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <p>
                      <img src={Section2Img3} alt="ABC Laver Cookies 이미지" />
                    </p>
                    <dl>
                      <dt>
                        <img src={Section2Sub3} alt="ABC Laver Cookies" />
                        <span>Laver Cookies</span>
                      </dt>
                      <dd>
                        <Link href="/cn/products/lavercookies">
                          <a title=" 페이지로 이동" className="btn">
                            Read More
                          </a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <p>
                      <img src={Section2Img1} alt="ABC Cheese Cookies 이미지" />
                    </p>
                    <dl>
                      <dt>
                        <img src={Section2Sub1} alt="ABC Cheese Cookies" />
                        <span>Cheese Cookies</span>
                      </dt>
                      <dd>
                        <Link href="/cn/products/cheesecookies">
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
          <div id="Section3">
            <dl>
              <dt>
                <img
                  src={Section3Title}
                  width="187"
                  height="39"
                  alt="About J:ON"
                />
              </dt>
              <dd className="banner">
                <ul>
                  <li>
                    <Link href="/cn/story/message">
                      <a title="CEO’s Message 페이지로 이동">
                        <img
                          src={Section3Ban1}
                          alt="CEO’s Message  페이지로 이동"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </dd>

              <dd className="Notice">
                <dl>
                  <dt>
                    <img src={Section3Sub} alt="News &amp; Notice" />
                  </dt>
                  <dd>
                    <ul>
                      <li>
                        <dl>
                          <dt>
                            <a href="inner.php?sMenu=C1000&amp;mode=view&amp;no=5">
                              CEO's Message
                            </a>
                          </dt>
                          <dd>
                            <a href="inner.php?sMenu=C1000&amp;mode=view&amp;no=5">
                              J:ON is a company that tries to create the highest
                              value for all mothers under the motto, “Every
                              possible need for mothers and children”.Ever since
                              J:ON was founded, p..
                            </a>
                          </dd>
                          <dd className="data">2016.02.16</dd>
                        </dl>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <p>
                  <Link href="/cn/contact/notice">
                    <a title="공지사항 게시판으로 이동">
                      <img
                        src={Section3More}
                        width="22"
                        height="21"
                        alt="MORE"
                      />
                    </a>
                  </Link>
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Example;
