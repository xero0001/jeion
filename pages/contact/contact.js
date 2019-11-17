import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../components/styles/StyleS";

import SubMenuC1000 from "../../public/images/submenu_C1000.gif";
import SubMenuC2000 from "../../public/images/submenu_C2000.gif";

import SubMenuC1000E from "../../public/images/submenu_C1000e.gif";
import SubMenuC2000E from "../../public/images/submenu_C2000e.gif";

import ContactBanner from "../../components/ContactBanner";

export default () => {
  const [menu1, setMenu1] = React.useState(SubMenuC1000);
  const [menu2, setMenu2] = React.useState(SubMenuC2000E);

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
                  <h4>Contact Us</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/contact/notice">
                    <a title="Contact Us 메뉴로 이동하기">Contact Us</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="Contact Us  본문 바로가기">
                    {" "}
                    <em className="highlight">Contact Us </em>
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
                        <Link href="/contact/notice">
                          <a title="Notice 메뉴로 이동">
                            <img
                              src={menu1}
                              onMouseEnter={() => {
                                setMenu1(SubMenuC1000E);
                              }}
                              onMouseOut={() => {
                                setMenu1(SubMenuC1000);
                              }}
                              alt="Notice"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar2 sidebarActive">
                        <Link href="/contact/contact">
                          <a title="Contact Us  메뉴로 이동">
                            <img
                              src={menu2}
                              onMouseEnter={() => {
                                setMenu2(SubMenuC2000E);
                              }}
                              onMouseOut={() => {
                                setMenu2(SubMenuC2000E);
                              }}
                              alt="Contact Us "
                            />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="contentsbox">
                  <div className="contactus">
                    <form
                      action="skin/board/contact_us/write.php"
                      method="post"
                      enctype="multipart/form-data"
                    >
                      <fieldset>
                        <legend>Contact Us</legend>
                        <ul>
                          <li>
                            <label for="f1">Company Name</label>
                            <span>
                              <input
                                type="text"
                                name="f1"
                                id="f1"
                                value=""
                                className="input_st1"
                              />
                            </span>
                          </li>
                          <li>
                            <label for="f2">E-mail</label>
                            <span>
                              <input
                                type="text"
                                name="f2"
                                id="f2"
                                value=""
                                className="input_st1"
                              />
                            </span>
                          </li>
                          <li>
                            <label for="subject">Subject</label>
                            <span>
                              <input
                                type="text"
                                name="subject"
                                id="subject"
                                value=""
                                className="input_st2"
                              />
                            </span>
                          </li>
                          <li className="memo">
                            <label for="memo">Message</label>
                            <span>
                              <textarea name="memo" id="memo"></textarea>
                            </span>
                          </li>
                          <li>
                            <label for="sfile1">File #1</label>
                            <span>
                              <input
                                type="file"
                                accept="gif,png"
                                name="sfile[]"
                                id="sfile1"
                              />
                            </span>
                          </li>
                          <li>
                            <label for="sfile2">File #2</label>
                            <span>
                              <input
                                type="file"
                                accept="gif,png"
                                name="sfile[]"
                                id="sfile2"
                              />
                            </span>
                          </li>
                        </ul>
                      </fieldset>

                      <div className="btn_st">
                        <input type="submit" value="CONFIRM" title="CONFIRM" />
                      </div>

                      <input
                        type="hidden"
                        name="backUrl"
                        value="../../../inner.php?sMenu=C2000"
                      />
                      <input
                        type="hidden"
                        name="errorUrl"
                        value="../../../inner.php?sMenu=C2000"
                      />
                      <input
                        type="hidden"
                        name="sm"
                        value="MDk6NTE6Mzggc01lbnU9QzIwMDA="
                      />
                    </form>
                  </div>{" "}
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
