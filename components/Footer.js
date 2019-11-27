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
                        <a title="Go to Our Story">OUR STORY</a>
                      </Link>
                    </dt>
                    <dd>
                      <Link href="/story/about">
                        <a title="Go to About J:on">About J:on</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/story/vision">
                        <a title="Go to Our Vision">Our Vision</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/story/message">
                        <a title="Go to CEO's Message">CEO's Message</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/story/philosophy">
                        <a title="Go to Management Philosophy">
                          Management Philosophy
                        </a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/story/history">
                        <a title="Go to Our History">Our History</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/story/location">
                        <a title="Go to Location">Location</a>
                      </Link>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <Link href="/products/noodles">
                        <a title="Go to Our Products">OUR PRODUCT</a>
                      </Link>
                    </dt>
                    <dd>
                      <Link href="/products/noodles">
                        <a title="Go to Cookies">Baby Noodles</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/products/yogurt">
                        <a title="Go to Cookies">Yogurt Cubes</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/products/babyfood">
                        <a title="Go to Cookies">Rice Cereal</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/products/kimcook">
                        <a title="Go to Cookies">Seaweed Cook</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/products/bagelschip">
                        <a title="Go to Cookies">Bagel Chip</a>
                      </Link>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <Link href="/contact/notice">
                        <a title="Go to Contact Us">CONTACT US</a>
                      </Link>
                    </dt>
                    <dd>
                      <Link href="/contact/notice">
                        <a title="Go to Notice">Notice</a>
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/contact/contact">
                        <a title="Go to Contact Us">Contact Us</a>
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
