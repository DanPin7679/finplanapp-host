import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import MiniDrawer from "./drawer/Drawer";

import { uiAction } from "../store/ui-slice";

function Layout() {
    const open = useSelector((state) => state.ui.drawerIsVisible);
    const dispatch = useDispatch()
    const handleDrawerClose = () => {
        console.log("click")
        dispatch(uiAction.toggle());
      };

  return (

      <MiniDrawer/>

  );
}

export default Layout;