// import './App.css';
import React, { useState } from "react";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Permission from "./pages/Permission";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Upload from "./pages/Upload";
import UploadComplete from "./pages/NewUploadComplete";
import { Link, Route, Switch } from "react-router-dom";

// react-responsive(반응형 웹을 만들기 위한 모듈 테스트)
import { useMediaQuery } from "react-responsive";
import img1 from "./images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg";

function App() {
  const [img, setImg] = useState(img1);
  const [name, setName] = useState("짤 이름");

  // react-responsive(반응형 웹을 만들기 위한 모듈 테스트)
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  console.log("isDesktop: ", isDesktop);
  console.log("isTablet: ", isTablet);
  console.log("isMobile: ", isMobile);

  return (
    <div className="App">
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/permission">
        <Permission />
      </Route>
      <Route path="/productdetail">
        <ProductDetail />
      </Route>
      <Route path="/productlist">
        <ProductList />
      </Route>
      <Route path="/upload" component={() => <Upload name={name} img={img} setName={setName} setImg={setImg} />}>
      </Route>
      <Route exact path="/uploadcomplete" component={() => <UploadComplete name={name} img={img} />}>

      </Route>
      {/* 소통이 중요합니다. */}
    </div >
  );
}

export default App;
