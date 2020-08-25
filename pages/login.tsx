import { Form, FormGroup, FormLabel, FormControl, FormText, Button, Alert } from "react-bootstrap";
import Layout from './layout';
import { DangerFlash } from './components/flashMessage';
import React from "react";
import Router from 'next/router';

import axios from 'axios';

const url = 'http://localhost:3000/';


class Login extends React.Component<{ query: {flashMessage: string} }, {}> {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    // componentDidMount() {
    //     Router.push('/login', '/login', {shallow: true});
    // }

    static async getInitialProps(context) {
        let query = context.query;
        return {query};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            username: '',
            password: ''
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
        <Layout>
            {(parent) => 
                <div className="mt-5">
                    
                    <Form className="container card card-body rounded col-md-6 m-auto d-flex flex-column" action="/login" method="post">
                        <h1>Login Here</h1> 
                        <FormGroup controlId="formEmail">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl type="email" name="email" onChange={this.handleInputChange} placeholder="Email"/>
                            <FormText className="text-muted">We will never share your email.</FormText>
                        </FormGroup>
                        <FormGroup controlId="formPassword">
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" name="password" onChange={this.handleInputChange} placeholder="Password"/>
                            <FormText className="text-muted"></FormText>
                        </FormGroup>
                        <DangerFlash message={this.props.query.flashMessage}></DangerFlash>
                        <FormGroup className="d-flex justify-content-between align-items-start">
                            <Button variant="outline-info" type="submit">Login</Button>
                            <FormGroup className="d-flex flex-column align-items-end" controlId="register">
                                <Button variant="outline-info" href="/register">Register</Button>
                                <FormText className="text-muted">New? Register for an Account</FormText>
                            </FormGroup>
                        </FormGroup>
                    </Form>
                </div>
            }
        </Layout>
        )
    }
    
}

export default Login;