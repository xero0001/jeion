import React from "react";
import Link from "next/link";

import StyleM from "./styles/StyleM";

import CopyA0000 from "../public/images/copy_A0000.gif";
import CopyA1000 from "../public/images/copy_A1000.gif";
import CopyA2000 from "../public/images/copy_A2000.gif";
import CopyA3000 from "../public/images/copy_A3000.gif";
import CopyA4000 from "../public/images/copy_A4000.gif";
import CopyA5000 from "../public/images/copy_A5000.gif";
import CopyA6000 from "../public/images/copy_A6000.gif";

import CopyB0000 from "../public/images/copy_B0000.gif";
import CopyB1000 from "../public/images/copy_B1000.gif";

import CopyC0000 from "../public/images/copy_C0000.gif";
import CopyC1000 from "../public/images/copy_C1000.gif";
import CopyC2000 from "../public/images/copy_C2000.gif";

import CopyMap from "../public/images/copy_map.jpg";

import CopyT from "../public/images/copy_T.gif";
import CopyF from "../public/images/copy_F.gif";

import CopyLogo from "../public/images/copy_logo.gif";
import CopyCopyright from "../public/images/copy_copyright.gif";
import CopyAddress from "../public/images/copy_address.gif";

export default () => {
  return (
    <>
      <StyleM />
      <div id="Footer">
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
                      <Link href="/story/about">
                        <a title="Go to Our Story">
                          <img src={CopyA0000} alt="Our Story" />
                        </a>
                      </Link>
                    </dt>
                    <dd>
                      <Link href="/story/about">
                        <a title="Go to About J:on">
                          <img
                            src={CopyA1000}
                            width="60"
                            height="14"
                            alt="About J:on"
                          />
                        </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/story/vision">
                        <a title="Go to Our Vision">
                          <img src={CopyA2000} alt="Our Vision" />
                        </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/story/message">
                        <a title="Go to CEO's Message">
                          <img src={CopyA3000} alt="CEO's Message" />
                        </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/story/philosophy">
                        <a title="Go to Management Philosophy">
                          <img
                            src={CopyA4000}
                            width="134"
                            height="14"
                            alt="Management Philosophy"
                          />
                        </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/story/history">
                        <a title="Go to Our History">
                          <img
                            src={CopyA5000}
                            width="65"
                            height="14"
                            alt="Our History"
                          />
                        </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/story/location">
                        <a title="Go to Location">
                          <img
                            src={CopyA6000}
                            width="49"
                            height="14"
                            alt="Location"
                          />
                        </a>
                      </Link>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <Link href="/products/cookies">
                        <a title="Go to Our Products">
                          <img
                            src={CopyB0000}
                            width="100"
                            height="16"
                            alt="Our Products"
                          />
                        </a>
                      </Link>
                    </dt>
                    <dd>
                      <Link href="/products/cookies">
                        <a title="Go to Cookies">
                          <img
                            src={CopyB1000}
                            width="45"
                            height="15"
                            alt="Cookies"
                          />
                        </a>
                      </Link>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <Link href="/contact/notice">
                        <a title="Go to Contact Us">
                          <img
                            src={CopyC0000}
                            width="80"
                            height="16"
                            alt="Contact Us"
                          />
                        </a>
                      </Link>
                    </dt>
                    <dd>
                      <Link href="/contact/notice">
                        <a title="Go to Notice">
                          <img
                            src={CopyC1000}
                            width="37"
                            height="15"
                            alt="Notice"
                          />
                        </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/contact/contact">
                        <a title="Go to Contact Us">
                          <img
                            src={CopyC2000}
                            width="61"
                            height="15"
                            alt="Contact Us"
                          />
                        </a>
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
