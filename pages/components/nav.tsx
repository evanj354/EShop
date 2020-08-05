import Head from 'next/head';
import { Navbar, NavLink, Form, InputGroup, FormControl, Nav, Button, Row, Col, Container, Dropdown, DropdownButton, NavItem } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import { Provider } from 'react-redux';
import { logout } from '../actions/auth';
import { PersistGate } from 'redux-persist/integration/react';
import { connect } from 'react-redux';


const ShopNavbar = (props) => {
    let [authButton, updateAuthButton] = useState(false);


    const handleAuthenticate = () => {
        if (props.authenticated) {
            axios.get('/logout')
                .then((response) => {
                    console.log('SUCCESSFUL LOGOUT, ', Cookies.get('token'));
                    props.reduxLogout();
                }, (err) => {
                    console.log(err);
                })
        }
        else {
            window.location.href = '/login';
        }
    }

    useEffect(() => {
       updateAuthButton(props.authenticated);
    },[props.authenticated]);

    
    return (
        <div>
            <Navbar bg="dark" className="container-fluid">
                <Col md={2} xs={1}></Col>
                <Col md={7} xs={6}>
                    <Form onSubmit={props.handleSubmit}>
                        <InputGroup >
                            <FormControl onChange={props.handleChange(props.updateSearchField)}/>
                            <InputGroup.Append>
                                <Button type="submit" id="basic-addon1" variant="outline-info"><i className="fa fa-search " aria-hidden="true"></i></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form> 
                </Col>
                <Col md={2} xs={3}>
                    <Nav className="d-flex space-between flex-md-row flex-column align-items-center justify-content-center" >
                        <Button className="mr-md-1 mb-md-0 mb-1 font-weight-bold" size="sm" variant="outline-info" href="/">Home</Button>
                        <Button 
                            className="ml-md-1 font-weight-bold" 
                            size="sm" variant="outline-info" 
                            onClick={() => handleAuthenticate()}
                            >
                                {props.authenticated ? 'Logout' : 'Login'}
                        </Button>
                    </Nav>
                </Col>
                <Col md={1} xs={2}>
                    <Button className="align-self-start" variant="outline-info" href="/cart" size="sm">
                        <i className="fa fa-shopping-basket fa-lg" aria-hidden="true"></i>
                    </Button>

                </Col>
            </Navbar>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduxLogout: () => { dispatch(logout()) }
    };
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.authReducer.loggedIn
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ShopNavbar);

