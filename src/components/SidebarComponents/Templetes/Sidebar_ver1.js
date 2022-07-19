/*Main, NewUploadComplete에 들어간 Sidebar*/

import React from "react";
import styled from "styled-components";

import SidebarTopMenu from "../Organisms/ver1/Sidebar_ver1_TopMenu";
import SidebarBottomMenu from "../Organisms/ver1/Sidebar_ver1_BottomMenu";
import SidebarMostBottomImg from "../Organisms/ver1/Sidebar_ver1_MostBottomImg";

function SidebarVer1() {
    return(
        <Warp>
            <SidebarTopMenu />
            <SidebarBottomMenu />
            <SidebarMostBottomImg />
        </Warp>
    );
}
const Warp = styled.div`
    width: 200px;
`

export default SidebarVer1;