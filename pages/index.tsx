import Head from 'next/head';
import { Navbar, Container, Col, Row } from 'react-bootstrap';
import Router from 'next/router';
import Layout from './layout'
import { useState, useEffect } from 'react';
import React from 'react';
import BuyItem from './components/buyItem';
import { SuccessFlash } from './components/flashMessage';


const Index = (props) => { 
    // let query = JSON.stringify(props.query);
    console.log(props);
    const [items, updateItems] = useState([]);

    useEffect(() => {
        Router.push('/', '/', {shallow: true});
    }, []);

    return (
        <Layout>
            {(parent) => 
            <div>
                
                <SuccessFlash 
                    message={props.query.flashMessage} 
                    class="text-center" 
                    visible={true}
                />

                <Container>
                    <Row>
                    {parent[0] && parent[0].map((item, i) => 
                        {if (item[1]) { return (
                            <Col key={i} className="align-items-center card card-body" md={6}>
                                <BuyItem 
                                    price={item[0]} 
                                    imgurl={item[1]}
                                    name={item[2]}
                                    url={item[3]}/>
                            </Col>)
                        }
                        }
                    )}
                    </Row>
                </Container>
            </div>
            }
        </Layout>
    );
}

Index.getInitialProps = async (context) => {
    
    let query = context.query;
    return {query};
}

export default Index;