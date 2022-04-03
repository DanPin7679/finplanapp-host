import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./store";
import Layout from "./layout/Layout";

import "./index.css";

const App = () => (
    <Provider store={store}>
      <BrowserRouter><div className="container">
        <Layout/>
      </div></BrowserRouter>
      
    </Provider>
    
);

ReactDOM.render(<App />, document.getElementById("app"));
