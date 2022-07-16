import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <div>
      {props.type === "upload" ? (
        <PageFooterUpload>
          <div>
            <span>밈품명품</span>
            <span id="url">https://cafe.never.com/mimpum</span>
          </div>
        </PageFooterUpload>
      ) : (
        <PageFooter>
          <div>
            <span>밈품명품</span>
            <span id="url">https://cafe.never.com/mimpum</span>
          </div>
        </PageFooter>
      )}
    </div>
  );
}

const PageFooterUpload = styled.footer`
  font-size: 0.7vw;
  div {
    height: 190px;
    width: 60vw;
    border-top: 2px solid #333333;
    margin: 0 auto;
    display: flex;
    line-height: 80px;
    top: 160px;
    position: relative;
  }

  #url {
    margin: 0 3vw;
  }
`;

const PageFooter = styled.footer`
  font-size: 0.6vw;
  div {
    height: 108px;
    width: 1080px;
    border-top: 2px solid #333333;
    margin: 0 auto;
    line-height: 80px;
  }

  #url {
    margin: 0 50px;
  }
`;

export default Footer;
