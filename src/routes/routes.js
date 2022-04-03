import React from "react";
import Icon from "@mui/material/Icon";
import Simulator from "Simulator/Simulator";
import Dashboard from "../Dashboard";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tools",
    key: "tools",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tools",
    component: <Simulator />,
  },
];

export default routes;
