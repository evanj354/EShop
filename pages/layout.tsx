import Head from 'next/head';
import { Navbar, NavLink, Form, InputGroup, FormControl, Nav, Button, Row, Col, Container, Dropdown, DropdownButton, NavItem } from 'react-bootstrap'
import React, { useState } from 'react';
import axios from 'axios';
import { store, persistor } from './store/store';
import { addItem } from './actions/cart';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const Layout = (props) => {
    const [searchField, updateSearchField] = useState("");
    const [searchResults, updateSearchResults] = useState([]);
    const url = 'http://localhost:3000/';

    const handleSubmit = (event) => {
        updateSearchResults([])
        event.preventDefault();
        axios.post(url+'search',
            {
                searchField: searchField
            }
        )
        .then((response) => {
            console.log(`Response: ${response}`);
            updateSearchResults([response.data.searchResults]);
            
        }, (error) => {
            console.log(error);
        });
    }

    const handleChange = input => (event) => {
        input(event.target.value);
    }


    return (
        <Provider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
            >
            <div>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </Head>

                <Navbar bg="dark" className="container-fluid">
                    <Col md={2} xs={1}></Col>
                    <Col md={7} xs={6}>
                        <Form onSubmit={handleSubmit}>
                            <InputGroup >
                                <FormControl onChange={handleChange(updateSearchField)}/>
                                <InputGroup.Append>
                                    <Button type="submit" id="basic-addon1" variant="outline-info"><i className="fa fa-search " aria-hidden="true"></i></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form> 
                    </Col>
                    <Col md={2} xs={3}>
                        <Nav className="d-flex space-between flex-md-row flex-column align-items-center justify-content-center" >
                            <Button className="mr-md-1 mb-md-0 mb-1" size="sm" variant="outline-info" href="/">Home</Button>
                            <Button className="ml-md-1" size="sm" variant="outline-info" href="/login">Login</Button>
                        </Nav>
                    </Col>
                    <Col md={1} xs={2}>
                        <Button className="align-self-start" variant="outline-info" href="/cart" size="sm">
                            <i className="fa fa-shopping-basket fa-lg" aria-hidden="true"></i>
                        </Button>

                    </Col>
                </Navbar>
                {props.children(searchResults, handleChange)}
            </div>
            </PersistGate>
        </Provider>
    )
}


export default Layout;