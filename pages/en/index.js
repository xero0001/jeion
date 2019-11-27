import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleM from "../../components/styles/StyleM";

import MainBG from "../../public/images/mainbg_01.jpg";

import Section1Title from "../../public/images/section1_title1.gif";
import Section2Title from "../../public/images/section2_title.gif";
import Section3Title from "../../public/images/section3_title.gif";

import Section1Sub1 from "../../public/images/section1_subject1.gif";
import Section1Sub2 from "../../public/images/section1_subject2.gif";
import Section1Sub3 from "../../public/images/section1_subject3.gif";
import Section1Sub4 from "../../public/images/section1_subject4.gif";

import Section2Img1 from "../../public/images/kr/section2_babyfood.jpg";
import Section2Img2 from "../../public/images/kr/section2_noodles.jpg";
import Section2Img3 from "../../public/images/kr/section2_yogurt.jpg";

import Section2Img4 from "../../public/images/kr/section2_kimcook.jpg";
// import Section2Img5 from "../../public/images/kr/yogurtcube.jpg";
import Section2Img6 from "../../public/images/kr/section2_bagel.jpg";

import Section2Sub1 from "../../public/images/section2_subject1.gif";
import Section2Sub2 from "../../public/images/section2_subject2.gif";
import Section2Sub3 from "../../public/images/section2_subject3.gif";

import Section3Ban1 from "../../public/images/section3_banner1.jpg";
import Section3Sub from "../../public/images/section3_subject.gif";
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
                <strong>Safe food</strong>
                <span>to protect my precious child</span>
              </li>
              <li>
                <strong>Right food</strong>
                <span>welcomed by both mom and child</span>
              </li>
              <li>
                <strong>Good food</strong>
                <span>
                  to increase nutrients from the strictly selected ingredients
                </span>
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
                  width="284"
                  height="38"
                  alt="Business Areas"
                />
              </dt>
              <dd>
                <ul>
                  <li>
                    <p className="imgbox1"></p>
                    <dl>
                      <dt>
                        <img
                          src={Section1Sub1}
                          width="118"
                          height="27"
                          alt="Baby Foods"
                        />
                        <span>Baby Foods</span>
                      </dt>
                      <dd>
                        <span></span>Good and pure food
                        <br />
                        for children
                      </dd>
                      <dd className="more">
                        <Link href="/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <p className="imgbox2"></p>
                    <dl>
                      <dt>
                        <img
                          src={Section1Sub2}
                          width="94"
                          height="27"
                          alt="Beverage"
                        />
                        <span>Beverage</span>
                      </dt>
                      <dd>
                        <span></span>Healthy drinks with natural ingredients
                      </dd>
                      <dd className="more">
                        <Link href="/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <p className="imgbox3"></p>
                    <dl>
                      <dt>
                        <img
                          src={Section1Sub3}
                          width="173"
                          height="48"
                          alt="Health Functional Foods"
                        />
                        <span>Health Functional Foods</span>
                      </dt>
                      <dd>Dietary supplement to help..</dd>
                      <dd className="more">
                        <Link href="/story/philosophy">
                          <a title="페이지로 이동">MORE →</a>
                        </Link>
                      </dd>
                    </dl>
                  </li>

                  <li className="lilast">
                    <p className="imgbox4"></p>
                    <dl>
                      <dt>
                        <img
                          src={Section1Sub4}
                          width="118"
                          height="27"
                          alt="Distribution"
                        />
                        <span>Distribution</span>
                      </dt>
                      <dd>
                        <span></span>Distribution base for building efficient
                        marketing..
                      </dd>
                      <dd className="more">
                        <Link href="/story/philosophy">
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
              <dt id="sec_title">
                <img
                  src={Section2Title}
                  width="387"
                  height="38"
                  alt="Products and Services"
                />
              </dt>
              <dd>
                <ul>
                  <li>
                    <p>
                      <img src={Section2Img2} alt="유아국수 이미지" />
                    </p>
                    <dl>
                      <dt>
                        <span>Cheeki Monki Nutritious Baby Noodles</span>
                      </dt>
                      <dd>
                        <Link href="/products/noodles">
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
                        <span>Cheeki Monki Yogurt Cubes</span>
                      </dt>
                      <dd>
                        <Link href="/products/yogurt">
                          <a title=" 페이지로 이동" className="btn">
                            Read More
                          </a>
                        </Link>
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <p>
                      <img src={Section2Img1} alt="쌀이유식 이미지" />
                    </p>
                    <dl>
                      <dt>
                        <span>Beimei Nutritious Rice Cereal</span>
                      </dt>
                      <dd>
                        <Link href="/products/babyfood">
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
                        <span>Cheeki Monki Seaweed Cook</span>
                      </dt>
                      <dd>
                        <Link href="/products/kimcook">
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
                        <span>Haus Backen Bagel Chip</span>
                      </dt>
                      <dd>
                        <Link href="/products/bagelschip">
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
                  width="201"
                  height="33"
                  alt="About J:ON"
                />
              </dt>
              <dd className="banner">
                <ul>
                  <li>
                    <Link href="/story/message">
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
                            <Link href="/contact/post/1">
                              <a>CEO's Message</a>
                            </Link>
                          </dt>
                          <dd>
                            <Link href="/contact/post/1">
                              <a>
                                J:ON is a company that tries to create the
                                highest value for all mothers under the motto,
                                “Every possible need for mothers and children.”
                              </a>
                            </Link>
                          </dd>
                          <dd className="data">2019.11.23</dd>
                        </dl>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <p>
                  <Link href="/contact/notice">
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
