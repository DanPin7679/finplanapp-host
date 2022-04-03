import React from "react";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Simulator from "Simulator/Simulator";
import Dashboard from "../Dashboard";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <InboxIcon />,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tools",
    key: "tools",
    icon: <MailIcon />,
    route: "/tools",
    component: <Simulator />,
  },
];

export default routes;
