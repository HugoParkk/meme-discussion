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
          <div id="Userinfo">
            <div id="Userprofile">
              <img src="#" alt="프로필이미지"></img>
              <span id="gradeBox">매니저</span><p>주인짱</p>
              <ul id="profile-info">
                <li>since 2002.02.02.</li>
                <li>카페소개</li>
              </ul>
            </div>
            <div id="CafeInfo">
              <div id="Queen"><img src="#" alt="Queen아이콘"></img>퀸</div>

            </div>
          </div>
        </div>
      </SideMenuBar>
    </div>
  )
}
const SideMenuBar = styled.div`
`
export default Sidebar