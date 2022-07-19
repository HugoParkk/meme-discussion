import React from "react";

import SidebarVer1 from "../components/SidebarComponents/Templetes/Sidebar_ver1";
import SidebarVer2 from "../components/SidebarComponents/Templetes/Sidebar_ver2";

function Sidebar(props){
  const Version = props.data;

  return (
    <>
    {Version === 0 ? (<SidebarVer1 />) : (<SidebarVer2 />) }
    </>
  );
}





export default Sidebar;
