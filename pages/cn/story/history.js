import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Link from "next/link";

import StyleS from "../../../components/cn/styles/StyleS";

import SubMenuA1000 from "../../../public/images/cn/submenu_A1000.gif";
import SubMenuA2000 from "../../../public/images/cn/submenu_A2000.gif";
import SubMenuA3000 from "../../../public/images/cn/submenu_A3000.gif";
import SubMenuA4000 from "../../../public/images/cn/submenu_A4000.gif";
import SubMenuA5000 from "../../../public/images/cn/submenu_A5000.gif";
import SubMenuA6000 from "../../../public/images/cn/submenu_A6000.gif";

import SubMenuA1000E from "../../../public/images/cn/submenu_A1000e.gif";
import SubMenuA2000E from "../../../public/images/cn/submenu_A2000e.gif";
import SubMenuA3000E from "../../../public/images/cn/submenu_A3000e.gif";
import SubMenuA4000E from "../../../public/images/cn/submenu_A4000e.gif";
import SubMenuA5000E from "../../../public/images/cn/submenu_A5000e.gif";
import SubMenuA6000E from "../../../public/images/cn/submenu_A6000e.gif";

import A50002015 from "../../../public/images/A5000_2015.jpg";
import A50002014 from "../../../public/images/A5000_2014.jpg";
import A50002013 from "../../../public/images/A5000_2013.jpg";

import StoryBanner from "../../../components/cn/StoryBanner";

