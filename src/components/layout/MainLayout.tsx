import { Box, Toolbar } from "@mui/material";
import React from "react";
import Topbar from "../common/tabbar/Topbar";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import Sidebar from "../common/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box display="flex">
      <Topbar />
      <Box component="nav" width={sizeConfigs.sidebar.width} flexShrink="0">
        <Sidebar />
      </Box>
      <Box
        component="main"
        flexGrow={1}
        p={3}
        width={`calc(100% - ${sizeConfigs.sidebar.width})`}
        minHeight="100vh"
        bgcolor={colorConfigs.mainBg}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
