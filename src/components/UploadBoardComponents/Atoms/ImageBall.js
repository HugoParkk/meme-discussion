import React, { useState } from "react";

function ImageBall(props) {
  const [url] = useState(props.back);

  const BackgroundImage = {
    width: `1.1979vw`,
    height: `1.1979vw`,
    borderRadius: `50%`,
    backgroundImage: `url(${url})`,
    display: `inline-block`,
    margin: `0`,
    marginTop: `0.2604vw`,
    marginRight: `0.2604vw`,
    marginLeft: `0.2604vw`,
    cursor: `pointer`,
    backgroundSize: "cover",
  };
  const sendUrl = (e) => {
    props.getUrl(url);
  };

  return (
    <>
      <div style={BackgroundImage} onClick={sendUrl} />
    </>
  );
}

export default ImageBall;
