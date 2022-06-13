import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Popup from '../components/Popup';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SellingImg from "../images/Vector.png"

import JJalSell from '../images/main_page/JJal_sellMain.png'

function Main() {
  return (
    <div>
      <Warp>
        <Header />
        <div id="main-sidebar"><Sidebar /></div>
        <div id="main-contents">
          <MainTop>
            <div id="plsSell"><img src={JJalSell} alt="그짤파실래"></img></div>
            <div id="Notice-Update"></div>
          </MainTop>
          <MainMiddle>
            <div id="best_JJal">
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
        </div>
        <Footer />
      </Warp>
    </div>
  )
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
    
    margin: auto 15px;
    border: 4px solid #ccc;
    outline: 2px solid #000;
    .card{
    margin: auto 0;
    img{
      width: 208px;
      height: 312px;
      
    }
    .center{
      top: 50px;
    }
  }
  .card_set{
    display: flex;
    left: 50%;
    right: 50%;

    
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
  position: absolute;
  display: block;
  left: 0;
}
#main-contents{
  position: relative;
  width: 850px;
  top: 40px;
  left: 230px;
}
`

export default Main