import tw from "tailwind.macro";
import { Global, css } from "@emotion/core";

import MainBg1 from "../../../public/images/mainbg_01.jpg";

import Section1Bg1 from "../../../public/images/section1_bg1.jpg";
import Section1Bg2 from "../../../public/images/section1_bg2.jpg";
import Section1Bg3 from "../../../public/images/section1_bg3.jpg";
import Section1Bg4 from "../../../public/images/section1_bg4.jpg";

import Line from "../../../public/images/line.gif";

import BtnDot2 from "../../../public/images/btn_dot2.png";
import BtnArrow from "../../../public/images/btn_arrow.gif";

const StyleM = () => (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-size: 15px;
        // overflow-y:scroll;
        // overflow-x:hidden;
        font-family: "NanumSquare", "Noto Sans", sans-serif;
        line-height: 1.1;
      }

      div,
      dl,
      span {
        margin: 0px;
        padding: 0px;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
      }

      #sec_title {
        font-size: 30px;
        line-height: 38px;
        color: rgb(90, 80, 70);
        background-color: white;
      }
      #sec_title span {
        background-color: white;
        padding: 8px;
      }
      #snsbox {
        position: absolute;
        top: 0px;
        width: 100%;
      }
      #snssub {
        position: relative;
        width: 1000px;
        height: 100px;
        margin: 0 auto;
        text-align: right;
      }
      #snswrapper {
        position: absolute;
        justify-content: space-between;
        right: 0px;
        width: 84px;
        display: flex;
        margin-top: 6px;
      }
      #snswrapper #sns {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      #snswrapper #sns img {
        width: 100%;
        height: 100%;
      }
      #sns {
        position: relative;
        z-index: 100;
      }
      .ptr {
        cursor: pointer;
      }
      img {
        margin: 0;
        border: 0;
        vertical-align: top;
      }
      div,
      dl,
      span {
        margin: 0;
        padding: 0;
        border: 0;
      }
      form {
        margin: 0;
        padding: 0;
        border: 0;
      }
      ul,
      li,
      ol,
      dl,
      dt,
      dd,
      p,
      em {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      em {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 12px;
        font-style: normal;
        font-weight: bold;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      button {
        border: 0;
        padding: 0;
        background: transparent;
        cursor: pointer;
        overflow: visible;
      }
      input,
      select,
      option {
        vertical-align: middle;
      }
      label {
        cursor: pointer;
      }
      a:link {
        text-decoration: none;
        color: #606060;
      }
      a:visited {
        text-decoration: none;
        color: #606060;
      }
      a:active {
        text-decoration: none;
        color: #606060;
      }
      a:hover {
        text-decoration: none;
        color: #8baa00;
      }

      fieldset {
        border: solid 0 transparent;
        padding: 0;
        margin: 0;
      }
      legend {
        overflow: hidden;
        visibility: hidden;
        font-size: 0;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        position: absolute;
        font-size: 1em;
      }
      hr,
      h1,
      h2,
      caption {
        overflow: hidden;
        visibility: hidden;
        font-size: 0;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        position: absolute;
      }
      h3,
      h4,
      h5 {
        margin: 0;
        padding: 0;
        border: 0;
      }
      div.skipNav {
        overflow: hidden;
        visibility: hidden;
        font-size: 0;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        position: absolute;
      }
      #skipNav {
        overflow: hidden;
        visibility: hidden;
        font-size: 0;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        position: absolute;
      }
      .skipNav {
        overflow: hidden;
        visibility: hidden;
        font-size: 0;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        position: absolute;
      }

      .Skipul ul li {
        position: relative;
        float: left;
        padding: 0;
        margin: 0;
      }
      .skip {
        display: block;
        height: 1px;
        width: 1px;
        margin: 0 -1px -1px 0;
        padding: 0;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
      }
      .skip:hover,
      .skip:active,
      .skip:focus {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 5px 0;
        text-indent: 10px;
        font-weight: bold;
        font-size: 12px;
        color: #333;
        line-height: 1;
        text-decoration: none !important;
      }

      #main_subtitle {
        font-size: 18px;
        padding-bottom: 15px;
        color: #282828;
      }

      .main_padding {
        margin-top: 16px;
      }

      #menu_notice {
        font-size: 20px;
        color: rgb(100, 100, 100);
      }

      #Mainallbg {
        position: relative;
        float: left;
        width: 100%;
        text-align: center;
        z-index: 1;
      }
      #Mainallbg .container {
        position: relative;
        width: 1000px;
        margin: 0 auto;
      }

      #Mainallbg #Mainheader {
        position: relative;
        float: left;
        width: 100%;
        height: 100px;
        text-align: center;
        border-bottom: 1px solid #dfdfdf;
        z-index: 400;
      }
      #Mainallbg #Mainheader #headerbox {
        position: relative;
        width: 1000px;
        height: 100px;
        margin: 0 auto;
        text-align: left;
      }
      #Mainallbg #Mainheader #headerbox .logo {
        position: relative;
        width: auto;
        margin-top: 24px;
        z-index: 400;
        display: inline-block;
      }
      #Mainallbg #Mainheader #headerbox #language {
        position: absolute;
        right: 0;
        top: 37px;
        width: 136px;
        height: auto;
        z-index: 401;
      }
      #Mainallbg #Mainheader #headerbox #language dl {
        position: relative;
        float: left;
        width: 136px;
      }
      #Mainallbg #Mainheader #headerbox #language dl dt {
        position: relative;
        float: left;
        width: 136px;
        height: 29px;
      }
      #Mainallbg #Mainheader #headerbox #language dl dt span {
        position: relative;
        float: left;
        height: 17px;
        padding: 5px 0 0 12px;
      }
      #Mainallbg #Mainheader #headerbox #language dl dd {
        position: relative;
        float: left;
        width: 136px;
        overflow: hidden;
        transition: height 0.3s;
      }
      #Mainallbg #Mainheader #headerbox #language dl dd ul {
        position: relative;
        float: left;
        width: 134px;
        border-left: 1px solid #d6d6d6;
        border-right: 1px solid #dfdfdf;
      }
      #Mainallbg #Mainheader #headerbox #language dl dd ul li {
        position: relative;
        float: left;
        width: 134px;
        height: 26px;
        background-color: #fff;
        border-bottom: 1px solid #dfdfdf;
      }
      #Mainallbg #Mainheader #headerbox #language dl dd ul li span {
        position: relative;
        float: left;
        padding: 5px 0 5px 12px;
      }

      #Mainallbg #Mainheader #headerbox #language dl dd.show {
        height: 81px;
      }
      #Mainallbg #Mainheader #headerbox #language dl dd.noshow {
        height: 0px;
      }

      .gnb1 {
        height: 20px;
      }
      .gnb2 {
        height: 20px;
      }
      .gnb3 {
        height: 20px;
      }

      #Mainallbg #Mainheader #menulist {
        position: relative;
        float: left;
        width: 100%;
        height: 47px;
        text-align: center;
        margin-top: -60px;
      }
      #Mainallbg #Mainheader #menulist #Gnb {
        z-index: 120;
        width: 650px;
        height: 47px;
        margin: 0 auto;
        padding-left: 60px;
        letter-spacing: 0;
      }
      #Mainallbg #Mainheader #menulist #Gnb li {
        z-index: 10;
        float: left;
        width: auto;
        padding: 0 50px;
        border-right: 1px solid #dfdfdf;
      }
      #Mainallbg #Mainheader #menulist #Gnb li a {
        z-index: 10;
        font-size: 18px;
        color: #282828; /*font-family: 'Source Sans Pro', sans-serif; */
      }
      #Mainallbg #Mainheader #menulist #Gnb li a:hover {
        z-index: 10;
        color: #8baa00;
      }
      #Mainallbg #Mainheader #menulist #Gnb li:last-child {
        z-index: 10;
        border-right: 0;
      }
      #Mainallbg #Mainheader #menulist #Gnb li ul {
        z-index: 10;
        width: 1000px;
        margin: 0 auto;
        text-align: left;
      }
      #Mainallbg #Mainheader #menulist #Gnb li ul li {
        z-index: 10;
        margin: 0;
        border-right: 0;
        padding: 0;
        letter-spacing: 0;
      }

      #Mainallbg #Mainheader #menulist #Gnb .depth2 {
        position: relative;
        float: left;
        width: 260px;
        height: 250px;
        border-right: 1px solid #e7e7e7;
      }
      #Mainallbg #Mainheader #menulist #Gnb .depth2 ul {
        position: relative;
        float: left;
        width: 238px;
        margin-top: 25px;
      }
      #Mainallbg #Mainheader #menulist #Gnb .depth2 ul li {
        position: relative;
        float: left;
        width: 100%;
        padding: 8px 0;
        border-bottom: 1px dotted #e7e7e7;
      }
      #Mainallbg #Mainheader #menulist #Gnb .depth2 ul li:last-child {
        border-bottom: 0;
      }
      #Mainallbg #Mainheader #menulist #Gnb .depth2 ul li a {
        position: relative;
        float: left;
        width: 88%;
        padding-left: 16px;
        background: url(${BtnDot2}) left center no-repeat;
        font-size: 13px;
      }
      #Mainallbg #Mainheader #menulist #Gnb .depth2 ul li a:hover {
        position: relative;
        float: left;
        width: 83%;
        padding-right: 21px;
        background: url(${BtnDot2}) right center no-repeat;
        font-size: 13px;
        font-weight: normal;
      }
      #Mainallbg #Mainheader #menulist #Gnb .depth2 .gnbActive a {
        color: #8baa00;
        padding-right: 10px;
        background: url(${BtnDot2}) right center no-repeat;
      }

      #Mainallbg #Mainheader #menulist #Gnb .notice {
        position: relative;
        float: left;
        width: 375px;
        height: 250px;
        margin-right: 20px;
        border-left: 1px solid #e7e7e7;
        border-right: 1px solid #e7e7e7;
      }
      #Mainallbg #Mainheader #menulist #Gnb .notice dl {
        position: relative;
        width: 85%;
        margin: 35px auto;
      }
      #Mainallbg #Mainheader #menulist #Gnb .notice dl dt {
        position: relative;
        padding-bottom: 20px;
      }
      #Mainallbg #Mainheader #menulist #Gnb .notice dl dd dl {
        width: 100%;
        padding: 0;
        margin: 0;
        letter-spacing: 0;
      }
      #Mainallbg #Mainheader #menulist #Gnb .notice dl dd dl dt {
        padding-bottom: 12px;
      }
      #Mainallbg #Mainheader #menulist #Gnb .notice dl dd dl dt a {
        font-size: 14px;
        font-weight: bold;
      }
      #Mainallbg #Mainheader #menulist #Gnb .notice dl dd dl dd a {
        font-size: 13px;
        color: #606060;
        text-align: justify;
        line-height: 20px;
      }
      #Mainallbg #Mainheader #menulist #Gnb .notice dl dd dl dd a:hover {
        text-decoration: underline;
        color: #606060;
      }
      #Mainallbg #Mainheader #menulist #Gnb .notice .data {
        padding: 12px 0 0 0;
        color: #777;
        letter-spacing: 0;
      }

      #Mainallbg #Mainheader #menulist #Gnb .info {
        position: relative;
        float: right;
        width: 340px;
        height: 250px;
        text-align: center;
        border-right: 1px solid #e7e7e7;
      }
      #Mainallbg #Mainheader #menulist #Gnb .info img {
        border: 1px solid #e7e7e7;
        margin-top: 35px;
      }
      #Mainallbg #Mainheader #menulist #Gnb .info p {
        position: relative;
        width: 270px;
        margin: 0 auto;
        padding-top: 15px;
        text-align: left;
        line-height: 16px;
        font-size: 13px;
      }

      #Mainallbg #Mainheader #menulist .sub {
        display: none;
      }
      #Mainallbg #Mainheader #menulist .gnb1 .subbg {
        position: absolute;
        left: 0;
        top: 60px;
        width: 100%;
        height: 250px;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        background-color: #fff;
        opacity: 0.9;
        filter: alpha(opacity=90);
        -moz-opacity: 0.9;
        -khtml-opacity: 0.9;
        z-index: 200;
      }
      #Mainallbg #Mainheader #menulist .gnb2 .subbg {
        position: absolute;
        left: 0;
        top: 60px;
        width: 100%;
        height: 250px;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        background-color: #fff;
        opacity: 0.9;
        filter: alpha(opacity=90);
        -moz-opacity: 0.9;
        -khtml-opacity: 0.9;
        z-index: 200;
      }
      #Mainallbg #Mainheader #menulist .gnb3 .subbg {
        position: absolute;
        left: 0;
        top: 60px;
        width: 100%;
        height: 250px;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        background-color: #fff;
        opacity: 0.9;
        filter: alpha(opacity=90);
        -moz-opacity: 0.9;
        -khtml-opacity: 0.9;
        z-index: 200;
      }

      #Mainallbg #Mainheader #open_side {
        display: none;
      }
      #Mainallbg #Mainheader .btn_side {
        display: block;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: -1000em;
      }

      // 565 -> 386
      #Mainvisual {
        position: absolute;
        left: 0;
        top: 100px;
        width: 100%;
        height: 386px;
        text-align: center;
        z-index: 10;
      }
      #Mainvisual .elementbox {
        position: relative;
        width: 100%;
        margin: 0 auto;
        text-align: left;
      }
      #Mainvisual .elementbox .Mainbg {
        position: relative;
        float: left;
        width: 100%;
        height: 386px;
        z-index: 11;
      }
      #Mainvisual .elementbox .Mainbg .imgbox1 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 386px;
        background-position: center;
      }
      // #Mainvisual	.elementbox	.Mainbg	 .imgbox2					{ position:absolute;left:0; top:0; width:100%; height:386px; background:url(../img/main/mainbg_02.jpg) center top no-repeat;}
      // #Mainvisual	.elementbox	.Mainbg	 .imgbox3					{ position:absolute;left:0; top:0; width:100%; height:386px; background:url(../img/main/mainbg_03.jpg) center top no-repeat;}
      // #Mainvisual	.elementbox	.Mainbg	 .imgbox4					{ position:absolute;left:0; top:0; width:100%; height:386px; background:url(../img/main/mainbg_04.jpg) center top no-repeat;}

      #Mainvisual .elementbox .ctrl {
        position: relative;
        width: 900px;
        margin: 0 auto;
        text-align: center;
        z-index: 14;
      }
      #Mainvisual .elementbox .ctrl ul {
        position: absolute;
        left: 0;
        top: 290px;
        width: 450px;
        height: 67px;
        text-align: left;
      }
      #Mainvisual .elementbox .ctrl li {
        position: relative;
        float: left;
        margin-right: 11px;
        cursor: pointer;
      }

      #Mainvisual .elementbox .arrow {
        position: absolute;
        left: 0;
        top: 210px;
        width: 100%;
        text-align: center;
        z-index: 13;
      }
      #Mainvisual .elementbox .arrow .left {
        position: absolute;
        left: 0;
        top: 0;
        width: 51px;
        height: 123px;
      }
      #Mainvisual .elementbox .arrow .right {
        position: absolute;
        right: 0;
        top: 0;
        width: 51px;
        height: 123px;
      }

      #Mainvisual .elementbox .Maintext {
        position: absolute;
        left: 0;
        top: 65px;
        width: 100%;
        text-align: left;
        z-index: 15;
      }
      #Mainvisual .elementbox .Maintext ul {
        width: 90%;
        margin: auto;
        margin-top: 10px;
      }
      #Mainvisual .elementbox .Maintext ul li {
        float: left;
        width: 140px;
        height: 140px;
        border: 4px solid #fff;
        margin-right: 10px;
        border-radius: 100px;
        text-align: center;
        color: #fff;
      }
      #Mainvisual .elementbox .Maintext ul li strong {
        width: 80%;
        font-size: 20px;
        margin: 25px 0 7px 0;
        display: inline-block;
        border-bottom: 1px solid #eee;
        padding-bottom: 7px;
        text-shadow: 1px 1px 1px grey;
      }
      #Mainvisual .elementbox .Maintext ul li span {
        font-size: 15px;
        display: inline-block;
        padding: 0 15px;
        line-height: 16px;
        font-weight: 700;
        text-shadow: 1px 1px 1px grey;
      }
      #Mainvisual .elementbox .Maintext .title {
        width: 570px;
        text-align: center;
        color: white;
        font-size: 40px;
      }
      #Mainvisual .elementbox .Maintext .subTitle {
        width: 570px;
        text-align: center;
        color: white;
        font-size: 30px;
        margin-bottom: 10px;
      }

      #Mainvisual .elementbox .Maintext .titleWrap {
        width: 1000px;
        margin: auto;
      }

      #MainWrapper {
        width: 1000px;
        margin: 0 auto;
        text-align: left;
        z-index: 2;
      }
      #SubWrapper {
        float: left;
        width: 100%;
        z-index: 3;
      }

      #MainContents {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 390px;
        display: inline-block;
      }

      #MainContents #Section1 {
        width: 100%;
        margin: 7% 0 2% 0;
        display: inline-block;
      }
      #MainContents #Section1 dl dt {
        width: 100%;
        height: auto;
        margin-bottom: 7%;
        text-align: center;
        background: url(${Line}) left center repeat-x;
      }
      #MainContents #Section1 dl dd ul {
        position: relative;
        width: 100%;
        margin-bottom: 4%;
        display: inline-block;
      }
      #MainContents #Section1 dl dd ul li {
        float: left;
        width: 25%;
      }
      #MainContents #Section1 dl dd ul li dl {
        width: 80%;
        margin: 0 auto;
      }
      #MainContents #Section1 dl dd ul li dl dt {
        text-align: left;
        margin: 0;
        background: none;
      }
      #MainContents #Section1 dl dd ul li dl dt img {
        padding-bottom: 20px;
      }
      #MainContents #Section1 dl dd ul li dl dt span {
        display: none;
      }
      #MainContents #Section1 dl dd ul li dl dd {
        padding-bottom: 15px;
        color: #606060;
      }
      #MainContents #Section1 dl dd ul li dl dd span {
        display: none;
      }
      #MainContents #Section1 dl dd ul li .imgbox1 {
        height: 190px;
        background: url(${Section1Bg1}) top left no-repeat;
      }
      #MainContents #Section1 dl dd ul li .imgbox2 {
        height: 190px;
        background: url(${Section1Bg2}) top left no-repeat;
      }
      #MainContents #Section1 dl dd ul li .imgbox3 {
        height: 190px;
        background: url(${Section1Bg3}) top left no-repeat;
      }
      #MainContents #Section1 dl dd ul li .imgbox4 {
        height: 190px;
        background: url(${Section1Bg4}) top left no-repeat;
      }
      #MainContents #Section1 .lilast {
        float: right;
        margin: 0;
      }
      #MainContents #Section1 .more a {
        font-size: 11px;
        letter-spacing: 0;
        color: #000;
        font-weight: bold;
      }

      #MainContents #Section2 {
        position: relative;
        width: 100%;
        margin-top: 90px;
      }
      #MainContents #Section2 dl dt {
        width: 100%;
        height: auto;
        margin-bottom: 7%;
        text-align: center;
        background: url(${Line}) left center repeat-x;
      }
      #MainContents #Section2 dl dd ul li {
        float: left;
        width: 33.3333%;
        text-align: center;
      }
      #MainContents #Section2 dl dd ul li p {
        padding-bottom: 6%;
      }
      #MainContents #Section2 dl dd ul li p img {
        width: 90%;
      }
      #MainContents #Section2 dl dd ul li dl {
        width: 100%;
        text-align: center;
      }
      #MainContents #Section2 dl dd ul li dl dt {
        height: 30px;
        margin: 0;
        background: none;
      }
      #MainContents #Section2 dl dd ul li dl dt span {
        font-size: 19px;
      }
      #MainContents #Section2 .btn {
        font-size: 12px;
        letter-spacing: 0;
        color: #3d3d3d;
        font-weight: bold;
        border: 1px solid #ccc;
        padding: 1.5% 8% 1.5% 6%;
        margin-top: 1%;
        display: inline-block;
        background: url(${BtnArrow}) right center no-repeat;
      }

      #MainContents #Section3 {
        position: relative;
        float: left;
        width: 100%;
      }
      #MainContents #Section3 dl dt {
        width: 100%;
        height: auto;
        margin-bottom: 7%;
        text-align: center;
        background: url(${Line}) left center repeat-x;
        display: inline-block;
      }
      #MainContents #Section3 dl dd {
        position: relative;
        float: left;
        width: auto;
      }
      #MainContents #Section3 .banner {
        position: relative;
        width: 595px;
        height: 289px;
      }
      #MainContents #Section3 .banner li {
        position: absolute;
        right: 0;
        top: 0;
        width: 595px;
      }
      #MainContents #Section3 .banner li a {
        position: relative;
        float: left;
        z-index: 100;
      }
      #MainContents #Section3 .banner .ctrl {
        position: absolute;
        right: 15px;
        top: 20px;
        width: 60px;
      }
      #MainContents #Section3 .banner .ctrl button {
        position: relative;
        float: left;
        width: 20px;
        z-index: 101;
      }

      #MainContents #Section3 .Notice {
        position: relative;
        float: right;
        width: 350px;
      }
      #MainContents #Section3 .Notice p {
        position: absolute;
        right: 0;
        top: 0;
        width: 22px;
        height: 21px;
      }
      #MainContents #Section3 .Notice dl {
        position: relative;
        width: 100%;
      }
      #MainContents #Section3 .Notice dl dt {
        position: relative;
        width: 100%;
        text-align: left;
        margin: 0;
        padding-bottom: 4%;
        background: none;
      }
      #MainContents #Section3 .Notice dl dd {
        position: relative;
        width: 100%;
      }
      #MainContents #Section3 .Notice dl dd ul {
        position: relative;
        float: left;
        width: 100%;
      }
      #MainContents #Section3 .Notice dl dd ul li {
        position: relative;
        float: left;
        width: 100%;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 15px;
        padding-bottom: 15px;
      }
      #MainContents #Section3 .Notice dl dd ul li dl dt {
        padding-bottom: 2%;
      }
      #MainContents #Section3 .Notice dl dd ul li dl dt a {
        font-weight: bold;
        color: #736759;
        margin-bottom: 0;
        padding: 0;
      }
      #MainContents #Section3 .Notice dl dd ul li dl dd a {
        font-size: 13px;
      }
      #MainContents #Section3 .Notice .data {
        font-size: 13px;
        padding: 10px 0 0 0;
        color: #999;
        letter-spacing: 0;
      }
      #MainContents #Section3 .Notice .noline {
        border-bottom: 0;
      }

      #Footer {
        position: relative;
        float: left;
        width: 100%;
        height: 350px;
        text-align: center;
        margin-top: 80px;
        background-color: #2a2a2a;
      }
      #Footer.cn {
        background-color: #2a2a2a;
      }
      #Footer #Copyright {
        position: relative;
        width: 1000px;
        margin: 0 auto;
        text-align: left;
      }
      #Footer #Copyright .copylogo {
        position: relative;
        float: left;
        margin: 15px 20px 0 0;
      }
      #Footer #Copyright .copyrights1 {
        position: relative;
        float: left;
        margin-top: 20px;
      }
      #Footer #Copyright .copyrights2 {
        display: none;
      }

      #Footer #Copyright .copybox {
        position: relative;
        width: 1000px;
        height: 210px;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
        margin-top: 50px;
      }
      #Footer #Copyright .copybox .bottommenu {
        position: relative;
        float: left;
        width: 470px;
        height: 148px;
        margin-top: 35px;
        border-right: 1px solid #333;
      }
      #Footer #Copyright .copybox .bottommenu ul {
        position: relative;
        float: left;
        width: 100%;
      }
      #Footer #Copyright .copybox .bottommenu ul li {
        position: relative;
        float: left;
        margin-right: 40px;
      }
      #Footer #Copyright .copybox .bottommenu ul li dl dt {
        padding-bottom: 15px;
      }
      #Footer #Copyright .copybox .bottommenu ul li dl dt a {
        font-size: 14px;
        font-weight: 900;
        color: rgb(120, 120, 120);
      }
      #Footer #Copyright .copybox .bottommenu ul li dl dd {
        margin-bottom: 7px;
        line-height: 0;
      }
      #Footer #Copyright .copybox .bottommenu ul li dl dd a {
        font-size: 13px;
        line-height: 15px;
        font-weight: 700;
      }
      #Footer #Copyright .copybox .bottommenu ul li dl dd a:hover {
        color: rgb(96, 96, 96);
      }
      #Footer #Copyright .copybox .bottommap {
        position: relative;
        float: right;
        width: 490px;
        height: 148px;
        margin-top: 35px;
      }
      #Footer #Copyright .copybox .bottommap .ad1 {
        position: relative;
        float: left;
        margin-top: 10px;
      }
      #Footer #Copyright .copybox .bottommap .ad2 {
        display: none;
      }
      #Footer #Copyright .Btnsns {
        position: absolute;
        right: 0;
        top: -30px;
        width: 84px;
        height: 21px;
        text-align: right;
      }
      #Footer #Copyright .Btnsns li {
        position: relative;
        float: right;
        margin-left: 7px;
      }

      @media all and (max-width: 800px) {
        .mask {
          display: block;
          width: 0px;
        }
        .mask.show {
          display: block;
        }
        .mask #open_side {
          width: 0%;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0);
        }
        .mask.show #open_side {
          width: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          transition: all ease 0.2s;
        }
        #open_side .gnb1,
        #open_side .gnb2,
        #open_side .gnb3 {
          min-height: 40px;
          height: auto;
        }
        .mobsub {
          color: #ccc;
          display: inline-block;
          padding: 10px 15px 10px 10px;
          width: 90%;
          font-size: 14px;
          line-height: 20px;
          transition: all ease 0.2s;
        }
        .mobsub.active {
          background-color: rgb(181, 211, 77);
          color: white;
        }
        .gnbActive .sub {
          display: block;
          height: 0px;
          overflow: hidden;
          transition: all ease 0.2s;
        }
        .gnbActive.gnb1 .sub.active {
          display: block;
          height: 209px;
        }
        .gnbActive.gnb2 .sub.active {
          display: block;
          height: 174px;
        }
        .gnbActive.gnb3 .sub.active {
          display: block;
          height: 69px;
        }

        .titleWrap {
          display: none;
        }
        #snsbox {
          display: none;
        }

        #sec_title {
          font-size: 20px;
          line-height: 24px;
        }

        .Btnsns img {
          width: 20px;
        }

        #Mainallbg {
          width: 100%;
          margin: 0 auto;
        }
        #Mainallbg .container {
          position: relative;
          width: 450px;
          margin: 0 auto;
        }
        #Mainallbg #Mainheader {
          width: 100%;
          height: 55px;
          border: 0;
        }
        #Mainallbg #Mainheader #headerbox {
          width: 100%;
          height: 55px;
          margin: 0 auto;
          text-align: center;
          display: inline-block;
        }
        #Mainallbg #Mainheader #headerbox .logo {
          width: auto;
          margin-top: 12px;
          text-align: center;
        }
        #Mainallbg #Mainheader #headerbox .logo img {
          width: 60%;
          height: auto;
        }
        #Mainallbg #Mainheader #headerbox .Sitemap {
          display: none;
        }
        #Mainallbg #Mainheader #menulist {
          display: none;
        }
        #Mainallbg #Mainheader #headerbox #language {
          display: none;
        }

        .btn_side {
          position: absolute;
          top: 0px;
          right: 0;
          width: 53px;
          height: 51px;
          font-size: 0;
          line-height: 0;
          display: block;
          z-index: 5;
        }
        .btn_side i {
          border-top: 8px double #666;
          border-bottom: 8px double #666;
          height: 2px;
          display: block;
          width: 23px;
          margin: 20px 0 0 15px;
        }

        #open_side {
          display: block;
          overflow-y: hidden;
          height: 100%;
          width: 100%;
          clear: both;
          position: fixed;
          z-index: 500;
          top: 0px;
          background: url(../img/open_side_bg.png) repeat;
        }
        #open_side .side_gnb {
          position: absolute;
          height: 900px;
          width: 250px;
          background: #2e2f31;
          padding-top: 50px;
        }
        #open_side .side_gnb .btn_side {
          position: absolute;
          top: 5px;
          left: 210px;
          padding: 10px;
          width: 18px;
          height: 18px;
        }
        #open_side .side_gnb ul li {
          border-bottom: 1px dotted rgba(255, 255, 255, 0.2);
        }
        #open_side .side_gnb ul li a {
          color: #ccc;
          display: inline-block;
          padding: 10px 15px 10px 10px;
          width: 90%;
          font-size: 14px;
          background: url(../img/open_arrow.png) no-repeat right 22px;
        }
        #open_side .side_gnb ul li div ul {
          background: #222;
        }
        #open_side .side_gnb ul li div ul li {
          border-bottom: 1px solid #343434;
        }
        #open_side .side_gnb ul .gnbActive > a {
          background: #b5d34d url(../img/close_arrow.png) no-repeat right 20px;
          color: #fff;
        }
        #open_side .side_gnb ul li div ul li:last-child a {
          border: 0;
        }
        #open_side .side_gnb ul li div ul li a {
          color: #888;
          font-size: 13px;
          background: none;
        }
        #open_side .side_gnb ul .gnbActive div ul .gnbActive > a {
          background: none;
          color: #b5d34d;
        }
        #open_side .m_topmenu {
        }
        #open_side .m_topmenu a {
          box-sizing: border-box;
          background: #222 url(../img/line.jpg) no-repeat right center;
          display: inline-block;
          color: #ccc;
          line-height: 40px;
          float: left;
          text-align: center;
          font-size: 11px;
          letter-spacing: 0;
        }
        #open_side .m_topmenu span {
          box-sizing: border-box;
          background: #222 url(../img/line.jpg) no-repeat right center;
          display: inline-block;
          color: #ccc;
          line-height: 40px;
          float: left;
          text-align: center;
          font-size: 11px;
          letter-spacing: 0;
        }
        #open_side .m_topmenu a:first-of-type {
          width: 30%;
        }
        #open_side .m_topmenu a:nth-of-type(2) {
          width: 30%;
        }
        #open_side .m_topmenu a:last-child {
          width: 30%;
          background: #222;
        }
        #open_side .m_topmenu span {
          width: 40%;
          background: #222;
          height: 40px;
        }

        #Mainallbg #Mainheader #open_side {
          display: block;
        }

        #MainWrapper {
          width: 100%;
          text-align: left;
        }
        #SubWrapper {
          width: 100%;
        }

        #Mainvisual {
          top: 55px;
          height: 150px;
        }
        #Mainvisual .elementbox {
          height: 150px;
        }
        #Mainvisual .elementbox .Mainbg {
          height: 200px;
        }
        #Mainvisual .elementbox .Mainbg .imgbox1 {
          height: 200px;
          background: url(${MainBg1}) center top no-repeat;
          background-size: cover;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
        }
        // #Mainvisual	.elementbox	.Mainbg	 .imgbox2							{ height:200px; background:url(../img/main/mainbg_02.jpg) center top no-repeat; background-size:cover; -webkit-background-size: cover;  -moz-background-size: cover; -o-background-size: cover;  background-size: cover;}
        // #Mainvisual	.elementbox	.Mainbg	 .imgbox3							{ height:200px; background:url(../img/main/mainbg_03.jpg) center top no-repeat;background-size:cover; -webkit-background-size: cover;  -moz-background-size: cover; -o-background-size: cover;  background-size: cover;}
        // #Mainvisual	.elementbox	.Mainbg	 .imgbox4							{ height:200px; background:url(../img/main/mainbg_04.jpg) center top no-repeat;background-size:cover; -webkit-background-size: cover;  -moz-background-size: cover; -o-background-size: cover;  background-size: cover;}
        #Mainvisual .elementbox .ctrl {
          display: none;
        }
        #Mainvisual .elementbox .arrow {
          display: none;
        }
        #Mainvisual .elementbox .Maintext {
          top: 20%;
        }

        #Mainvisual .elementbox .Maintext ul li {
          float: left;
          width: 110px;
          height: 110px;
          margin-right: 10px;
        }
        #Mainvisual .elementbox .Maintext ul li strong {
          font-size: 16px;
          margin: 20px 0 10px 0;
          padding-bottom: 7px;
        }
        #Mainvisual .elementbox .Maintext ul li span {
          font-size: 12px;
          line-height: 15px;
        }

        #MainContents {
          width: 100%;
          margin: 150px 0 0 0;
        }

        #MainContents #Section1 dl dt img {
          width: 35%;
          height: auto;
        }
        #MainContents #Section1 dl dd ul li dl dt img {
          display: none;
        }
        #MainContents #Section1 dl dd ul li dl dt span {
          display: block;
          font-size: 16px;
          line-height: 20px;
        }
        #MainContents #Section1 dl dd ul li dl dd {
          font-size: 13px;
        }
        #MainContents #Section1 dl dd ul li dl dd span {
          display: block;
          margin-top: 17%;
        }
        #MainContents #Section1 dl dd ul li dl dd br {
          display: none;
        }
        #MainContents #Section1 dl dd ul li .imgbox1,
        #MainContents #Section1 dl dd ul li .imgbox2,
        #MainContents #Section1 dl dd ul li .imgbox3,
        #MainContents #Section1 dl dd ul li .imgbox4 {
          height: 130px;
          background-size: 100% auto;
        }

        #MainContents #Section2 dl dt img {
          width: 46%;
          height: auto;
        }
        #MainContents #Section2 dl dd ul li p img {
          width: 90%;
          height: auto;
        }
        #MainContents #Section2 dl dd ul li dl dt img {
          display: none;
        }
        #MainContents #Section2 dl dd ul li dl dt span {
          display: block;
          font-size: 16px;
          line-height: 20px;
        }
        #MainContents #Section2 .btn {
          font-size: 11px;
          background: none;
          padding: 1.5% 6%;
        }

        #MainContents #Section3 dl dt img {
          width: 25%;
          height: auto;
        }
        #MainContents #Section3 dl dd {
          position: relative;
          float: left;
          width: 100%;
        }
        #MainContents #Section3 .Notice {
          display: none;
        }
        #MainContents #Section3 .banner {
          position: relative;
          float: left;
          width: 96%;
          margin: 0 2% 8% 2%;
          height: auto;
        }
        #MainContents #Section3 .banner li {
          position: relative;
          float: left;
          width: 100%;
          height: auto;
        }
        #MainContents #Section3 .banner li a,
        img {
          width: 100%;
          height: auto;
        }

        .titleroad {
          height: 40px;
          padding: 15px 0;
        }
        .titleroad .Subtitle {
          width: auto;
          height: 25px;
          font-size: 20px;
          letter-spacing: 0;
        }
        .titleroad .Position a {
          font-size: 12px;
        }
        .titleroad .Position em {
          font-size: 11px;
        }

        #Start {
          position: relative;
          float: left;
          width: 100%;
        }
        #Start .contentsbox {
          width: 100%;
          font-size: 13px;
          margin-top: 30px;
        }
        #Start #subleft {
          display: none;
        }

        #Footer {
          height: 120px;
          margin-top: 0;
        }
        #Footer #Copyright {
          width: 95%;
          margin: 0 auto;
        }
        #Footer #Copyright .copylogo {
          position: absolute;
          top: -48px;
          left: 0;
        }
        #Footer #Copyright .copyrights1 {
          display: none;
        }
        #Footer #Copyright .copyrights2 {
          position: absolute;
          top: 40px;
          left: 0;
          margin-top: 0;
          font-size: 12px;
          color: #646464;
          letter-spacing: 0;
          display: block;
        }
        #Footer #Copyright .copybox {
          width: 100%;
          height: auto;
          margin-top: 45px;
          border-bottom: 0;
        }
        #Footer #Copyright .copybox .bottommenu {
          width: 100%;
          height: 0px;
          margin-top: 0;
          border-right: 0;
        }
        #Footer #Copyright .copybox .bottommenu ul {
          display: none;
        }
        #Footer #Copyright .copybox .bottommap {
          width: 100%;
          height: auto;
          margin-top: 10px;
        }
        #Footer #Copyright .copybox .bottommap p {
          display: none;
        }
        #Footer #Copyright .copybox .bottommap .ad1 {
          display: none;
        }
        #Footer #Copyright .copybox .bottommap .ad2 {
          margin-top: 0;
          font-size: 12px;
          color: #646464;
          letter-spacing: 0;
          display: block;
          font-style: normal;
        }
        #Footer #Copyright .copybox .bottommap .ad2 span {
          font-size: 11px;
          color: #8b8b8b;
        }
      }

      @media all and (max-width: 400px) {
        #snsbox {
          display: none;
        }
        .btn_side i {
          margin: 15px 0 0 10px;
        }
        #Mainallbg #Mainheader {
          height: 40px;
        }
        #Mainallbg #Mainheader #headerbox {
          height: 40px;
        }
        #Mainallbg #Mainheader #headerbox .logo {
          width: auto;
          margin-top: 10px;
        }
        #Mainallbg #Mainheader #headerbox .logo img {
          width: 48%;
          height: auto;
        }

        #Mainvisual {
          top: 45px;
          height: 150px;
        }
        #Mainvisual .elementbox {
          height: 150px;
        }
        #Mainvisual .elementbox .Mainbg {
          height: 150px;
        }
        #Mainvisual .elementbox .Mainbg .imgbox1 {
          height: 150px;
        }
        #Mainvisual .elementbox .Mainbg .imgbox2 {
          height: 150px;
        }
        #Mainvisual .elementbox .Mainbg .imgbox3 {
          height: 150px;
        }
        #Mainvisual .elementbox .Mainbg .imgbox4 {
          height: 150px;
        }
        #Mainvisual .elementbox .Maintext {
          display: none;
        }

        #MainContents {
          width: 100%;
          margin: 100px 0 0 0;
        }
        .titleroad {
          height: 30px;
          padding: 15px 0 0 0;
          margin-top: 20px;
        }
        .titleroad .Subtitle {
          position: relative;
          float: left;
          width: 100%;
          height: 18px;
          font-size: 16px;
        }
        .titleroad .Position {
          position: relative;
          float: left;
          width: 100%;
          clear: both;
          margin-left: 5px;
        }

        #Footer {
          height: 135px;
          margin-top: 40px;
        }
        #Footer #Copyright .copyrights2 {
          top: 57px;
          font-size: 11px;
        }
        #Footer #Copyright .copybox .bottommap .ad2 {
          font-size: 11px;
        }
        #Footer #Copyright .copybox .bottommap .ad2 span {
          font-size: 10px;
        }

        #MainContents #Section1 dl dt img {
          width: 45%;
          height: auto;
        }
        #MainContents #Section1 dl dd ul li {
          float: left;
          width: 50%;
        }
        #MainContents #Section1 dl dd ul li:nth-of-type(1),
        #MainContents #Section1 dl dd ul li:nth-of-type(2) {
          margin-bottom: 15px;
          min-height: 215px;
        }
        #MainContents #Section1 dl dd ul li:nth-of-type(3) dt {
          margin-bottom: 10px;
        }
        #MainContents #Section1 dl dd ul li p {
          width: 80%;
          margin: 0 auto;
        }
        #MainContents #Section1 dl dd ul li dl dt span {
          font-size: 14px;
          line-height: 16px;
        }
        #MainContents #Section1 dl dd ul li dl dd {
          font-size: 12px;
          padding-bottom: 10px;
        }
        #MainContents #Section1 dl dd ul li dl dd span {
          display: block;
          margin-top: 7%;
        }
        #MainContents #Section1 dl dd ul li .imgbox1,
        #MainContents #Section1 dl dd ul li .imgbox2,
        #MainContents #Section1 dl dd ul li .imgbox3,
        #MainContents #Section1 dl dd ul li .imgbox4 {
          height: 100px;
          background-size: 85% auto;
        }
        #MainContents #Section1 .more a {
          font-size: 10px;
        }

        #MainContents #Section2 dl dt img {
          width: 58%;
          height: auto;
        }
        #MainContents #Section2 dl dd ul li dl dt span {
          display: block;
          font-size: 14px;
        }
        #MainContents #Section2 dl dd ul li dl dd img {
          width: 90px;
          height: 25px;
        }

        #MainContents #Section3 dl dt img {
          width: 32%;
          height: auto;
        }
        #MainContents #Section3 .banner {
          margin: 0 2% 0 2%;
        }
      }
    `}
  />
);

export default StyleM;
