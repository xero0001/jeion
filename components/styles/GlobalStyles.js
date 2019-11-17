import tw from "tailwind.macro";
import { Global, css } from "@emotion/core";

import Section1Bg1 from "../../public/images/section1_bg1.jpg";
import Section1Bg2 from "../../public/images/section1_bg2.jpg";
import Section1Bg3 from "../../public/images/section1_bg3.jpg";
import Section1Bg4 from "../../public/images/section1_bg4.jpg";

import Line from "../../public/images/line.gif";

const GlobalStyles = () => (
  <Global
    styles={css`
		@CHARSET "UTF-8";

		.PT5							{ padding-top:5px;}
		.PT10						{ padding-top:10px;}
		.PT15						{ padding-top:15px;}
		.PT20						{ padding-top:20px;}
		.PT25						{ padding-top:25px;}
		.PT30						{ padding-top:30px;}
		.PT35						{ padding-top:35px;}
		.PT40						{ padding-top:40px;}
		.PT45						{ padding-top:45px;}
		.PT50						{ padding-top:50px;}
		.PT55						{ padding-top:55px;}
		.PT60						{ padding-top:60px;}
		.PT65						{ padding-top:65px;}
		.PT70						{ padding-top:70px;}
		.PT75						{ padding-top:75px;}
		.PT80						{ padding-top:80px;}
		.PT85						{ padding-top:85px;}
		.PT90						{ padding-top:90px;}
		.PT95						{ padding-top:95px;}
		.PT100						{ padding-top:100px;}
		
		.PL5								{ padding-left:5px;}
		.PL10							{ padding-left:10px;}
		.PL15							{ padding-left:15px;}
		.PL20							{ padding-left:20px;}
		.PL25							{ padding-left:25px;}
		.PL30							{ padding-left:30px;}
		.PL35							{ padding-left:35px;}
		.PL40							{ padding-left:40px;}
		.PL45							{ padding-left:45px;}
		.PL50							{ padding-left:50px;}
		.PL55							{ padding-left:55px;}
		.PL60							{ padding-left:60px;}
		.PL65							{ padding-left:65px;}
		.PL70							{ padding-left:70px;}
		.PL75							{ padding-left:75px;}
		.PL80							{ padding-left:80px;}
		.PL85							{ padding-left:85px;}
		
		
		.PB10						{ padding-bottom:10px;}
		.PB15						{ padding-bottom:15px;}						
		.PB20						{ padding-bottom:20px;}
		.PB25						{ padding-bottom:25px;}
		.PB30						{ padding-bottom:30px;}
		.PB35						{ padding-bottom:35px;}
		.PB40						{ padding-bottom:40px;}
		.PB45						{ padding-bottom:45px;}
		.PB50						{ padding-bottom:50px;}
		.PB55						{ padding-bottom:55px;}
		.PB60						{ padding-bottom:60px;}
		.PB65						{ padding-bottom:65px;}
		.PB70						{ padding-bottom:70px;}
		.PB75						{ padding-bottom:75px;}
		.PB80						{ padding-bottom:80px;}
		.PB85						{ padding-bottom:85px;}
		.PB90						{ padding-bottom:90px;}
		.PB95						{ padding-bottom:95px;}
		.PB100						{ padding-bottom:100px;}
		
		
		.PR5								{ padding-right:5px;}
		.PR10							{ padding-right:10px;}
		.PR15							{ padding-right:15px;}
		.PR20							{ padding-right:20px;}
		.PR25							{ padding-right:25px;}
		.PR30							{ padding-right:30px;}
		.PR35							{ padding-right:35px;}
		.PR40							{ padding-right:40px;}
		.PR45							{ padding-right:45px;}
		.PR50							{ padding-right:50px;}
		.PR55							{ padding-right:55px;}
		.PR60							{ padding-right:60px;}
		.PR65							{ padding-right:65px;}
		.PR70							{ padding-right:70px;}
		.PR75							{ padding-right:75px;}
		.PR80							{ padding-right:80px;}
		.PR85							{ padding-right:85px;}
		.PR90							{ padding-right:90px;}
		.PR95							{ padding-right:95px;}
		.PR100							{ padding-right:100px;}
		
		
		.MT10						{ margin-top:10px;}
		.MT15						{ margin-top:15px;}
		.MT20						{ margin-top:20px;}
		.MT25						{ margin-top:25px;}
		.MT30						{ margin-top:30px;}
		.MT35						{ margin-top:35px;}
		.MT40						{ margin-top:40px;}
		.MT45						{ margin-top:45px;}
		.MT50						{ margin-top:50px;}
		.MT55						{ margin-top:55px;}
		.MT60						{ margin-top:60px;}
		.MT65						{ margin-top:65px;}
		.MT70						{ margin-top:70px;}
		.MT75						{ margin-top:75px;}
		.MT80						{ margin-top:80px;}
		.MT85						{ margin-top:85px;}
		.MT90						{ margin-top:90px;}
		.MT95						{ margin-top:95px;}
		.MT100						{ margin-top:100px;}
		
		
		.MTM10						{ margin-top:-10px;}
		.MTM15						{ margin-top:-15px;}
		.MTM20						{ margin-top:-20px;}
		.MTM25						{ margin-top:-25px;}
		.MTM30						{ margin-top:-30px;}
		.MTM35						{ margin-top:-35px;}
		.MTM40						{ margin-top:-40px;}
		.MTM45						{ margin-top:-45px;}
		.MTM50						{ margin-top:-50px;}
		.MTM55						{ margin-top:-55px;}
		.MTM60						{ margin-top:-60px;}
		.MTM65						{ margin-top:-65px;}
		.MTM70						{ margin-top:-70px;}
		.MTM75						{ margin-top:-75px;}
		.MTM80						{ margin-top:-80px;}
		.MTM85						{ margin-top:-85px;}
		.MTM90						{ margin-top:-90px;}
		.MTM95						{ margin-top:-95px;}
		.MTM100					{ margin-top:-100px;}
		.MTM200					{ margin-top:-200px;}
		.MTM300					{ margin-top:-300px;}
		.MTM400					{ margin-top:-400px;}
		.MTM500					{ margin-top:-500px;}
		.MTM600					{ margin-top:-600px;}
		
		
		
		.ML5								{ margin-left:5px;}
		.ML10							{ margin-left:10px;}
		.ML15							{ margin-left:15px;}
		.ML20							{ margin-left:20px;}
		.ML25							{ margin-left:25px;}
		.ML30							{ margin-left:30px;}
		.ML35							{ margin-left:35px;}
		.ML40							{ margin-left:40px;}
		.ML45							{ margin-left:45px;}
		.ML50							{ margin-left:50px;}
		.ML55							{ margin-left:55px;}
		.ML60							{ margin-left:60px;}
		.ML65							{ margin-left:65px;}
		.ML70							{ margin-left:70px;}
		.ML75							{ margin-left:75px;}
		.ML80							{ margin-left:80px;}
		.ML85							{ margin-left:85px;}
		
		
		.MB10						{ margin-bottom:10px;}
		.MB15						{ margin-bottom:15px;}
		.MB20						{ margin-bottom:20px;}
		.MB25						{ margin-bottom:25px;}
		.MB30						{ margin-bottom:30px;}
		.MB35						{ margin-bottom:35px;}
		.MB40						{ margin-bottom:40px;}
		.MB45						{ margin-bottom:45px;}
		.MB50						{ margin-bottom:50px;}
		.MB55						{ margin-bottom:55px;}
		.MB60						{ margin-bottom:60px;}
		.MB65						{ margin-bottom:65px;}
		.MB70						{ margin-bottom:70px;}
		.MB75						{ margin-bottom:75px;}
		.MB80						{ margin-bottom:80px;}
		.MB85						{ margin-bottom:85px;}
		.MB90						{ margin-bottom:90px;}
		.MB95						{ margin-bottom:95px;}
		.MB100						{ margin-bottom:100px;}
		
		
		.MR5								{ margin-right:5px;}
		.MR10							{ margin-right:10px;}
		.MR15							{ margin-right:15px;}
		.MR20							{ margin-right:20px;}
		.MR25							{ margin-right:25px;}
		.MR30							{ margin-right:30px;}
		.MR35							{ margin-right:35px;}
		.MR40							{ margin-right:40px;}
		.MR45							{ margin-right:45px;}
		.MR50							{ margin-right:50px;}
		.MR55							{ margin-right:55px;}
		.MR60							{ margin-right:60px;}
		.MR65							{ margin-right:65px;}
		.MR70							{ margin-right:70px;}
		.MR75							{ margin-right:75px;}
		.MR80							{ margin-right:80px;}
		.MR85							{ margin-right:85px;}
		.MR90							{ margin-right:90px;}
		.MR95							{ margin-right:95px;}
		.MR100							{ margin-right:100px;}
		
		
		
		.left_wd15					{ float:left; width:15%;}
		.left_wd20					{ float:left; width:20%;}
		.left_wd25					{ float:left; width:25%;}
		.left_wd30					{ float:left; width:30%;}
		.left_wd35					{ float:left; width:35%;}
		.left_wd40					{ float:left; width:40%;}
		.left_wd45					{ float:left; width:45%;}
		.left_wd50					{ float:left; width:50%;}
		.left_wd55					{ float:left; width:55%;}
		.left_wd60					{ float:left; width:60%;}
		.left_wd65					{ float:left; width:65%;}
		.left_wd70					{ float:left; width:70%;}
		.left_wd75					{ float:left; width:75%;}
		
		
		.right_wd15					{ float:right; width:15%;}
		.right_wd20					{ float:right; width:20%;}
		.right_wd25					{ float:right; width:25%;}
		.right_wd30					{ float:right; width:30%;}
		.right_wd35					{ float:right; width:35%;}
		.right_wd40					{ float:right; width:40%;}
		.right_wd45					{ float:right; width:45%;}
		.right_wd50					{ float:right; width:50%;}
		.right_wd55					{ float:right; width:55%;}
		.right_wd60					{ float:right; width:60%;}
		.right_wd65					{ float:right; width:65%;}
		.right_wd70					{ float:right; width:70%;}
		.right_wd75					{ float:right; width:75%;}
		
		.txt_left						{ text-align:left;}
		.txt_right						{ text-align:right;}
		
		.txt_color1					{ color:#343434;}
		
		.wd_normal					{ width:100%; display:inline-block;}
		
		.txt_size10						{ font-size:10px;}
		.txt_size11						{ font-size:11px;}
		.txt_size12						{ font-size:12px;}
		.txt_size13						{ font-size:13px;}
		.txt_size14						{ font-size:14px;}
		.txt_size15						{ font-size:15px;}
		.txt_size16						{ font-size:16px;}
		.txt_size17						{ font-size:17px;}
		.txt_size18						{ font-size:18px;}
		.txt_size19						{ font-size:19px;}
		.txt_size20						{ font-size:20px;}
		.txt_size21						{ font-size:21px;}
		.txt_size22						{ font-size:22px;}
		.txt_size23						{ font-size:23px;}
		.txt_size24						{ font-size:24px;}
		.txt_size25						{ font-size:25px;}
		.txt_size26						{ font-size:26px;}
		.txt_size27						{ font-size:27px;}
		.txt_size28						{ font-size:28px;}
		.txt_size29						{ font-size:29px;}
		.txt_size30						{ font-size:30px;}
		.txt_size31						{ font-size:31px;}
		.txt_size32						{ font-size:32px;}
		.txt_size33						{ font-size:33px;}
		.txt_size34						{ font-size:34px;}
		.txt_size35						{ font-size:35px;}
		.txt_size36						{ font-size:36px;}
		.txt_size37						{ font-size:37px;}
		.txt_size38						{ font-size:38px;}
		.txt_size39						{ font-size:39px;}
		.txt_size40						{ font-size:40px;}

    `}
  />
);

export default GlobalStyles;
