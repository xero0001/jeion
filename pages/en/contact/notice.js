import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/styles/StyleS";

import SubMenuC1000 from "../../../public/images/submenu_C1000.gif";
import SubMenuC2000 from "../../../public/images/submenu_C2000.gif";

import SubMenuC1000E from "../../../public/images/submenu_C1000e.gif";
import SubMenuC2000E from "../../../public/images/submenu_C2000e.gif";

import ContactBanner from "../../../components/ContactBanner";
import Notice1 from "../../../public/images/notice_1.jpeg";

export default () => {
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
                  <Link href="/en/contact/notice">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/en/contact/notice">
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
                        <Link href="/en/contact/notice">
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
                        <Link href="/en/contact/contact">
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
                      <News>
                        <NewsInfo>
                          <Link href="/en/contact/post/1">
                            <a>
                              <NewsTitle>CEO's Message</NewsTitle>
                            </a>
                          </Link>
                          <NewsSubTitle>
                            J:ON is a company that tries to create the highest
                            value for all mothers under the motto, “Every
                            possible need for mothers and children.”
                          </NewsSubTitle>
                          <NewsAuthor>J:ON</NewsAuthor>
                          <NewsDate>2019. 11. 23</NewsDate>
                        </NewsInfo>
                        <NewsImg imgsrc={Notice1}>
                          <Link href="/en/contact/post/1">
                            <a>
                              <ImgLink />
                            </a>
                          </Link>
                        </NewsImg>
                      </News>
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
};

const NewsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
  flex-wrap: wrap;
`;

const News = styled.dd`
  height: auto;
  width: 100% !important;
  max-width: 700px !important;
  margin: auto;
  flex-direction: row;
  display: flex;
  margin-bottom: 48px;
`;

const NewsImg = styled.div`
  height: auto;
  width: 152px;
  flex: 0 0 auto;
  background-image: url("${props => props.imgsrc}");
  background-size: cover;
  background-position: center;
  border-radius:4px;
`;

const NewsInfo = styled.div`
  flex: 1 1 auto;
  width: 100%;
  ${props => props.theme.sansFont}
  padding-right:5px;
`;

const NewsCategory = styled.div`
  width: 100%;
  font-size: 15px;
  line-height: 18px;
  color: ${props => props.theme.greyColor};

  & div {
    height: 16px;
  }

  @media (max-width: 1080px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

const Tag = styled.li`
  display: inline-block;
  background-color: ${props => props.theme.verylightgreyColor};
  color: white;
  font-size: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 3px;
  ${props => props.theme.sansFont};

  &.pokernews {
    background-color: ${props => props.theme.pokerredColor};
  }

  &.domesticnews {
    background-color: rgb(57, 73, 171);
  }

  &.shopnews {
    background-color: rgb(80, 180, 255);
  }

  &.pokerinfo {
    background-color: rgb(18, 120, 116);
  }

  @media (max-width: 1080px) {
    font-size: 13px;
  }
`;

const NewsTitle = styled.h1`
  width: 100%;
  font-size: 22px;
  line-height: 32px;
  position: relative !important;
  text-align: left;
  font-weight: 600;
  visibility: visible !important;
  height: 32px !important;
  color: rgb(0, 0, 0);

  &:hover {
    color: #8baa00;
  }

  @media (max-width: 1080px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const NewsSubTitle = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  margin-top: 2px;
  text-align: left;
  color: rgb(96, 96, 96);

  overflow: hidden;
  box-orient: vertical;
  word-break: break-word;
  text-overflow: ellipsis;
  line-clamp: 2;

  display: box;
  display: -webkit-box;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  & div {
    height: 18px;
  }
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

const NewsDate = styled.div`
  margin-top: 2px;
  font-size: 15px;
  line-height: 18px;
  text-align: left;

  & div {
    height: 16px;
  }

  color: rgb(96, 96, 96);

  @media (max-width: 1080px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

const NewsHeadlineWrap = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: space-between;
  flex-direction: row;
`;

const NewsSeperator = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  border: 1px solid ${props => props.theme.verylightgreyColor};
`;

const NewsHeadline = styled.div`
  width: 48.5%;
  height: 100%;
`;

const NewsHeadlineImg = styled.div`
  width: 100%;
  height: 200px;
  display: block;
  background-color: ${props => props.theme.lightgreyColor};
  background-image: url("${props => props.imgsrc}");
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;

  @media (max-width:1080px){
    height: 150px;
  }
`;

const NewsPreLoading = styled.div`
  width: ${props => props.widthratio};
  background-color: ${props => props.theme.lightgreyColor};
  margin-top: 2px;
`;

const ImgLink = styled.div`
  width: 100%;
  height: 100%;
`;
