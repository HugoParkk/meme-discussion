import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function UploadComplete() {
    return(
        <>
            <Header />
            <Sidebar />
            <Tag>업로드 완료 페이지 입니다</Tag>
            <Footer />
        </>
    );
}

const Tag = styled.div`
    font-size: 100px;
`;

export default UploadComplete;