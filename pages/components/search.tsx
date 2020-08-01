import Head from 'next/head';
import { Navbar, Container, Col, Row } from 'react-bootstrap';
import Router from 'next/router';
import Layout from '../layout';
import { useState, useEffect } from 'react';
import React from 'react';
import { connect, Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import BuyItem from './buyItem';
import { SuccessFlash } from './flashMessage';
import { updateSearch } from '../actions/search';


const Search = (props) => { 
    const [items, updateItems] = useState([]);


    useEffect(() => {
        Router.push('/', '/', {shallow: true});
        if(props.newItems[0]) {
            updateItems(props.newItems[0]);
            props.reduxUpdateSearch({
                "searchField": "laptop",
                "items": props.newItems[0]
            })
                
        }
        else {
            updateItems(props.searchItems);
        }
    }, [props.newItems]);


    return (
  
                    <div>
                        <SuccessFlash 
                            message={props.flashMessage} 
                            class="text-center" 
                            visible={true}
                        />
                        <Container>
                            <Row>
                            {items && items.map((item, i) => 
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
                    
    );
}

Search.getInitialProps = async (context) => {
    
    let query = context.query;
    return {query};
}

const mapStateToProps = (state) => {
    return {
        searchItems: state.searchReducer.currentItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduxUpdateSearch: (item) => dispatch(updateSearch(item))
    };
};

// export default Search;
export default connect(mapStateToProps, mapDispatchToProps)(Search);