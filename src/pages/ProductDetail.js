/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../components/Popup";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

//----images----
import img1 from "../images/Ellipse 3.png";
import img2 from "../images/fd7b8305ab14a05f23fc53a7405cd983.jpg";
import Zzal from"../images/BoardDetailZZAL.png";

import GradeLine from "../components/GradeBoardComponents/Atoms/GradeLine";
import BoardHeader from "../components/DetailBoardComponents/Molecules/BoardHeader";
import BoardContents from "../components/DetailBoardComponents/Molecules/BoardContents";
import BoardLine from "../components/DetailBoardComponents/Atoms/BoardLine";
import BoardBuyChat from "../components/DetailBoardComponents/Atoms/BoardBuyChat";
import BoardNFT from "../components/DetailBoardComponents/Atoms/BoardNFT";
import BoardBottomText from "../components/DetailBoardComponents/Atoms/BoardBottomText";
import BoardEmail from "../components/DetailBoardComponents/Atoms/BoardEmail";
import BoardBottomImage from "../components/DetailBoardComponents/Atoms/BoardBottomImage";
import BoardBottomLastText from "../components/DetailBoardComponents/Atoms/BoardBottomLastText";
import BoardFooterList from "../components/DetailBoardComponents/Molecules/BoardFooterList";
import GlobalBackground from '../components/GlobalBackground';
import down from '../images/plu.png';

function ProductDetail(props) {
  const { } = props;

  const [popup, handlerPopup] = useState(false);
  return (
    <>
      {popup && <Popup onClose={handlerPopup} />}
      <GlobalBackground>
        <Wrap>
          <Header />
          <Flex>
            <Sidebar data={1}/>
            
            <div id="con">
              <div id="buttons">
                <button class="nextBtn" onClick={() => { handlerPopup(true); }}><img src={down}/>다음글</button>
                <a href="http://localhost:3000/productlist"><button id="me">목록</button></a>
              </div>
              
              <div id="inWarp">
              
                <div id= "BoardTop">
                  <BoardHeader data={data} />
                  <GradeLine />
                </div>
                <div id="BoardContent">
                  <div id="BoardImg"><img src={img2}></img></div>
                  <div id="leftBoardArea">
                    <BoardContents data={data2} />
                    <BoardLine />
                    <BoardEmail />
                    <BoardNFT />
                    <BoardBuyChat />
                    <BoardBottomText />
                  </div>
                </div>
                <div id="BoardBottom">
                  <GradeLine2 />
                  <img src={Zzal}></img>
                  <p>디지털풍화 없는 고화질 짤 팝니다. 다른짤 묶어서 같이 구매하시면 네고해드려요~"</p>

                  <div id="borderBox"></div>
                </div>
              </div>
            </div>
          </Flex>

          <BoardFooterList data={data3} />

          <Footer />
        </Wrap>
      </GlobalBackground>
    </>
  );
}

const Flex = styled.div`
  margin-top: 38px;
  width: 900px;
  display: flex;

  
  #con{
    width: 890px;
    #buttons{
      .nextBtn{cursor: pointer;}
      #me{
        padding: 0 10px;
        cursor: pointer;
      }
      /* width: 128px;
      height: 30px; */
      margin: 2px 0 10px 10px;
      text-align: right;
      width: 860px;
      button{
        height: 30px;
        border: 1px solid #000;
        color: #fff;
        background: #FF50E2;
        border-radius: 3px;
        font-size: 12px;
        padding: 0 5px;
        margin: 0 5px;
        
        img{
          padding: 0 5px;
          
        }
      }
      
    }
  }
  #inWarp{
    width: 850px;
    height: 1700px;
    border: 4px solid #cfcfcf;
    background: #fff;
    outline: 2px solid #000;
    border: 4px solid #cfcfcf;
    margin-left: 20px;

    #BoardContent{
      position: relative;
      width: 750px;
      height: 550px;
      #BoardImg{
        width: 350px;
        height: 350px;
        background-color: #838383;
        border: 10px solid #838383;
        outline: 2px solid #000;
        display: inline-block;
        position: absolute;
        left:40px;
        img{
          width: 327px;
          height: 327px;
          border: 5px solid #838383;
          outline: 5px solid #D9D9D9;
          margin: 2.5px 0 0 2.5px;
        }
      }

      #leftBoardArea{
        position: absolute;
        left: 430px;
      }
    }

    #BoardBottom{
      padding: 0 0 0 25px;
      img{
        width: 620px;
        height: 310px;
        margin:  10px 0 0 35px;
      }
      p{
        font-size: 13px;
      }
      #borderBox{
        margin: 150px 0 0 0;
        width: 95%;
        height: 120px;
        border-top: #EBEBEA 2px solid;
        border-bottom: #EBEBEA 2px solid;
      }
    }
  }
`;

const Wrap = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

const GradeLine2 = styled.div`
  height: 1px;
  width: 95%;
  background-color: #ff50e2;
  margin-bottom: 20px;
`;


const data = {
  type: "pink",
  text: "방송캡쳐 >",
  text2: "짤 판매 제목",
  data: {
    cnt: "0",
    data: {
      src: img1,
      name: "판매자",
      rating: "열심회원",
      date: "2022.05.04 00:27 조회 5",
    },
  },
};

const data2 = [
  { text: "상품 상태", text2: "700*700", note: "px" },
  { text: "생성 날짜", text2: "2022.05.04", note: "209" },
];

const data3 = [
  {
    text: "제목제목제목제목제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
  },
  {
    text: "제목제목제목제목제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
  },
  {
    text: "제목제목제목제목제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
  },
  {
    text: "제목제목제목제목제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
  },
];

export default ProductDetail;
