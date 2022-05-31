import React from 'react'
import styled from 'styled-commponent';

function Sidebar() {
  return (
    <div>
      <SideMenuBar>
        <div id="UpSideMenu">
          <div id="BookMarkIcon">
            <img src="#" alt="북마크아이콘"></img>
          </div>

          <div id="tab-title">
            <ul>
              <li>카페정보</li>
              <li>나의활동</li>
            </ul>
          </div>

          <div id = "Userinfo">
            <div id = "Userprofile">
              <img src = "#" alt = "프로필이미지"></img>
              <div id ="GradeBox"><p id = "GradeManager">매니저</p>주인짱</div>
              <ul id ="Profile-info">
                <li>since 2002.02.02.</li>
                <li>카페소개</li>
              </ul>
            </div>

            <div id = "CafeInfo">
              <div id = "Queen"><img src = "#" alt = "Queen아이콘"></img>퀸</div>
              <ul>
                <li id = "CafeInfo-Big">18,936,555<span>초대하기</span></li>
                <li>즐겨찾는 멤버<span>3,543,257 명</span></li>
                <li>게시판 구독수<span>2,463,669 회</span></li>
                <li>우리카페앱 수<span>152,262 회</span></li>
              </ul>
            </div>

            <div id = "Category"><p id = "Topic">주제</p> 제테크  &gt; <p id = "NFT-big">NFT</p></div>

            <div id = "Btns">
              <ul>
                <li><button id = "ImageUploadBtn">짤 게시하기</button></li>
                <li><button>주인장 정화하기</button></li>
                <li><button>주인장 채팅하기</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div id = "DownSideMenu"></div>
      </SideMenuBar>
    </div>
  )
}
const SideMenuBar = styled.div`
`
export default Sidebar