import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Popup from '../components/Popup';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

//----images----

import twinkle from '../images/main_page/twinkle_bg.png';
import Card from '../images/main_page/Card.png';

function Main() {
  return (
    <div>
      

      
      <Warp>
      <Header />
      <div id="main-sidebar"><Sidebar /></div>
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
  left: 0;
}
`

export default Main;
