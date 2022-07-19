import React, { useState } from "react";

function ImageBall(props) {
  const [url] = useState(props.back);

  const BackgroundImage = {
    width: `23px`,
    height: `23px`,
    borderRadius: `50%`,
    backgroundImage: `url(${url})`,
    display: `inline-block`,
    margin: `0`,
    marginTop: `5px`,
    marginRight: `5px`,
    marginLeft: `5px`,
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
