import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../../../components/Popup.js";

function HeaderBar(props) {
    const { } = props;
    const [popup, handlerPopup] = useState(false);

    return(
        <>
            {popup && <Popup onClose={handlerPopup} />}
            <MenuBar>
                <div id="header-search">
                    <input></input>
                    <button>검색</button>
                </div>

                <div id="header-bar-menu">
                    <ul>
                        <li>
                        <a href="http://localhost:3000/main">홈 화면</a>
                        </li>
                        <li>
                        <a href="#" onClick={() => { handlerPopup(true); }}>내가 제일 '짤' 나가</a>
                        </li>
                        <li>
                        <a href="http://localhost:3000/productlist">짤장터</a>
                        </li>
                        <li>
                        <a href="#" onClick={() => { handlerPopup(true); }}>짤 찾아 삼만리</a>
                        </li>
                        <li>
                        <a href="#" onClick={() => { handlerPopup(true); }}>공지사항</a>
                        </li>
                    </ul>
                </div>
            </MenuBar>
        </>
    );
}

const MenuBar = styled.div`
  width: 1080px;
  height: 46px;
  background: #000;
  position: relative;
  margin: -18px auto;

  a {
    text-decoration: none;
    color: #fff;
  }
  #header-search {
    height: 30px;
    padding: 10px 20px 0 0;
    width: 250px;
    float: right;
    display: flex;
    /* margin-right:px; */
  }
  button {
    height: 24px;
    border: 0;
    top: 0px;
    position: relative;
    width: 50px;
    background-color: #ff50e2;
    color: #fff;
    font-size: 7px;
  }
  input {
    height: 22px;
    border-radius: 0%;
    border: 0;
    width: 200px;
    margin-right: 1.5px;
    box-shadow: 0.2px 0.2px 4px 0px #ff50e2 inset;
  }
  ul {
    width: 450px;
    display: flex;
    color: white;
    list-style: none;
    padding: 3px;
    margin-left: 8px;
    margin-top: 4px;
  }
  li {
    padding: 10px;
    font-size: 12px;
  }
`;

export default HeaderBar;