export default () => {
  const [menu1, setMenu1] = React.useState(SubMenuA1000);
  const [menu2, setMenu2] = React.useState(SubMenuA2000);
  const [menu3, setMenu3] = React.useState(SubMenuA3000);
  const [menu4, setMenu4] = React.useState(SubMenuA4000);
  const [menu5, setMenu5] = React.useState(SubMenuA5000E);
  const [menu6, setMenu6] = React.useState(SubMenuA6000);

  return (
    <>
      <StyleS />
      <StoryBanner />
      <div id="MainWrapper">
        <div id="SubWrapper">
          <div id="MainContents">
            <div id="Contents">
              <div className="titleroad">
                <div className="Subtitle">
                  <h4>我们的故事</h4>
                </div>
                <h2>문서 위치</h2>
                <div className="Position">
                  <Link href="/">
                    <a title="메인으로 이동">Home</a>
                  </Link>{" "}
                  &gt;{" "}
                  <Link href="/cn/story/about">
                    <a title="Our Story 메뉴로 이동하기">我们的故事</a>
                  </Link>{" "}
                  &gt;
                  <a href="#Start" title="Our History 본문 바로가기">
                    {" "}
                    <em className="highlight"> 我们的发展史</em>
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
                      <li className="sidebar1 sidebarActive">
                        <Link href="/cn/story/about">
                          <a title="About J:on 메뉴로 이동">
                            <img
                              src={menu1}
                              onMouseEnter={() => {
                                setMenu1(SubMenuA1000E);
                              }}
                              onMouseOut={() => {
                                setMenu1(SubMenuA1000);
                              }}
                              alt="About J:on"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar2 rollout">
                        <Link href="/cn/story/vision">
                          <a title="Our Vision 메뉴로 이동">
                            <img
                              src={menu2}
                              onMouseEnter={() => {
                                setMenu2(SubMenuA2000E);
                              }}
                              onMouseOut={() => {
                                setMenu2(SubMenuA2000);
                              }}
                              alt="Our Vision"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar3 rollout">
                        <Link href="/cn/story/message">
                          <a title="CEO's Message 메뉴로 이동">
                            <img
                              src={menu3}
                              onMouseEnter={() => {
                                setMenu3(SubMenuA3000E);
                              }}
                              onMouseOut={() => {
                                setMenu3(SubMenuA3000);
                              }}
                              alt="CEO's Message"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar4 rollout">
                        <Link href="/cn/story/philosophy">
                          <a title="Management Philosophy 메뉴로 이동">
                            <img
                              src={menu4}
                              onMouseEnter={() => {
                                setMenu4(SubMenuA4000E);
                              }}
                              onMouseOut={() => {
                                setMenu4(SubMenuA4000);
                              }}
                              alt="Management Philosophy"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar5 rollout">
                        <Link href="/cn/story/history">
                          <a title="Our History 메뉴로 이동">
                            <img
                              src={menu5}
                              onMouseEnter={() => {
                                setMenu5(SubMenuA5000E);
                              }}
                              onMouseOut={() => {
                                setMenu5(SubMenuA5000E);
                              }}
                              alt="Our History"
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="sidebar6 rollout">
                        <Link href="/cn/story/location">
                          <a title="Location 메뉴로 이동">
                            <img
                              src={menu6}
                              onMouseEnter={() => {
                                setMenu6(SubMenuA6000E);
                              }}
                              onMouseOut={() => {
                                setMenu6(SubMenuA6000);
                              }}
                              alt="Location"
                            />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="contentsbox">
                  <ul className="A5000">
                    <li>
                      <dl>
                        <dt>
                          <img src={A50002015} alt="2015" />
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>2015年 01月</strong>{" "}
                              <span>
                                <p>登录成为韩国贸易协会会员公司</p>
                              </span>
                            </li>
                            <li>
                              <strong>2015年 02月</strong>
                              <span>
                                <p>开发研究红薯奶油夹心松饼干并申请专利</p>
                                <p>开始对中国出口 ABC曲奇（海苔味, 芝士味） </p>
                              </span>
                            </li>
                            <li>
                              <strong>2015年 04月</strong>{" "}
                              <span>
                                <p>被评为中小企业厅内需企业输出企业化企业</p>
                              </span>
                            </li>
                            <li>
                              <strong>2015年 08月</strong>{" "}
                              <span>
                                <p>参加 2015 K-Food Fair 青岛（办）</p>
                              </span>
                            </li>
                            <li>
                              <strong>2015年 09月</strong>{" "}
                              <span>
                                <p>
                                  获得新品牌 “Cheeki Monki” 全北大 LINC CI/BI
                                  开发竞演大会大奖
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>
                          <img src={A50002014} alt="2014" />
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>2014年 01月</strong>{" "}
                              <span>
                                <p>
                                  开始全北道立障碍人综合福利馆连接的定期赞助
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>2014年 02月</strong>{" "}
                              <span>
                                <p>
                                  发起全罗北道为地域素材活性化进行的R&amp;D研究
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>2014年 04月</strong>{" "}
                              <span>
                                <p>为改善乳糖症开发研究了5种牛奶糖</p>
                              </span>
                            </li>
                            <li>
                              <strong>2014年 08月</strong>{" "}
                              <span>
                                <p>以中国市场为目标研究开发的6种挂面成功出市</p>
                              </span>
                            </li>
                            <li>
                              <strong>2014年 10月</strong>{" "}
                              <span>
                                <p>
                                  利用覆盆子酒粕和桑葚酒粕开发制造出食用醋和食用醋饮料并申请专利
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>2014年 11月</strong>{" "}
                              <span>
                                <p>
                                  活用海苔, 芝士等素材完成开发了ABC系列曲奇饼干
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>2014年 12月</strong>{" "}
                              <span>
                                <p>被表彰为全罗北道小商工人希望中心优秀企业</p>
                                <p>
                                  在全罗北道高附加价值产业专家鉴定会上获得优秀奖：2种ABC曲奇
                                </p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li className="noline">
                      <dl>
                        <dt>
                          <img src={A50002013} alt="2013" />
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <strong>2013年 05月</strong>{" "}
                              <span>
                                <p>公室 创建（全州市 完山区 西谷5路）</p>
                              </span>
                            </li>
                            <li>
                              <strong>2013年 08月</strong>{" "}
                              <span>
                                <p>
                                  着手开发出口专用的活用人气原材料的机能性儿童曲奇新产品（柚子曲奇）
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>2013年 09月</strong>{" "}
                              <span>
                                <p>创立公司（9月11日, 株式会社 智益安)</p>
                                <p>贸易业 登录（韩国贸易协会)</p>
                                <p>柚子曲奇开始出口中国（9月13日)</p>
                                <p>
                                  登录成为全北大学校家族企业(全北大LINC产业团)
                                </p>
                              </span>
                            </li>
                            <li>
                              <strong>2013年 10月</strong>{" "}
                              <span>
                                <p>公司搬迁(10月 08日, 全州市德津区如意洞)</p>
                                <p>
                                  开始通过国际救助团体”goodneighbors”连接的贫困儿童进行定期赞助(缅甸)
                                </p>
                                <p>在中国2个地区（上海, 山东）进行推销宣传</p>
                              </span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                  </ul>{" "}
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
