import { Form, FormGroup, FormLabel, FormControl, FormText, Button, Alert } from "react-bootstrap";
import Layout from './layout';
import React from "react";


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            retypePassword: '',
            flashMessage: '',
        }
    }

    static async getInitialProps(context) {
        let query = context.query;
        console.log(query);
        return {query};
    }

    handleSubmit = (event) => {
        console.log("SUBMITTED");
        console.log(this.state)
        console.log(this.props.query);
    }

    handleInputChange = (event) => {
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
    }

    render() {
        return (
        <Layout>
            {(parent) => 
                <div className="mt-5">
                    <Form className="container card card-body col-md-6 m-auto pb-3 d-flex flex-column" onSubmit={this.handleSubmit} method="post">
                        <h1>Register</h1> 
                        <FormGroup controlId="formEmail">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl type="email" name="email" onChange={this.handleInputChange} placeholder="Email"/>
                            <FormText className="text-muted">We will never share your email.</FormText>
                        </FormGroup>
                        <FormGroup controlId="formPassword">
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" name="password" onChange={this.handleInputChange} placeholder="Password"/>
                        </FormGroup>
                        <FormGroup controlId="formPassword">
                            <FormLabel>Retype Password</FormLabel>
                            <FormControl type="password" name="retypePassword" onChange={this.handleInputChange} placeholder="Retype Password"/>
                        </FormGroup>
                        { this.props.query.flashMessage && (
                                <Alert variant="danger">
                                    <p style={{marginBottom: 0}}>{this.props.query.flashMessage}</p>
                                </Alert>
                            )
                        }
                        <Button variant="outline-info" type="submit">Register</Button>
                    </Form>
                </div>
            }
        </Layout>
        )
    }   
}


export default Register;