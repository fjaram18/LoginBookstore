import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 



import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import AboutScreen from './screens/AboutScreen';

import Login from "./components/Login";

import { authProvider } from "./authProvider";
import { AzureAD, AuthenticationState } from "react-aad-msal";



const App = () => {
    return(
        <AzureAD provider={authProvider}>
            {({ login, authenticationState }) => {
                return (
                    <Router>
                         
                        <Switch>
                            
                            <Route
                                exact
                                path="/login"
                                component={Login}
                            ></Route>
     
                            <Route exact path='/'>
                                {(authenticationState === AuthenticationState.Authenticated) ? (
                                    <HomeScreen />
                                ) : (
                                    <Redirect to="/login" />
                                )}
                            </Route>
                            <Route path='/book/:id' component={BookScreen} />
                            <Route path='/about'>         
                                {(authenticationState === AuthenticationState.Authenticated) ? (
                                    <AboutScreen/>
                                ) : (
                                    <Redirect to="/login" />
                                )}
                            </Route>
                            <Footer/> 
                        </Switch>
                    </Router>
                );
            }}
        </AzureAD>
    );
}
export default App;