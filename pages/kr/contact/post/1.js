import React from "react";
import styled from "@emotion/styled";
import { withRouter } from "next/router";
import StyleS from "../../../../components/kr/styles/StyleS";
import ContactBanner from "../../../../components/kr/ContactBanner";
import Link from "next/link";

import SubMenuC1000 from "../../../../public/images/submenu_C1000.gif";
import SubMenuC2000 from "../../../../public/images/submenu_C2000.gif";

import SubMenuC1000E from "../../../../public/images/submenu_C1000e.gif";
import SubMenuC2000E from "../../../../public/images/submenu_C2000e.gif";

import Notice1 from "../../../../public/images/notice_1.jpeg";

function Post(props) {
  const [menu1, setMenu1] = React.useState(SubMenuC1000E);
  const [menu2, setMenu2] = React.useState(SubMenuC2000);

  return (
    <>
      <StyleS />
      <ContactBanner />
      <div id="MainWrapper">
        <div id="SubWrapper">
          <div id="MainContents">
            <div id="Contents">
              <div className="titleroad">
                <div className="Subtitle">
                  <h4>Notice</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/kr/contact/notice">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/kr/contact/notice">
                    <a title="Contact Us 메뉴로 이동하기">Contact Us</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="Notice 본문 바로가기">
                    {" "}
                    <em className="highlight">Notice</em>
                  </a>{" "}
                </div>
              </div>
              <hr />

              <h2>CONTENTS</h2>
              <div id="Start">
                <div id="subleft">
                  <h2>하위메뉴</h2>
                  <div id="SubMenu" className="sidebar">
                    <ul>
                      <li className="sidebar1 rollout">
                        <Link href="/kr/contact/notice">
                          <a title="Notice 메뉴로 이동">
                            <img
                              src={menu1}
                              onMouseEnter={() => {
                                setMenu1(SubMenuC1000E);
                              }}
                              onMouseOut={() => {
                                setMenu1(SubMenuC1000E);
                              }}
                              alt="Notice"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar2 sidebarActive">
                        <Link href="/kr/contact/contact">
                          <a title="Contact Us  메뉴로 이동">
                            <img
                              src={menu2}
                              onMouseEnter={() => {
                                setMenu2(SubMenuC2000E);
                              }}
                              onMouseOut={() => {
                                setMenu2(SubMenuC2000);
                              }}
                              alt="Contact Us "
                            />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="contentsbox">
                <ul className="A1000">
                  <li className="notice_li">
                    <dl>
                      <dd>
                        <article>
                          <ArticleSection>
                            <ContentsWrap>
                              <TitleWrap>
                                <Title>CEO 인사말</Title>
                              </TitleWrap>
                              <SubTitleWrap>
                                <SubTitle>
                                  (주)제이온 " 엄마와 아이에게 필요한 모든
                                  가능성" 이라는 이념아래 모든 엄마들을 위한
                                  최고의 가치를 만들기 위해 노력하는 회사입니다.
                                </SubTitle>
                              </SubTitleWrap>
                              <InformationWrap>
                                <Information>
                                  <InformationText>
                                    <NewsAuthor>J:ON</NewsAuthor>
                                    <Date>2019.11.23</Date>
                                  </InformationText>
                                </Information>
                              </InformationWrap>
                              <ImageWrap>
                                <Image imgurl={Notice1}></Image>
                              </ImageWrap>
                            </ContentsWrap>
                            <ContentsWrap>
                              <Contents>
                                <ContentsPara>
                                  <p>
                                    (주)제이온 " 엄마와 아이에게 필요한 모든
                                    가능성" 이라는 이념아래 모든 엄마들을 위한
                                    최고의 가치를 만들기 위해 노력하는
                                    회사입니다. 회사 창립 이후, 많은 부모님들은
                                    건강하고 행복한 삶을 찾아 제품을 구매하기
                                    시작했습니다. 우리 과자를 시식한 고객들은
                                    맛있을 뿐만 아니라 동시에 매우 건강하다는
                                    점에 놀라워합니다. 밝은 미래를 가져올 수
                                    있도록 자신의 역할을 다해주신 모든 엄마
                                    아빠들에게 우리는 깊은 감사를 드립니다.
                                  </p>
                                  <p>
                                    제이온의 모든 임직원들은 우리의 지난 모든
                                    성과들이 고객의 신뢰와 사랑을 근간으로 한
                                    것이라는 사실을 잘 알고 있습니다. 우리의
                                    비전은 인간의 건강과 행복을 주는 종합식품
                                    회사입니다. 따라서 우리는 최상의 제품과
                                    서비스를 통해 아이와 사람에게 기여할 수 있는
                                    모든 일을 할 것을 약속합니다. 감사합니다.
                                  </p>
                                </ContentsPara>
                              </Contents>
                            </ContentsWrap>
                          </ArticleSection>
                        </article>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </div>
              <hr />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;

const ArticleSection = styled.section`
  width: 100%;
  ${props => props.theme.sansFont};
`;
const ContentsWrap = styled.div`
  max-width: 728px;
  margin: auto;
  width: 100%;
  word-break: break-word;
  ${props => props.theme.sansFont};

  @media (max-width: 1080px) {
  }
`;

const TitleWrap = styled.div`
  margin-top: 10px;
  font-size: 33px;

  @media (max-width: 1080px) {
    font-size: 30px;
  }
`;

const Title = styled.h1`
  font-size: 33px;
  color: black;
  position: relative;
  text-align: left;
  width: 100%;
  height: auto;
  visibility: visible !important;
  word-break: break-word;

  @media (max-width: 1080px) {
    font-size: 30px;
  }
`;

const SubTitleWrap = styled.div`
  margin-top: 0.78em;
  font-size: 22px;

  @media (max-width: 1080px) {
    font-size: 20px;
  }
`;

const SubTitle = styled.h2`
  color: rgb(96, 96, 96);
  position: relative;
  text-align: left;
  width: 100%;
  height: auto;
  font-size: 22px;
  font-weight: 400;
  visibility: visible !important;
`;

const InformationWrap = styled.div`
  margin-top: 15px;
`;

const Information = styled.div`
  display: flex;
  align-items: center;
`;

const InformationText = styled.div`
  font-size: 16px;

  @media (max-width: 1080px) {
    font-size: 14px;
  }
`;

const UserName = styled.div`
  color: ${props => props.theme.blackColor};
  font-size: 16px;
  line-height: 20px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 1080px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  color: rgb(96, 96, 96);
  line-height: 20px;
`;

const Contents = styled.div`
  display: block;
  text-align: start;

  & a {
    font-weight: 500;
    text-decoration: underline;
  }

  & p {
    font-size: 19px;
    line-height: 1.6;
    margin-top: 1.3em;

    @media (max-width: 1080px) {
      font-size: 17px;
    }
  }

  & h1 {
    font-size: 24px;
    line-height: 1.6;
    margin-top: 1.3em;

    @media (max-width: 1080px) {
      font-size: 22px;
    }
  }

  & h2 {
    font-size: 21px;
    line-height: 1.6;
    margin-top: 1.3em;

    @media (max-width: 1080px) {
      font-size: 19px;
    }
  }

  & h3 {
    font-size: 15px;
    line-height: 1.6;
    margin-top: 0.3em;
    color: rgb(100, 100, 100);

    @media (max-width: 1080px) {
      font-size: 13px;
    }
  }

  & h6 {
    font-size: 15px;
    line-height: 1.6;
    margin-top: 0.3em;
    color: rgb(100, 100, 100);

    @media (max-width: 1080px) {
      font-size: 13px;
    }
  }

  & strong {
    font-weight: 500;
  }
`;

const ContentsHeader = styled.h1`
  margin-top: 1.95em;
  font-size: 34px;
  letter-spacing: -0.022em;
  line-height: 1.12;
  font-weight: 900;
  ${props => props.theme.sansFont};
`;

const ContentsPara = styled.div`
  font-size: 21px;
  font-weight: 400;
  color: ${props => props.theme.darkerColor};
  line-height: 1.58;
  letter-spacing: -0.004em;
  margin-top: 0.86em;
  ${props => props.theme.sansFont};

  & img {
    max-width: 100%;
    min-width: 100px;
    width: 100%;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;
`;

const Image = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-image:url('${props => props.imgurl}');
  background-size: cover;
  background-position: center;
`;

const NewsAuthor = styled.div`
  margin-top: 14px;
  font-size: 15px;
  line-height: 18px;
  text-align: left;

  & div {
    height: 16px;
  }

  @media (max-width: 1080px) {
    font-size: 13px;
  }
`;
