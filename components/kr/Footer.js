import React from "react";
import Link from "next/link";

import StyleM from "./styles/StyleM";

import CopyA0000 from "../../public/images/copy_A0000.gif";
import CopyA1000 from "../../public/images/copy_A1000.gif";
import CopyA2000 from "../../public/images/copy_A2000.gif";
import CopyA3000 from "../../public/images/copy_A3000.gif";
import CopyA4000 from "../../public/images/copy_A4000.gif";
import CopyA5000 from "../../public/images/copy_A5000.gif";
import CopyA6000 from "../../public/images/copy_A6000.gif";

import CopyB0000 from "../../public/images/copy_B0000.gif";
import CopyB1000 from "../../public/images/copy_B1000.gif";

import CopyC0000 from "../../public/images/copy_C0000.gif";
import CopyC1000 from "../../public/images/copy_C1000.gif";
import CopyC2000 from "../../public/images/copy_C2000.gif";

import CopyMap from "../../public/images/copy_map.jpg";

import CopyT from "../../public/images/copy_T.gif";
import CopyF from "../../public/images/copy_F.gif";

import CopyLogo from "../../public/images/copy_logo.gif";
import CopyCopyright from "../../public/images/copy_copyright.gif";
import CopyAddress from "../../public/images/copy_address.gif";

export default () => {
  return (
    <>
      <StyleM />
      <div id="Footer" className="cn">
        <div id="Copyright">
          <h2>SNS LINK</h2>
          <ul className="Btnsns">
            <li>
              <a href="#" title="">
                <img src={CopyF} width="21" height="21" alt="" />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <img src={CopyT} width="21" height="21" alt="" />
              </a>
            </li>
          </ul>

          <div className="copybox">
            <div className="bottommenu">
              <h2>MENU</h2>
              <ul>
                <li>
                  <dl>
                    <dt>
                      <Link href="/kr/story/about">
                        <a title="Go to Our Story">기업소개 </a>
                      </Link>
                    </dt>
                    <dd>
                      <Link href="/kr/story/about">
                        <a title="Go to About J:on">제이온 소개</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/kr/story/vision">
                        <a title="Go to Our Vision">비전</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/kr/story/message">
                        <a title="Go to CEO's Message">CEO인사말 </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/kr/story/philosophy">
                        <a title="Go to Management Philosophy">경영이념 </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/kr/story/history">
                        <a title="Go to Our History">회사연혁 </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/kr/story/location">
                        <a title="Go to Location">찾아오시는길 </a>
                      </Link>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <Link href="/kr/products/noodles">
                        <a title="Go to Our Products">제품소개 </a>
                      </Link>
                    </dt>
                    <dd>
                      <Link href="/kr/products/noodles">
                        <a title="Go to Cookies">유아국수 </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/kr/products/yogurt">
                        <a title="Go to Cookies">요거트큐브 </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/kr/products/babyfood">
                        <a title="Go to Cookies">쌀이유식 </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/kr/products/kimcook">
                        <a title="Go to Cookies">김쿡 </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/kr/products/pasta">
                        <a title="Go to Cookies">쌀파스타 </a>
                      </Link>
                      
                    </dd>
                    <dd>
                      <Link href="/kr/products/bagelschip">
                        <a title="Go to Cookies">베이글칩 </a>
                      </Link>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <Link href="/kr/contact/notice">
                        <a title="Go to Contact Us">고객문의 </a>
                      </Link>
                    </dt>
                    <dd>
                      <Link href="/kr/contact/notice">
                        <a title="Go to Notice">공지사항 </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/kr/contact/contact">
                        <a title="Go to Contact Us">고객문의 </a>
                      </Link>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
            <div className="bottommap">
              <h2>Rough Map</h2>
              <p>
                <img src={CopyMap} width="486" height="107" alt="Rough Map" />
              </p>

              <h2>Address &amp; Contact Point</h2>
              <address className="ad1">
                <img
                  src={CopyAddress}
                  alt="Address. 945-6 Girin-Daero, Deokjin-gu, Jeonju-si, Jeollabuk-do, 561-330, S.Korea   Tel.  +82-63-278-3200   Fax. +82-63-278-3244"
                />
              </address>
              <address className="ad2">
                <span>ADDRESS.</span> 945-6 GIRIN-DAERO, DEOKJIN-GU, JEONJU-SI,
                JEOLLABUK-DO, 561-330, S.KOREA <span>TEL.</span> +82-63-278-3200{" "}
                <span>FAX.</span> +82-63-278-3244
              </address>
            </div>
          </div>

          <h2>LOGO</h2>
          <p className="copylogo">
            <a href="#" title=" 페이지로 이동">
              <img src={CopyLogo} alt="JEION LOGO" />
            </a>
          </p>

          <h2>COPYRIGHT</h2>
          <p className="copyrights1">
            <img
              src={CopyCopyright}
              alt="Copyright@2014 jeion. All right reserved."
            />
          </p>
          <p className="copyrights2">
            COPYRIGHT@2014 JEION. ALL RIGHT RESERVED.
          </p>
        </div>
      </div>
    </>
  );
};
