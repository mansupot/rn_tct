
import React, { Component } from 'react';
import { Router , Stack , Scene } from 'react-native-router-flux';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={LoginPage} title="Login" initial={true}/>
                    <Scene key="home" component={HomePage} title="Home"/>
                </Stack>
            </Router>
        );
    }
}
export default Routes;
