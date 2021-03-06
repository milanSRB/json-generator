import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import {Container} from "@material-ui/core";

import UploadPage from './components/pages/UploadPage';
import EditPage from './components/pages/EditPage';
import Navigation from './components/molecules/Navigation';

import './App.css';

function App(props) {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/edit" component={EditPage}/>
                <Route path="/" component={UploadPage}/>
            </Switch>
            {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
            {props.children}
        </Router>
    );
}

export default App;
