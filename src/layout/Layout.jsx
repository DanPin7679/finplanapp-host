import React from "react";
import Simulator from "Simulator/Simulator"
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button'

import { uiAction } from "../store/ui-slice";

function Layout() {
    const open = useSelector((state) => state.ui.drawerIsVisible);
    const dispatch = useDispatch()
    const handleDrawerClose = () => {
        console.log("click")
        dispatch(uiAction.toggle());
      };

  return (
    <div>
        {open ? "Vrai":"False"}
        <Button variant="outlined" onClick={handleDrawerClose}>Click</Button>
      <h1>Layout from Host</h1>
      <Simulator />
    </div>
  );
}

export default Layout;