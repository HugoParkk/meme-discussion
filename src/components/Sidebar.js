import React from 'react'
import styled from 'styled-components';

import bookmarkStar from './images/public_compoment/star_sideMenu.svg';
import profile from './images/public_compoment/profile.svg';



function Sidebar() {
  return (
    <div>
      <SideMenuBar>
        <div id="UpSideMenu">
          <div id="head">
          <div id="BookMarkIcon">
            <img src={bookmarkStar} alt="북마크아이콘"></img>
          </div>
          <div id="tab-title">
            <ul> 
              <li>카페정보</li>
              <li>나의활동</li>
            </ul>
          </div>
          
          <div id="Userinfo"></div>
            <div id="Userprofile">
              <img src={profile} alt="프로필이미지"></img>
              <span id="gradeBox">매니저</span>주인짱
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
  width: 200px;
  height: 965px;
  margin-top: 50px;
  border: 4px solid gray;
  background: #ccaafc;
  li{
    list-style: none;
  }
  
  

  #UpSideMenu{
    
  }

  #tab-title{
    
    ul{
      display: flex;
      padding-left: 5px;
      
      margin-top: 3px;
      margin-bottom: 0px;
      
    }
    li{
      font-size: 12px;
      padding: 7px;
      width: 70px;
      font-weight: 600;
    }
  }
  #BookMarkIcon{
    float: left;
    margin-left: 5px;
    margin-top: 3px;
  }
  #head{
    border-bottom: 2px solid gray;
    height: 40px;
    
  }


  #Userprofile{
    font-size: 12px;
    margin: 30px;
    img{
      float: left;
      margin-left: -20px;
      padding: 0;
    }
    #gradeBox{
      font-size: 9px;
      border: 1px solid #DBDBDB;
    }
  }
`
export default Sidebar