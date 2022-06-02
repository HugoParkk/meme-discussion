import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <div>
      <PageFooter>
        <div>
        <span>밈품명품</span><span id='url'>https://cafe.never.com/mimpum</span>
        </div>
      </PageFooter>
    </div>
  );
}

const PageFooter = styled.div`
font-size: 12px;
div {
  height: 190px;
  width: 1080px;
  border-top: 2px solid #333333;
  margin: 0 auto;
  display:flex;
  line-height: 80px;
}

#url {
  margin: 0 50px;
}
`



export default Footer;