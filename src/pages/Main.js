import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
// import Popup from '../components/Popup';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

//----images----

import twinkle from '../images/main_page/twinkle_bg_c.png';
import Card from '../images/main_page/Card_a.png';
import plus_box from '../images/main_page/plus_box.png';

import JJalSell from '../images/main_page/JJal_sellMain.png'

function Main() {
  return (
    <div>
      <Warp>
      <Header />
      <ul style={{display :'flex', listStyle:'none'}}>
        <li><div id="main-sidebar"><Sidebar /></div></li>
        <li><MainMiddle>
        <div id="best_JJal">
          <div id='text' >BEST ZZAL : 내가 제일 '짤'나가 <span>더보기 <img src={plus_box}></img></span></div>
          <div className="card_set">
            <div className="card">
              <img src={Card} />
            </div>
          
            <div className="card center">
              <img src={Card} />
            </div>
          
            <div className="card">
              <img src={Card} />
            </div>
          </div>
          
          
        </div>
        <div id="Rank">
       
        </div>
          </MainMiddle>
          {/* <div id="main-popup"><Popup /></div> */}
        
      </li>

      </ul >


    {/* <div id="main-popup"><Popup /></div> */ }
    < Footer />
      </Warp >
    </div >
  );
}

const MainMiddle = styled.div`
  display: flex;
  margin: 50px auto;
  padding: 0;
  position: relative;
  #best_JJal{
    width: 670px;
    height: 424px;
    background: url(${twinkle});
    
    margin: auto 14px;
    border: 4px solid #ccc;
    outline: 2px solid #000;
    #text{
      font-size: 18px;

      /* border-bottom: 2px solid #cfcfcf; */
      padding: 10px;
      margin-left: 10px;
      span{
        font-size: 12px;
        font-weight: bold;
        margin-left: 325px;
      }
    }
    .card{
    margin: auto -8px;
    img{
      width: 238px;
      height: 342px;
    }

  }
  .card_set{
    display: flex;
    justify-content: center;
    /* top: 50px; */
    /* position: relative; */
    
    .center{
      margin-bottom: 60px;
        }
    
  } 
  
  }
  
  #Rank{
    width: 172px;
    height: 432px;
    background: magenta;
  }
`

const MainTop = styled.div`
`

const Warp = styled.div`
position: relative;
width: 1080px;
margin: 0 auto;
#main-popup{
  position: absolute;
  margin: 0 100px;
}
#main-sidebar{
  position: static;
  left: 1px;
}
#main-contents{
  position: relative;
  width: 850px;
  top: 40px;
  left: 230px;
}
`


export default Main;
