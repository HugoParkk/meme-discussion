import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Popup from '../components/Popup';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

//----images----

import twinkle from '../images/main_page/twinkle_bg_c.png';
import Card from '../images/main_page/Card_a.png';

function Main() {
  return (
    <div>
      

      
      <Warp>
      <Header />
      <ul style={{display :'flex', listStyle:'none'}}>
        <li><div id="main-sidebar"><Sidebar /></div></li>
        <li><MainMiddle>
        <div id="best_JJal">
          <div id='text' >BEST ZZAL:내가 제일 '짤'나가</div>
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
      </MainMiddle></li>

      </ul>
      
      
        {/* <div id="main-popup"><Popup /></div> */}
        
        <Footer />
      </Warp>
    </div>
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
      font-weight: bold;
      /* border-bottom: 2px solid #cfcfcf; */
      padding: 10px;
      margin-left: 10px;
    }
    .card{
    margin: auto -12px;
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
  left: 0;
}
`
const ul_style = `
  display:flex;
`

export default Main;
