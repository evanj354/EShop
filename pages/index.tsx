import Head from 'next/head';
import { Navbar, Container, Col, Row } from 'react-bootstrap';
import Router from 'next/router';
import Layout from './layout'
import { useState, useEffect } from 'react';
import React from 'react';
import { connect, Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store/store';
import BuyItem from './components/buyItem';
import { SuccessFlash } from './components/flashMessage';
import { updateSearch } from './actions/search';
import Search from './components/search';


const Index = (props) => { 
    const [items, updateItems] = useState([]);

    useEffect(() => {
        Router.push('/', '/', {shallow: true});
    }, []);


    return (
        <Layout>
            {(parent) => 
                    <Search flashMessage={props.query.flashMessage} searchData={parent} />
            }
        </Layout>
    );
}

Index.getInitialProps = async (context) => {
    
    let query = context.query;
    return {query};
}



export default Index;
