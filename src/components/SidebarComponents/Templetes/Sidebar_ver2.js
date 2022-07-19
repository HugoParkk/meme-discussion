/*Permission, ProductDetail, ProductList에 들어간 Sidebar */

import React from "react";

import SidebarTopMenu from "../Organisms/ver2/Sidebar_ver2_TopMenu";
import SidebarBottomMenu from "../Organisms/ver2/Sidebar_ver2_BottomMenu";
import SidebarMostBottomImg from "../Organisms/ver2/Sidebar_ver2_MostBottomImg";
import styled from "styled-components";

function SidebarVer2() {
    return(
        <Warp>
            <SidebarTopMenu />
            <SidebarBottomMenu />
            <SidebarMostBottomImg />
        </Warp>
    );
}

const Warp = styled.div`
    width: 208px;
`

export default SidebarVer2;