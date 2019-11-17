import tw from "tailwind.macro";
import { Global, css } from "@emotion/core";

import Line from "../../../public/images/line.gif";
import SubImgC0000 from "../../../public/images/subimg_C0000.jpg";
import SubMenuBg from "../../../public/images/submenu_bg.gif";

import SubImgA0000 from "../../../public/images/subimg_A0000.jpg";
import SubImgB0000 from "../../../public/images/subimg_B0000.jpg";

import A1000Img1 from "../../../public/images/A1000_img1.jpg";
import BtnLine from "../../../public/images/btn_line.gif";
import BtnDott from "../../../public/images/btn_dott.gif";
import BtnDot from "../../../public/images/btn_dot.gif";

import A2000Img1 from "../../../public/images/A2000_img1.jpg";
import A2000Img2 from "../../../public/images/A2000_img2.jpg";
import A2000Img3 from "../../../public/images/A2000_img3.jpg";
import A2000Img4 from "../../../public/images/A2000_img4.jpg";

import A4000Bg2 from "../../../public/images/A4000_bg2.jpg";

import B1400BgBox from "../../../public/images/cn/B1400_bgbox.jpg";

const StyleS = () => (
  <Global
    styles={css`
    @CHARSET "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);
@font-face {font-family: "malgunweb"; src: url('../font/malgun.eot'); src:  local('?'), url('../font/malgun.woff') format('woff'), url('../font/malgun.ttf') format('truetype'); font-weight:normal; font-style: normal;}
@font-face {font-family: "malgunweb"; src: url('../font/malgunbd.eot'); src:  local('?'), url('../font/malgunbd.woff') format('woff'), url('../font/malgunbd.ttf') format('truetype'); font-weight:bold; font-style: normal;}

body {
      margin:0;
      padding:0;
      font-size:15px;
      font-family:"맑은고딕",Malgun Gothic,"나눔고딕",Nanum Gothic,"돋움", 'Source Sans Pro', AppleGothic,sans-serif;
      width:100%;
	  overflow-y:scroll;  overflow-x:hidden;
}


td											{ font-family:"맑은고딕",Malgun Gothic,"나눔고딕",Nanum Gothic,"돋움", 'Source Sans Pro', AppleGothic,sans-serif;}
img										{ margin:0; border:0; vertical-align:top;}
div, dl, span							{ margin:0; padding:0; border:0; font-family:"맑은고딕",Malgun Gothic,"나눔고딕",Nanum Gothic,"돋움", 'Source Sans Pro', AppleGothic,sans-serif;}
form										{ margin:0; padding:0; border:0;}
ul, li, ol, dl, dt, dd, p, em			{ list-style:none; margin:0; padding:0; }
em										{ list-style:none; margin:0; padding:0; font-size : 12px; font-style: normal; font-weight:bold;}
table										{ border-collapse:collapse; border-spacing:0; }
button									{ border:0; padding:0; background:transparent; cursor:pointer; overflow:visible;}
input, select, option					{ vertical-align:middle; font-family:"맑은고딕",Malgun Gothic,"나눔고딕",Nanum Gothic,"돋움", 'Source Sans Pro', AppleGothic,sans-serif;}
label										{ cursor:pointer; }
a:link										{ text-decoration:none; color: #606060;}
a:visited									{ text-decoration:none; color: #606060;}
a:active									{ text-decoration:none; color: #606060;}
a:hover									{ text-decoration:none; color: #8baa00;}

fieldset									{ border:solid 0 transparent; padding:0;margin:0;}
legend									{ overflow:hidden;visibility:hidden;font-size:0;width:0;height:0;margin:0;padding:0;position:absolute;font-size :1em; }
hr, h1, h2, caption				{ overflow:hidden;visibility:hidden;font-size:0;width:0;height:0;margin:0;padding:0;position:absolute;}
h3, h4, h5							{ margin:0; padding:0; border:0;}
div.skipNav							{ overflow:hidden;visibility:hidden;font-size:0;width:0;height:0;margin:0;padding:0;position:absolute;}
#skipNav								{ overflow:hidden;visibility:hidden;font-size:0;width:0;height:0;margin:0;padding:0;position:absolute;}
.skipNav								{ overflow:hidden;visibility:hidden;font-size:0;width:0;height:0;margin:0;padding:0;position:absolute;}

.Skipul	 ul li							{ position:relative; float:left; padding:0; margin:0}
.skip										{ display:block; height:1px; width:1px; margin:0 -1px -1px 0; padding:0; overflow:hidden; font-size:0; line-height:0;}
.skip:hover,
.skip:active,
.skip:focus							{ width:100%; height:auto; margin:0; padding:5px 0; text-indent:10px; font-weight:bold; font-size:12px; color:#333; font-family:Tahoma; line-height:1; text-decoration:none !important;}




#Suballbg                                { position:relative;float:left; width:100%;text-align:center; z-index:1;}
#Suballbg	 .container					{ position:relative; width:1000px; margin:0 auto;}


#Suballbg	#Mainheader														{ position:relative; float:left; width:100%; height:100px; text-align:center; border-bottom:1px solid #dfdfdf; z-index:400;}
#Suballbg	#Mainheader	#headerbox									{ position:relative; width:1000px; height:100px; margin:0 auto;text-align:left;}
#Suballbg	#Mainheader	#headerbox	 .logo						{ position:relative; width:auto; margin-top:24px; z-index:400; display:inline-block;}
#Suballbg	#Mainheader	#headerbox	 #language															{ position:absolute; right:0; top:37px; width:136px; height:auto;  z-index:401;}
#Suballbg	#Mainheader	#headerbox	 #language	dl														{ position:relative; float:left; width:136px;}
#Suballbg	#Mainheader	#headerbox	 #language	dl	dt													{ position:relative; float:left; width:136px; height:29px; background:url(../img/version_bg.gif) left top no-repeat; }
#Suballbg	#Mainheader	#headerbox	 #language	dl	dt	 span										{ position:relative; float:left; height:17px; padding:5px 0 0 12px;}
#Suballbg	#Mainheader	#headerbox	 #language	dl	dd													{ position:relative; float:left; width:134px;}
#Suballbg	#Mainheader	#headerbox	 #language	dl	dd	ul												{ position:relative; float:left; width:134px; border-left:1px solid #D6D6D6; border-right:1px solid #DFDFDF;}
#Suballbg	#Mainheader	#headerbox	 #language	dl	dd	ul	li											{ position:relative; float:left; width:134px; height:26px;  background-color:#fff; border-bottom:1px solid #DFDFDF;}
#Suballbg	#Mainheader	#headerbox	 #language	dl	dd	ul	li	span									{ position:relative; float:left; padding:5px 0 5px 12px;}


#Suballbg	#Mainheader	#menulist															{ position:relative; float:left; width:100%; height:47px; text-align:center; margin-top:-60px;}
#Suballbg	#Mainheader	#menulist #Gnb												{ z-index:120; width:650px; height:47px; margin:0 auto; padding-left:60px; letter-spacing:0;}
#Suballbg	#Mainheader	#menulist #Gnb li											{ z-index:10; float:left; width:auto; padding:0 50px; border-right:1px solid #dfdfdf;}
#Suballbg	#Mainheader	#menulist #Gnb li	a										{ z-index:10; font-size:18px; color:#282828; /*font-family: 'Source Sans Pro', sans-serif; */}
#Suballbg	#Mainheader	#menulist #Gnb li	a:hover							{ z-index:10; color:#8baa00;}
#Suballbg	#Mainheader	#menulist #Gnb li:last-child								{ z-index:10; border-right:0;}
#Suballbg	#Mainheader	#menulist #Gnb li ul											{ z-index:10; width:1000px; margin:0 auto;text-align:left;}
#Suballbg	#Mainheader	#menulist #Gnb li ul	 li										{ z-index:10; margin:0; border-right:0; padding:0;  letter-spacing:0;}

#Suballbg	#Mainheader	#menulist #Gnb .depth2														{ position:relative; float:left; width:260px; height:250px;  border-right:1px solid #e7e7e7;}
#Suballbg	#Mainheader	#menulist #Gnb .depth2	ul													{ position:relative; float:left; width:238px; margin-top:25px;}
#Suballbg	#Mainheader	#menulist #Gnb .depth2	ul	li												{ position:relative; float:left; width:100%; padding:8px 0; border-bottom:1px dotted #e7e7e7; }
#Suballbg	#Mainheader	#menulist #Gnb .depth2	ul	li:last-child								{ border-bottom:0;}
#Suballbg	#Mainheader	#menulist #Gnb .depth2	ul	li	a											{ position:relative; float:left; width:88%; padding-left:16px; background:url(../img/menu/btn_dot2.png) left center no-repeat; font-size:13px;}
#Suballbg	#Mainheader	#menulist #Gnb .depth2	ul	li	a:hover								{ position:relative; float:left; width:83%; padding-right:21px; background:url(../img/menu/btn_dot2.png) right center no-repeat; font-size:13px; font-weight:normal;}
#Suballbg	#Mainheader	#menulist #Gnb .depth2	.gnbActive	a								{ color:#8baa00; padding-right:10px; background:url(../img/menu/btn_dot2.png) right center no-repeat; }

#Suballbg	#Mainheader	#menulist #Gnb .notice									{  position:relative; float:left; width:375px; height:250px; margin-right:20px; border-left:1px solid #e7e7e7; border-right:1px solid #e7e7e7; }
#Suballbg	#Mainheader	#menulist #Gnb .notice	dl								{ position:relative; width:85%; margin:35px auto;}
#Suballbg	#Mainheader	#menulist #Gnb .notice	dl	dt							{ position:relative; padding-bottom:20px;}
#Suballbg	#Mainheader	#menulist #Gnb .notice	dl	dd	dl					{ width:100%; padding:0; margin:0; letter-spacing:0;}
#Suballbg	#Mainheader	#menulist #Gnb .notice	dl	dd	dl	dt				{ padding-bottom:12px;}
#Suballbg	#Mainheader	#menulist #Gnb .notice	dl	dd	dl	dt	 a			{ font-size:14px; font-weight:bold;}
#Suballbg	#Mainheader	#menulist #Gnb .notice	dl	dd	dl	dd a			{ font-size:13px; color:#606060; text-align:justify; line-height:20px;}
#Suballbg	#Mainheader	#menulist #Gnb .notice	dl	dd	dl	dd a:hover{ text-decoration:underline; color:#606060;}
#Suballbg	#Mainheader	#menulist #Gnb .notice	.data						{ padding:12px 0 0 0; color:#777; letter-spacing:0;}

#Suballbg	#Mainheader	#menulist #Gnb .info										{  position:relative; float:right; width:340px; height:250px; text-align:center;  border-right:1px solid #e7e7e7;}
#Suballbg	#Mainheader	#menulist #Gnb .info	img								{ border:1px solid #e7e7e7; margin-top:35px;}
#Suballbg	#Mainheader	#menulist #Gnb .info	p									{ position:relative; width:270px; margin:0 auto; padding-top:15px; text-align:left; line-height:16px;  font-size:13px; color:#666}

#Suballbg	#Mainheader	#menulist .sub													{ display:none;}		
#Suballbg	#Mainheader	#menulist	 .gnb1  .subbg									{ position:absolute;left:0;top:60px;width:100%; height:250px; border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; background-color:#fff; opacity:0.9; filter:alpha(opacity=90); -moz-opacity:0.9; -khtml-opacity: 0.9; z-index:200;}
#Suballbg	#Mainheader	#menulist	 .gnb2  .subbg									{ position:absolute;left:0;top:60px;width:100%; height:250px; border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; background-color:#fff; opacity:0.9; filter:alpha(opacity=90); -moz-opacity:0.9; -khtml-opacity: 0.9; z-index:200;}
#Suballbg	#Mainheader	#menulist	 .gnb3  .subbg									{ position:absolute;left:0;top:60px;width:100%; height:250px; border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; background-color:#fff; opacity:0.9; filter:alpha(opacity=90); -moz-opacity:0.9; -khtml-opacity: 0.9; z-index:200;}


#Suballbg	#Mainheader	#open_side				{ display:none;}
#Suballbg	#Mainheader	.btn_side					{ display:block; overflow:hidden; position:absolute; top:0; left:-1000em; }

#MainWrapper																{ width:1000px;margin:0 auto;text-align:left;z-index:2;}
#SubWrapper																	{ position:relative;float:left;width:1000px; z-index:3;}

#Subelement																	{ position:absolute; left:0; top:100px; width:100%; height:386px; text-align:center;}
#Subelement	.elementbox												{ position:relative; width:100%; height:386px; margin:0 auto; text-align:center;}
#Subelement	.elementbox	 .Subimg								{ width:100%; height:386px;}
#Subelement	.elementbox	 .Subimg	.A0000					{ width:100%; height:386px; background:url(${SubImgC0000}) top center no-repeat;}
#Subelement	.elementbox	 .Subimg	.B0000					{ width:100%; height:386px; background:url(${SubImgA0000}) top center no-repeat;}
#Subelement	.elementbox	 .Subimg	.C0000					{ width:100%; height:386px; background:url(${SubImgB0000}) top center no-repeat;}
#Subelement	.elementbox	 .Subimg	.member					{ width:100%; height:386px; background:url(${SubImgC0000}) top center no-repeat;}
#Subelement	.elementbox	 .Subimg	.mypage					{ width:100%; height:386px; background:url(${SubImgC0000}) top center no-repeat;}
#Subelement	.elementbox	 .Subimg	.sitemap					{ width:100%; height:386px; background:url(${SubImgC0000}) top center no-repeat;}
#Subelement	.Subtext								{ position:absolute;left:0; top:120px; width:100%; text-align:left; z-index:15;}
#Subelement	.Subtext	ul							{ margin-left:40px;}
#Subelement	.Subtext	ul	li						{ float:left; width:140px; height:140px; border:4px solid #fff; margin-right:10px; border-radius:100px; text-align:center; color:#fff;}
#Subelement	.Subtext	ul	li	strong			{ width:80%; font-size:21px; margin:25px 0 10px 0; display:inline-block; border-bottom:1px solid #eee; padding-bottom:7px;}
#Subelement	.Subtext	ul	li	span				{ font-size:16px; display:inline-block; padding:0 15px;}

#MainContents										{ position:relative; float:left; width:1000px; margin:390px 0 0 0 !important;}
#Contents												{ width:1000px; height:auto;}

.titleroad													{ position:relative; float:left; width:100%; height:60px; padding:0 0 20px 0; border-bottom:1px solid #E8E8E8;}
.titleroad	.Subtitle									{ position:absolute;left:0; bottom:20px; width:310px; height:32px; font-size:30px; color:#343434; font-weight:normal; }
.titleroad	.Position									{ position:absolute;right:3px;bottom:20px; width:auto; color:#777777;}
.titleroad	.Position	img							{ vertical-align:middle;}
.titleroad	.Position	a								{ color:#282828; font-size:14px; font-family: 'Source Sans Pro', sans-serif; letter-spacing:0;}
.titleroad	.Position	a:hover					{ color:#8baa00;}
.titleroad	.Position	em							{ color:#8baa00; font-size:13px; cursor:default}

#Start														{ position:relative; float:left; width:100%; }
#Start	.contentsbox								{ position:relative; width:85%; margin:0 auto; text-align:left; line-height:23px; color: #606060;}

#Start	#subleft													{ position:relative; float:left; width:100%; margin:50px 0 80px 0; z-index:500;}  
#Start	#subleft #SubMenu									{ position:relative; width:100%; text-align:center; }
#Start	#subleft #SubMenu ul								{ position:relative; float:left; width:100%; background:url(${SubMenuBg}) center no-repeat;}
#Start	#subleft #SubMenu ul li							{ width:133px; height:133px; margin:0 5px; display:inline;}

#Start	#subleft #SubMenu ul li ul							{ /*float:right; width:183px; margin:3px -5px -11px -21px; padding:10px 5px 10px 0; border-top:1px solid #dde0cf; border-left:1px solid #dde0cf; border-right:1px solid #dde0cf; border-bottom:0; background-color:#e7e9dd;*/}
#Start	#subleft #SubMenu ul li ul li							{ margin:0; padding:0 0 10px 0; border-bottom:0; background:0; }
#Start	#subleft #SubMenu ul li ul li a						{ font-size:11px; padding-right:3px; }
#Start	#subleft #SubMenu a:link							{ text-decoration: none; color: #666666; }
#Start	#subleft #SubMenu a:visited						{ text-decoration: none; color: #666666; }
#Start	#subleft #SubMenu a:active						{ text-decoration: none; color: #666666; }
#Start	#subleft #SubMenu a:hover						{ text-decoration: none; color: #eb1124; }

#Start	#subleft #SubMenu .sidebarActive a							{ font-size:14px; font-weight:600; color:#000000; }
#Start	#subleft #SubMenu .sidebarActive ul li a						{ font-size:11px; }
#Start	#subleft #SubMenu .sidebarActive ul li a:link				{ text-decoration: none; color: #303030; }
#Start	#subleft #SubMenu .sidebarActive ul li a:visited			{ text-decoration: none; color: #303030; }
#Start	#subleft #SubMenu .sidebarActive ul li a:active			{ text-decoration: none; color: #303030; }
#Start	#subleft #SubMenu .sidebarActive ul li a:hover			{ text-decoration: none; color: #0b73f3; }
#Start	#subleft #SubMenu .sidebarActive .rollout a				{ font-weight:300; color: #666666; }


#Footer																										{ position:relative; float:left; width:100%; height:350px; text-align:center; margin-top:80px; background-color:#262626;}
#Footer    #Copyright																					{ position:relative; width:1000px; margin:0 auto; text-align:left;}
#Footer    #Copyright  .copylogo																	{ position:relative; float:left; margin:15px 20px 0 0; }
#Footer    #Copyright  .copyrights1																{ position:relative; float:left; margin-top:20px;}
#Footer    #Copyright  .copyrights2																{ display:none;}	

#Footer    #Copyright	.copybox																	{ position:relative; width:1000px; height:210px; border-top:1px solid #333; border-bottom:1px solid #333; margin-top:50px;}
#Footer    #Copyright	.copybox	.bottommenu											{ position:relative; float:left; width:470px; height:148px; margin-top:35px; border-right:1px solid #333;}
#Footer    #Copyright	.copybox	.bottommenu	ul										{ position:relative; float:left; width:100%;}
#Footer    #Copyright	.copybox	.bottommenu	ul	li									{ position:relative; float:left; margin-right:80px;}
#Footer    #Copyright	.copybox	.bottommenu	ul	li	dl	dt							{ padding-bottom:15px;}
#Footer    #Copyright	.copybox	.bottommenu	ul	li	dl	dd						{ padding-bottom:0px;}
#Footer    #Copyright	.copybox	.bottommap												{ position:relative; float:right; width:490px; height:148px; margin-top:35px; }
#Footer    #Copyright  .copybox	.bottommap	.ad1										{ position:relative; float:left; margin-top:10px;}
#Footer    #Copyright  .copybox	.bottommap	.ad2										{ display:none;}
#Footer    #Copyright	.Btnsns																		{ position:absolute;right:0;top:-30px; width:80px; height:21px; text-align:right;}
#Footer    #Copyright	.Btnsns		li																{ position:relative; float:right; margin-left:7px;}


.sitemap										{ position:relative; float:left; width:100%;}
.sitemap ul li									{ float:left; width:30%; margin:0 14px; letter-spacing:0;}
.sitemap ul li a								{ font-size:15px; width:100%; background-color:#f8f8f8; border:1px solid #dfdfdf; color:#282828; border-radius:8px; display:inline-block; text-align:center; line-height:45px; font-weight:normal; }
.sitemap ul li	 a:hover					{ text-decoration:none; color: #8baa00;}
.sitemap ul li ul li							{ width:100%; height:auto; clear:both; border-bottom:1px dotted #dfdfdf; margin:0;}
.sitemap ul li ul li a						{ font-size:14px; font-weight:normal; background:none; color:#555; text-align:left; padding:0 10px; line-height:40px; border:0;}
.sitemap ul li ul li ul li					{ border-bottom:0; background-color:#f8f8f8; margin:0;}
.sitemap ul li ul li ul li a					{ font-size:11px; color:#888; line-height:25px;}


.tabmenu										{ position: relative;float:left; width:100%; height:45px; margin-bottom:8%;}
.tabmenu a									{ display:block; float:left; width:24.8%; height:42px; text-align:center;font-weight:bold; line-height:43px; margin-bottom:3px; border:1px solid #d0d0d0; !important;border-right:none; cursor:pointer; background-color:#f9f9f9;}
.tabmenu a.last							{ border-right:1px solid #d0d0d0;}
.tabmenu a span							{ width:auto; height:42px; line-height:43px; color:#5A5046; font-size:16px; font-weight:normal; display:inline-block; }
.tabmenu a.on								{ border:1px solid #484D53; background-color:#686A6C;}
.tabmenu a.on span						{ font-size:16px; color:#fff;}

.tstyle											{ width:100%; border-collapse:collapse; margin-top:5%;}
.tstyle th										{ word-break:break-all; text-align:center; padding:8px; border:1px solid #dbdee6; border-collapse:collapse; background:#f9f9f9; color:#343434;}
.tstyle td										{ word-break:break-all; text-align:center; padding:5px 10px; border:1px solid #dbdee6; text-align:left; font-size:13px; border-collapse:collapse; letter-spacing:0;}
.tstyle td	img								{ vertical-align:middle;}

.title_normal									{ font-size:20px; padding-bottom:15px; color:#282828;}
.cont_dot										{ padding-left:15px; background:url(${BtnDot}) left 7px no-repeat; }



.A1000	li																	{ width:100%; display:inline-block; padding-bottom:10%; text-align:center;}
.A1000	li:last-child													{ padding-bottom:0;}
.A1000	li	dl	dt															{ font-size:30px; padding-bottom:60px; margin-bottom:20px; color:#5A5046; text-align:center; background:url(${BtnLine}) center bottom no-repeat; letter-spacing:-2px;}
.A1000	.list_a	dl	dd												{ float:left; width:38%; height:130px; border-left:5px solid #F2F2F2;}
.A1000	.list_a	dl	dd	p											{ padding:0 10px 0 20px; text-align:left;}
.A1000	.list_a	dl	dd	p	strong								{ color:#8baa00}
.A1000	.list_a	dl	dd:last-child									{ border:0;}
.A1000	.list_a	.bg1													{ float:right; width:58%; height:130px; background:url(${A1000Img1}) top center no-repeat; background-size:cover; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover;  background-size: cover;}
.A1000	.list_c	.bg3	img											{ width:100%; height:auto;}
.A1000	.list_c	.bg3	ul	li											{ float:left; width:33.3333%; margin-top:20%;}
.A1000	.list_c	.bg3	ul	li	span									{ width:auto; display:inline-block; text-align:left;}
.A1000	.list_c	.bg3	.txt1, .txt2								{ margin-left:-70px; font-size:17px;}
.A1000	.list_c	.bg3	.txt3											{ margin-left:45px; font-size:17px; text-align:center;}


.A2000	.li_st1	dl	dt													{ font-size:30px; padding-bottom:60px; margin-bottom:20px; color:#5A5046; text-align:center; background:url(${BtnLine}) center bottom no-repeat; letter-spacing:-2px;}
.A2000	.li_st1	ul														{ background-color:#f9f9f9; border:1px solid #dfdfdf; padding:25px; }
.A2000	.li_st1	ul	li													{ background:url(${BtnDot}) left 12px no-repeat; margin-bottom:0; text-align:left; padding-left:10px;}
.A2000	.li_st2															{ margin-top:7%; text-align:left;}
.A2000	.li_st2	dl	dt													{ font-size:30px; padding-bottom:60px; color:#5A5046; text-align:center; letter-spacing:-2px;}
.A2000	.li_st2	ul	li	dl	dt											{ font-size:20px; padding-bottom:15px; margin-bottom:10px; text-align:left; letter-spacing:-1px;}
.A2000	.li_st2	ul	li	dl	dd											{ padding-left:13px; margin-bottom:5px;background:url(${BtnDott}) left 10px no-repeat; line-height:20px;}
.A2000	.nth_left															{ float:left; width:49.5%; height:190px; }
.A2000	.nth_left	dl														{ float:left; width:55%;}
.A2000	.nth_right														{ float:right; width:50%; height:190px; border-left:1px dashed #dfdfdf;}
.A2000	.nth_right	 dl													{ float:left; width:55%; padding-left:30px;}
.A2000	.nth_line															{ border-top:1px dashed #dfdfdf; padding-top:3%;}
.A2000	.bg1																{ background:url(${A2000Img1}) right -5px no-repeat;}
.A2000	.bg2																{ background:url(${A2000Img2}) right -5px  no-repeat;}
.A2000	.bg3																{ background:url(${A2000Img3}) right 20px  no-repeat;}
.A2000	.bg4																{ background:url(${A2000Img4}) right 35px  no-repeat;}

.A3000	dl	dt																	{ padding-bottom:7%;}
.A3000	dd	p																	{ padding-bottom:5%;}
.A3000	dd	p	u																{ font-size:16px; color:#343434;}
.A3000	.sign																	{ text-align:right;}



.A4000	li	dl	dt																{ font-size:30px; padding-bottom:60px; margin-bottom:20px; color:#5A5046; text-align:center; background:url(${BtnLine}) center bottom no-repeat; letter-spacing:-2px;}
.A4000	li	dl	dt	 span													{ font-size:24px; color:#5A5046; border:1px solid #dfdfdf; padding:8px 11px 11px 11px; line-height:13px; display:inline-block; }
.A4000	.txt_a																{ width:100%; padding-bottom:60px; display:inline-block; text-align:center;}
.A4000	.txt_b																{ position:relative; width:100%; display:inline-block; background-color:#F6F6F6;}
.A4000	.txt_b	dl															{ float:left; width:50%; padding:5% 0;}
.A4000	.txt_b	dl	dt														{ background:url(${BtnLine}) center bottom no-repeat;  text-align:center;}
.A4000	.txt_b	dl	dt	 span											{ background-color:#fff; }
.A4000	.txt_b	dl	dd														{ margin:0 15%; padding-left:10px; background:url(${BtnDot}) left 12px no-repeat;}
.A4000	.txt_b	dl	dd	strong											{ color:#5A5046;}
.A4000	.txt_c																{ width:100%; padding:60px 0 30px 0; display:inline-block;}
.A4000	.txt_c	dl	dd													{ float:left; width:32%; height:165px; margin:0 2.6% 2.6% 0; border:1px solid #dfdfdf;  font-size:14px; line-height:18px;}
.A4000	.txt_c	dl	dd	p												{ padding:8%; text-align:left;}
.A4000	.txt_c	dl	dd	p	strong									{ width:100%; display:inline-block; padding-bottom:5%; font-size:16px; color:#5A5046; }
.A4000	.txt_c	.none													{ float:right; width:30%; height:165px; border:1px solid #dfdfdf; margin-right:0;}
.A4000	.txt_d	dl	dt														{ margin-bottom:5%;}
.A4000	.txt_d	dl	dd													{ float:left; width:22%; margin-right:4%;}
.A4000	.txt_d	dl	dd	dl	dt											{ font-size:18px; color:#5A5046; padding:0; margin:0 0 3% 0; background:none; letter-spacing:0;}
.A4000	.txt_d	dl	dd	dl	dd										{ width:100%; font-size:14px; color:#888; text-align:center; line-height:20px;}
.A4000	.txt_d	p															{ text-align:center; margin-bottom:6%;}
.A4000	.txt_d	p	img													{ width:80%; height:auto;}
.A4000	.txt_d	.none													{ float:right; width:22%; margin-right:0;}
.A4000	.photo_b															{ position:absolute;right:0;top:0;  width:50%; height:100%; background:url(${A4000Bg2}) center no-repeat; background-size:cover; -webkit-background-size: cover;  -moz-background-size: cover; -o-background-size: cover;  background-size: cover;}

.A5000	li																	{ padding-bottom:25px; margin-bottom:30px; border-bottom:1px dotted #dfdfdf; display:inline-block;}
.A5000	li	dl	dt															{ float:left; width:23%;}
.A5000	li	dl	dt	 img													{ padding-top:10px;}
.A5000	li	dl	dd															{ float:left; width:75%;}
.A5000	li	dl	dd	ul	li													{ width:100%; margin:0 0 10px 0; padding:0; border-bottom:none; display:inline-block; }
.A5000	li	dl	dd	ul	li	strong										{ width:18%; color:#5A5046; display:inline-block; float:left;}
.A5000	li	dl	dd	ul	li	span											{ width:80%; display:inline-block; }
.A5000	li	dl	dd	ul	li	span	p										{ background:url(${BtnDott}) left 13px no-repeat; padding-left:15px; }
.A5000	.noline															{ border:none; padding-bottom:0; margin-bottom:0;}


.B1100	ul	li																	{ padding-bottom:10%;}
.B1100	ul	li:last-child													{ padding-bottom:0;}
.B1100	ul	li	dl	dt															{ font-size:30px; padding-bottom:60px; margin-bottom:20px; color:#5A5046; text-align:center; background:url(${BtnLine}) center bottom no-repeat; letter-spacing:-2px;}
.B1100	ul	li	dl	dt	 span												{ font-size:24px; color:#5A5046; border:1px solid #dfdfdf; padding:8px 11px 11px 11px; line-height:13px; display:inline-block; }
.B1100	ul	li	dl	dd														{ text-align:center; }
.B1100	.tbox																{ border:1px solid #dfdfdf; padding:5% 0 2% 0;}
.B1100	.tbox	.tb_normal											{ width:100%; border-collapse:collapse;}
.B1100	.tbox	.tb_normal th										{ word-break:break-all; text-align:center; padding:10px; border:1px solid #dbdee6; border-collapse:collapse; background:#F7FAFD; color:#002f59;}
.B1100	.tbox	.tb_normal td										{ word-break:break-all; text-align:center; padding:5px; border:0; border-collapse:collapse; letter-spacing:0;}
.B1100	.tbox	.tb_normal td	img								{ vertical-align:middle;}

.B1200	.imgbox															{ width:100%; display:inline-block; text-align:center;}
.B1200	.imgbox	img													{ width:80%; height:auto;}
.B1200	.imgbox	dl	dt													{font-size:30px; padding-bottom:60px; margin-bottom:20px; color:#5A5046; text-align:center; background:url(${BtnLine}) center bottom no-repeat; letter-spacing:-2px; line-height:30px;}
.B1200	.imgbox	dl	dt	 span										{ color:#f19528;}
.B1200	.imgbox	dl	dd												{ font-size:16px;}
.B1200	.txtbox1															{ width:100%; display:inline-block; margin-top:5%;}
.B1200	.txtbox1	li														{ float:left; width:50%;}
.B1200	.txtbox1	li	dl													{ width:85%; height:160px; padding:5% 5% 0 5%; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf;}
.B1200	.txtbox1	li	dl	dt												{ font-size:18px; color:#5A5046; padding-bottom:4%;}
.B1200	.txtbox1	li	dl	dd											{ color:#707070; font-size:14px; margin-bottom:10px; line-height:18px;background:url(${BtnDott}) left 10px no-repeat;  padding-left:12px;}
.B1200	.txtbox1	.lastli											{ float:right; width:85%; height:160px; padding:5% 5% 0 5%; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf;}
.B1200	.txtbox2															{ position:relative; width:99.8%; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf; margin-top:5%;}
.B1200	.txtbox2	dl														{ padding:3% 3% 5% 3%; display:inline-block;}
.B1200	.txtbox2	dl	dt													{  font-size:18px; color:#5A5046; padding-bottom:2.5%;}
.B1200	.txtbox2	dl	dd												{ color:#707070; font-size:14px; background:url(${BtnDott}) left 12px no-repeat; padding-left:12px; }
.B1200	.txtbox3															{ position:relative; width:99.8%; height:429px;  text-align:right; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf; margin-top:5%; background:url(${B1400BgBox}) center no-repeat; background-size:cover; -webkit-background-size: cover;  -moz-background-size: cover; -o-background-size: cover;  background-size: cover;}
.B1200	.txtbox3	strong												{ font-size:30px; color:#5A5046; padding:30px 5% 0 0; display:inline-block;}

.B1300	.imgbox															{ width:100%; display:inline-block; text-align:center;}
.B1300	.imgbox	img													{ width:80%; height:auto;}
.B1300	.imgbox	dl	dt													{font-size:30px; padding-bottom:60px; margin-bottom:20px; color:#5A5046; text-align:center; background:url(${BtnLine}) center bottom no-repeat; letter-spacing:-2px; line-height:30px;}
.B1300	.imgbox	dl	dt	 span										{ color:#016FD6;}
.B1300	.imgbox	dl	dd												{ font-size:16px;}
.B1300	.txtbox1															{ width:100%; display:inline-block; margin-top:5%;}
.B1300	.txtbox1	li														{ float:left; width:50%;}
.B1300	.txtbox1	li	dl													{ width:85%; height:160px; padding:5% 5% 0 5%; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf;}
.B1300	.txtbox1	li	dl	dt												{ font-size:18px; color:#5A5046; padding-bottom:4%;}
.B1300	.txtbox1	li	dl	dd											{ color:#707070; font-size:14px; margin-bottom:10px; line-height:18px;background:url(${BtnDott}) left 10px no-repeat;  padding-left:12px;}
.B1300	.txtbox1	.lastli													{ float:right; width:85%; height:160px; padding:5% 5% 0 5%; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf;}
.B1300	.txtbox2															{ position:relative; width:99.8%; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf; margin-top:5%;}
.B1300	.txtbox2	dl														{ padding:3% 3% 5% 3%; display:inline-block;}
.B1300	.txtbox2	dl	dt													{  font-size:18px; color:#5A5046; padding-bottom:2.5%;}
.B1300	.txtbox2	dl	dd												{ color:#707070; font-size:14px; background:url(${BtnDott}) left 12px no-repeat; padding-left:12px; }
.B1300	.txtbox3															{ position:relative; width:99.8%; height:429px;  text-align:right; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf; margin-top:5%; background:url(${B1400BgBox}) center no-repeat; background-size:cover; -webkit-background-size: cover;  -moz-background-size: cover; -o-background-size: cover;  background-size: cover;}
.B1300	.txtbox3	strong												{ font-size:30px; color:#5A5046; padding:30px 5% 0 0; display:inline-block;}

.B1400	.imgbox															{ width:100%; display:inline-block; text-align:center;}
.B1400	.imgbox	img													{ width:80%; height:auto;}
.B1400	.imgbox	dl	dt													{font-size:30px; padding-bottom:60px; margin-bottom:20px; color:#5A5046; text-align:center; background:url(${BtnLine}) center bottom no-repeat; letter-spacing:-2px; line-height:30px;}
.B1400	.imgbox	dl	dt	 span										{ color:#E15C4D;}
.B1400	.imgbox	dl	dd													{ font-size:16px;}
.B1400	.txtbox1															{ width:100%; display:inline-block; margin-top:5%;}
.B1400	.txtbox1	li														{ float:left; width:50%;}
.B1400	.txtbox1	li	dl													{ width:85%; height:160px; padding:5% 5% 0 5%; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf;}
.B1400	.txtbox1	li	dl	dt												{ font-size:18px; color:#5A5046; padding-bottom:4%;}
.B1400	.txtbox1	li	dl	dd												{ color:#707070; font-size:14px; margin-bottom:10px; line-height:18px;background:url(${BtnDott}) left 10px no-repeat;  padding-left:12px;}
.B1400	.txtbox1	.lastli													{ float:right; width:85%; height:160px; padding:5% 5% 0 5%; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf;}
.B1400	.txtbox2															{ position:relative; width:99.8%; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf; margin-top:5%;}
.B1400	.txtbox2	dl														{ padding:3% 3% 5% 3%; display:inline-block;}
.B1400	.txtbox2	dl	dt													{  font-size:18px; color:#5A5046; padding-bottom:2.5%;}
.B1400	.txtbox2	dl	dd													{ color:#707070; font-size:14px; background:url(${BtnDott}) left 12px no-repeat; padding-left:12px; }
.B1400	.txtbox3															{ position:relative; width:99.8%; height:429px;  text-align:right; display:inline-block; background-color:#f9f9f9; border:1px solid #dfdfdf; margin-top:5%; background:url(${B1400BgBox}) center no-repeat; background-size:cover; -webkit-background-size: cover;  -moz-background-size: cover; -o-background-size: cover;  background-size: cover;}
.B1400	.txtbox3	strong												{ font-size:30px; color:#5A5046; padding:30px 5% 0 0; display:inline-block;}


.contactus												{ position:relative; float:left; width:100%;}
.contactus	ul											{ border-top:2px solid #666666;}
.contactus	ul	li										{ width:100%; border-bottom:1px solid #dfdfdf; display:inline-block; }
.contactus	ul	li	label								{ float:left; width:25%; height:50px; background-color:#f9f9f9; border-right:1px solid #dfdfdf; text-align:center; line-height:48px; color:#333;}
.contactus	ul	li	span								{ float:left; width:74%; height:50px; text-indent:15px;}
.contactus	ul	li	span	input						{ height:25px; border:1px solid #ccc; margin-top:10px;}
.contactus	ul	li	span	textarea					{ width:95%; height:130px; border:1px solid #ccc; margin-top:13px;}
.contactus	.memo	label							{ height:160px;}
.contactus	.input_st1								{ width:50%;}
.contactus	.input_st2								{ width:95%;}
.contactus	.btn_st									{ text-align:center; margin-top:20px;}
.contactus	.btn_st	input 							{ width:130px; height:35px; text-align:center; background-color:#686A6C; border:1px solid #484D53; color:#fff; cursor:pointer; font-size:14px;}




@media all and (max-width:800px) {
	#Suballbg																			{ width:100%; margin:0 auto;}
	#Suballbg	 .container															{ width:400px; margin:0 auto;}
	#Suballbg	#Mainheader														{ width:100%; height:55px; border:0;}
	#Suballbg	#Mainheader	#headerbox									{ width:100%; height:55px; margin:0 auto; text-align:center; display:inline-block;}
	#Suballbg	#Mainheader	#headerbox	 .logo						{ width:auto; margin-top:12px; text-align:center;}
	#Suballbg	#Mainheader	#headerbox	 .logo	 img				{ width:60%; height:auto;}
	#Suballbg	#Mainheader	#headerbox	 .Sitemap					{ display:none;}
	#Suballbg	#Mainheader	#menulist										{ display:none;}
	#Suballbg	#Mainheader	#headerbox	 #language					{ display:none;}
	
	.btn_side																					{ position: absolute; top:0px; right:0; width:53px; height:51px; font-size:0; line-height:0; display:block; z-index:5;}
	.btn_side i																				{ border-top:8px double #666; border-bottom:8px double #666; height:2px; display:block; width:23px; margin:20px 0 0 15px; }
	
	#open_side																				{ display:block; overflow-y:hidden; height:100%; width:100%;clear:both; position: fixed; z-index:500; top:0px; background:url(../img/open_side_bg.png) repeat; }
	#open_side .side_gnb 															{ position:absolute; height:900px; width:250px;background:#2e2f31; padding-top:50px; }
	#open_side .side_gnb .btn_side												{ position:absolute; top:5px; left:210px; padding:10px; width:18px; height:18px;}
	#open_side .side_gnb ul li														{ border-bottom:1px dotted rgba(255, 255, 255, 0.2);}
	#open_side .side_gnb ul li a													{ color:#ccc;  display:inline-block; padding:10px 15px 10px 10px ; width:90%; font-size:14px; background:url(../img/open_arrow.png) no-repeat right 22px; }
	#open_side .side_gnb ul li div ul												{ background:#222;}
	#open_side .side_gnb ul li div ul li											{ border-bottom:1px solid #343434}
	#open_side .side_gnb ul .gnbActive>a									{ background:#B5D34D url(../img/close_arrow.png) no-repeat right 20px; color:#fff;}
	#open_side .side_gnb ul li div ul li:last-child a							{ border:0; }
	#open_side .side_gnb ul li div ul li a										{ color:#888; font-size:13px;  background:none;}
	#open_side .side_gnb ul .gnbActive div ul .gnbActive>a			{ background:none; color:#B5D34D;}
	#open_side .m_topmenu															{}
	#open_side .m_topmenu a														{ box-sizing:border-box; background:#222 url(../img/line.jpg) no-repeat right center;display:inline-block; color:#ccc; line-height:40px; float:left; text-align:center; font-size:11px; letter-spacing:0;}
	#open_side .m_topmenu a:first-child										{ width:30%; }
	#open_side .m_topmenu a:nth-child(2)									{ width:30%;}
	#open_side .m_topmenu a:last-child										{ width:40%; background:#222;}
	
	#Suballbg	#Mainheader	#open_side									{ display: block;}

	#MainWrapper																			{ width:100%; text-align:left;}
	#SubWrapper																			{ width:100%;}

	#Subelement																			{ top:55px; height:150px; background:url(${SubImgC0000}) top center no-repeat; background-size:cover; -webkit-background-size: cover;  -moz-background-size: cover; -o-background-size: cover;  background-size: cover;}
	#Subelement	.elementbox														{ height:150px;}
	#Subelement	.Subtext								{ top:0;}
	#Subelement	.Subtext	ul							{ margin:5% 0 0 0;}
	#Subelement	.Subtext	ul	li						{ width:110px; height:110px; border:3px solid #fff; }
	#Subelement	.Subtext	ul	li	strong			{ width:80%; font-size:18px; margin:20px 0 7px 0;}
	#Subelement	.Subtext	ul	li	span				{ font-size:13px;}
	#Subelement	.elementbox	 .Subimg										{ display:none;}

	#MainContents																		{ width:100%; margin:150px 0 0 0 !important;}
	#Contents																				{ width:95%; margin:0 auto;}

	.titleroad																					{ height:40px; padding:15px 0;}
	.titleroad	.Subtitle																	{ width:auto; height:25px; font-size:20px; letter-spacing:0;}
	.titleroad	.Position	a																{ font-size:12px;}
	.titleroad	.Position	em															{ font-size:11px;}

	#Start																						{ position:relative; float:left; width:100%; }
	#Start	.contentsbox																{ width:100%; font-size:13px; margin-top:30px;}
	#Start	#subleft																		{ display:none;}  

	#Footer																										{ height:120px; margin-top:40px;}
	#Footer    #Copyright																					{ width:95%; margin:0 auto;}
	#Footer    #Copyright  .copylogo																	{ position:absolute; top:-48px; left:0;  }
	#Footer    #Copyright  .copyrights1																{ display:none;}
	#Footer    #Copyright  .copyrights2																{ position:absolute; top:40px; left:0; margin-top:0; font-size:12px; color:#646464; font-family: 'Source Sans Pro', sans-serif; letter-spacing:0; display:block;}	
	#Footer    #Copyright	.copybox																	{ width:100%; height:auto; margin-top:45px; border-bottom:0;}
	#Footer    #Copyright	.copybox	.bottommenu											{ width:100%; height:0px; margin-top:0; border-right:0;}
	#Footer    #Copyright	.copybox	.bottommenu	ul										{ display:none;}
	#Footer    #Copyright	.copybox	.bottommap												{ width:100%; height:auto; margin-top:10px;}
	#Footer    #Copyright	.copybox	.bottommap	p											{ display:none;}	
	#Footer    #Copyright  .copybox	.bottommap	.ad1										{ display:none;}
	#Footer    #Copyright  .copybox	.bottommap	.ad2										{ margin-top:0;  font-size:12px; color:#646464; font-family: 'Source Sans Pro', sans-serif; letter-spacing:0; display:block; font-style:normal; }
	#Footer    #Copyright  .copybox	.bottommap	.ad2	span								{ font-size:11px; color:#8B8B8B;}
	
	.sitemap ul li													{ width:90%; margin:0 5% 20px 5%;}
	.sitemap ul li ul li:last-child							{ border-bottom:0;}
	
	.tabmenu a									{ width:24.3%; height:36px; line-height:35px;}
	.tabmenu a span							{ height:36px; line-height:35px; font-size:15px;}
	.tabmenu a.on span						{ font-size:15px;}

	.A1000	.bg2	img											{ width:100%; height:auto;}

	.A2000	.li_st1	dl	dt													{ font-size:25px; padding-bottom:60px; margin-bottom:20px;}
	.A2000	.li_st2	dl	dt													{ font-size:25px; padding-bottom:40px;}
	.A2000	.li_st2	ul	li	dl	dd											{ background:url(${BtnDott}) left 8px no-repeat;}
	.A2000	.nth_left															{ width:100%; height:180px; margin-bottom:5%; border-bottom:1px dashed #dfdfdf;}
	.A2000	.nth_left	dl														{ width:70%;}
	.A2000	.nth_right														{ width:100%; height:180px; margin-bottom:5%; border-bottom:1px dashed #dfdfdf; border-left:0;}
	.A2000	.nth_right	 dl													{ width:70%; padding-left:0;}
	.A2000	.nth_line															{ border-top:0; padding-top:0;}
	.A2000	.bg1																{ background:url(../img/contents/A2000_img1.jpg) right -5px no-repeat; background-size:25% auto;}
	.A2000	.bg2																{ background:url(../img/contents/A2000_img2.jpg) right -5px  no-repeat; background-size:25% auto;}
	.A2000	.bg3																{ background:url(../img/contents/A2000_img3.jpg) right top  no-repeat; background-size:25% auto;}
	.A2000	.bg4																{ background:url(../img/contents/A2000_img4.jpg) right top  no-repeat; background-size:25% auto;}

	.A3000	.photo	img										{ width:80%;}
	.A3000	.sign	 img											{ width:50%;}
	.A3000	dl	dt	 img											{ width:50%;}
	.A3000	dl	dd												{ line-height:20px;}
	.A3000	dd	p	u											{ font-size:14px;}
	
	.A4000	li	dl	dt												{ font-size:25px; padding-bottom:50px; margin-bottom:20px;}
	.A4000	li	dl	dt	 span									{ font-size:20px; padding:5px 8px 8px 8px;}
	.A4000	.txt_a												{ padding-bottom:30px;}
	.A4000	.txt_b	dl	dd									{ margin:0 10%;}
	.A4000	.txt_c	dl	dd									{ width:48%; height:150px; margin:0 2% 2% 0;}
	.A4000	.txt_c	dl	dd:nth-child(2)					{ float:right; width:48%; height:150px; margin-right:0;}
	.A4000	.txt_c	.none									{ float:right; width:48%; height:150px;}
	.A4000	.txt_d	dl	dd									{ width:46%; margin:0 4% 4% 0;}
	.A4000	.txt_d	dl	dd	dl	dd						{ font-size:13px;}
	.A4000	.txt_d	.none									{width:46%;}

	.A5000	li	dl	dt	 img										{ width:65%; height:auto; padding-top:10px;}
	.A5000	li	dl	dd	ul	li	strong							{ width:20%;}
	.A5000	li	dl	dd	ul	li	span								{ float:right; width:77%; }
	.A5000	li	dl	dd	ul	li	span	p							{ background:url(${BtnDott}) left 8px no-repeat; }

	.B1100	.tbox	.tb_normal td	img				{ width:100%; height:auto;}
	.B1100	.tbox	.tb_normal	.bt	img			{ width:19px; height:10px;}
	.B1100	.tbox	.tb_normal	.rt	 img				{ width:10px; height:19px;}
	.B1100	.tbox	.tb_normal	.lt	img				{ width:10px; height:19px;}
	
	.B1200	.imgbox	dl	dt													{ font-size:25px; padding-bottom:50px; margin-bottom:20px;}
	.B1200	.txtbox1	li														{ width:100%;}
	.B1200	.txtbox1	li	dl													{ width:90%; height:auto; padding:5%; margin-bottom:3%;}
	.B1200	.txtbox1	li	dl	dt												{ font-size:16px;}
	.B1200	.txtbox1	li	dl	dd											{ font-size:13px;}
	.B1200	.txtbox1	.lastli												{ float:left; width:90%; height:auto; padding:5%; margin-bottom:0;}	
	.B1200	.txtbox2	dl	dt													{ font-size:16px;}
	.B1200	.txtbox2	dl	dd												{ font-size:13px;}
	.B1200	.txtbox3														{ height:300px;}
	.B1200	.txtbox3	strong											{ font-size:25px; padding-top:15px;}

	.B1300	.imgbox	dl	dt													{ font-size:25px; padding-bottom:50px; margin-bottom:20px;}
	.B1300	.txtbox1	li														{ width:100%;}
	.B1300	.txtbox1	li	dl													{ width:90%; height:auto; padding:5%; margin-bottom:3%;}
	.B1300	.txtbox1	li	dl	dt												{ font-size:16px;}
	.B1300	.txtbox1	li	dl	dd											{ font-size:13px;}
	.B1300	.txtbox1	.lastli												{ float:left; width:90%; height:auto; padding:5%; margin-bottom:0;}	
	.B1300	.txtbox2	dl	dt													{ font-size:16px;}
	.B1300	.txtbox2	dl	dd												{ font-size:13px;}
	.B1300	.txtbox3														{ height:300px;}
	.B1300	.txtbox3	strong											{ font-size:25px; padding-top:15px;}

	.B1400	.imgbox	dl	dt												{ font-size:25px; padding-bottom:50px; margin-bottom:20px;}
	.B1400	.txtbox1	li													{ width:100%;}
	.B1400	.txtbox1	li	dl												{ width:90%; height:auto; padding:5%; margin-bottom:3%;}
	.B1400	.txtbox1	li	dl	dt											{ font-size:16px;}
	.B1400	.txtbox1	li	dl	dd											{ font-size:13px;}
	.B1400	.txtbox1	.lastli												{ float:left; width:90%; height:auto; padding:5%; margin-bottom:0;}	
	.B1400	.txtbox2	dl	dt												{ font-size:16px;}
	.B1400	.txtbox2	dl	dd												{ font-size:13px;}
	.B1400	.txtbox3														{ height:300px;}
	.B1400	.txtbox3	strong											{ font-size:25px; padding-top:15px;}

	.contactus	.btn_st	input 												{ width:100px; height:30px; font-size:13px;}

}





@media all and (max-width:400px) {
	.btn_side i																				{ margin:15px 0 0 10px; }
	#Suballbg	#Mainheader														{ height:40px;}
	#Suballbg	#Mainheader	#headerbox									{ height:40px;}
	#Suballbg	#Mainheader	#headerbox	 .logo						{ width:auto; margin-top:10px;}
	#Suballbg	#Mainheader	#headerbox	 .logo	 img				{ width:48%; height:auto;}

	#Subelement																			{ top:45px; height:100px;}
	#Subelement	.elementbox														{ height:100px;}
	#Subelement	.Subtext										{ display:none}

	#MainContents																		{ width:100%; margin:100px 0 0 0;}
	.titleroad																					{ height:30px; padding:15px 0 0 0; margin-top:20px;}
	.titleroad	.Subtitle																	{ position:relative; float:left; width:100%; height:18px; font-size:16px;}
	.titleroad	.Position																	{ position:relative; float:left; width:100%; clear:both; margin-left:5px;}
	
	#Footer																					{ height:135px; margin-top:40px;}	 
	#Footer    #Copyright  .copyrights2											{ top:57px; font-size:11px;}		
	#Footer    #Copyright  .copybox	.bottommap	.ad2					{ font-size:11px;}
	#Footer    #Copyright  .copybox	.bottommap	.ad2	span			{ font-size:10px;}
	
	.tabmenu										{ height:auto;}
	.tabmenu a									{ width:100%; height:30px; line-height:30px; border-right:1px solid #d0d0d0;}
	.tabmenu a span							{ height:30px; line-height:30px; font-size:13px;}
	.tabmenu a.on span						{ font-size:13px;}


	.A1000	li	dl	dt										{ font-size:20px; padding-bottom:30px; margin-bottom:10px; color:#5A5046; text-align:center; background:url(../img/btn_line_m.gif) center bottom no-repeat; letter-spacing:0;}
	.A1000	.list_a	dl	dd	p	br					{ display:none;}
	.A1000	.list_a	dl	dd							{width:58%; height:130px;}
	.A1000	.list_a	.bg1								{ width:39%; height:130px; }

	.A2000	.li_st1	dl	dt													{ font-size:20px; padding-bottom:30px; margin-bottom:10px; background:url(../img/btn_line_m.gif) center bottom no-repeat;}
	.A2000	.li_st2	dl	dt													{ font-size:20px; padding-bottom:20px;}
	.A2000	.li_st2	ul	li	dl	dt											{ font-size:16px; padding-bottom:15px; margin-bottom:0;}
	.A2000	.li_st2	ul	li	dl	dd											{ line-height:18px;}
	.A2000	.nth_left															{ height:auto; padding-bottom:5%; margin-bottom:5%; border-bottom:1px dashed #dfdfdf;}
	.A2000	.nth_left	dl,														
	.A2000	.nth_right	dl													{ width:100%;}
	.A2000	.nth_right														{ height:auto; padding-bottom:5%; margin-bottom:5%; border-bottom:1px dashed #dfdfdf; border-left:0;}
	.A2000	.bg1,
	.A2000	.bg2,
	.A2000	.bg3,
	.A2000	.bg4																{ background-size:30% auto;}

	.A4000	li	dl	dt										{ font-size:18px; padding-bottom:30px; margin-bottom:10px; background:url(../img/btn_line_m.gif) center bottom no-repeat; }
	.A4000	li	dl	dt	 span							{ font-size:16px; padding:3px 7px 5px 7px;}
	.A4000	.txt_b	dl									{ width:100%;}
	.A4000	.txt_b	dl	dt								{ background:url(../img/btn_line_m.gif) center bottom no-repeat;}
	.A4000	.photo_b									{ position:relative;  float:left; width:100%; height:180px;}
	.A4000	.txt_c	dl	dd							{ width:100%; height:auto; font-size:13px;}
	.A4000	.txt_c	dl	dd:nth-child(2)			{ width:100%; height:auto;}
	.A4000	.txt_c	dl	dd	p						{ padding:5% 7%; text-align:justify;}
	.A4000	.txt_c	dl	dd	p	strong			{ padding-bottom:3%; font-size:14px;}
	.A4000	.txt_c	.none							{ width:100%; height:auto;}
	.A4000	.txt_d	dl	dd	dl	dt					{ font-size:16px;}

	.A5000	li	dl	dd	ul	li										{ background:none; line-height:18px;}
	.A5000	li	dl	dt	 img										{ width:65%; height:auto; padding-top:5px;}


	.B1100	ul	li	dl	dt										{ font-size:18px; padding-bottom:30px; margin-bottom:10px; background:url(../img/btn_line_m.gif) center bottom no-repeat; }
	.B1100	ul	li	dl	dt	 span							{ font-size:16px; padding:3px 7px 5px 7px;}

	.B1200	.imgbox	dl	dt								{ font-size:18px; padding-bottom:30px; margin-bottom:10px; background:url(../img/btn_line_m.gif) center bottom no-repeat;}
	.B1200	.imgbox	dl	dd							{ font-size:14px;}
	.B1200	.txtbox1	li	dl	dd						{ line-height:20px;}
	.B1200	.txtbox2	dl	dd							{line-height:20px; background:url(${BtnDott}) left 9px no-repeat;}
	.B1200	.txtbox3									{ height:220px;}
	.B1200	.txtbox3	strong						{ font-size:20px;}

	.B1300	.imgbox	dl	dt							{ font-size:18px; padding-bottom:30px; margin-bottom:10px; background:url(../img/btn_line_m.gif) center bottom no-repeat;}
	.B1300	.imgbox	dl	dd							{ font-size:14px;}
	.B1300	.txtbox1	li	dl	dd						{ line-height:20px;}
	.B1300	.txtbox2	dl	dd							{line-height:20px; background:url(${BtnDott}) left 9px no-repeat;}
	.B1300	.txtbox3									{ height:220px;}
	.B1300	.txtbox3	strong						{ font-size:20px;}

	.B1400	.imgbox	dl	dt							{ font-size:18px; padding-bottom:30px; margin-bottom:10px; background:url(../img/btn_line_m.gif) center bottom no-repeat;}
	.B1400	.imgbox	dl	dd							{ font-size:14px;}
	.B1400	.txtbox1	li	dl	dd						{ line-height:20px;}
	.B1400	.txtbox2	dl	dd							{line-height:20px; background:url(${BtnDott}) left 9px no-repeat;}
	.B1400	.txtbox3									{ height:220px;}
	.B1400	.txtbox3	strong						{ font-size:20px;}

}




    `}
  />
);

export default StyleS;
