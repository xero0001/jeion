import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/cn/styles/StyleS";

import SubMenuC1000 from "../../../public/images/cn/submenu_C1000.gif";
import SubMenuC2000 from "../../../public/images/cn/submenu_C2000.gif";

import SubMenuC1000E from "../../../public/images/cn/submenu_C1000e.gif";
import SubMenuC2000E from "../../../public/images/cn/submenu_C2000e.gif";

import ContactBanner from "../../../components/cn/ContactBanner";

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
                  <h4>联系我们</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/cn">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/cn/contact/contact">
                    <a title="Contact Us 메뉴로 이동하기">联系我们</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="Notice 본문 바로가기">
                    {" "}
                    <em className="highlight">公告事项</em>
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
                        <Link href="/cn/contact/notice">
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
                        <Link href="/cn/contact/contact">
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

                <div className="contentsbox"></div>
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
