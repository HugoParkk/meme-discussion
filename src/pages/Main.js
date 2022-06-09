import React from "react";
import Header from "../components/Header";
import Popup from "../components/Popup";
import styled from 'styled-components';

//----images----

import twinkle from '../images/main_page/twinkle_bg.png';
import Card from '../images/main_page/Card.png';

function Main() {
  return (
    <div>
      <Header />
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
      <Popup />
    </div>
  );
}

const MainMiddle = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  #best_JJal{
    width: 670px;
    height: 424px;
    background: url(${twinkle});
    
    margin: auto;
    border: 3px solid #ccc;
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
export default Main;
