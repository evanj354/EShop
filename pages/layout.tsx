import Head from 'next/head';
import { Navbar, NavLink, Form, InputGroup, FormControl, Nav, Button, Row, Col, Container, Dropdown, DropdownButton, NavItem } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { store, persistor } from './store/store';
import { addItem } from './actions/cart';
import { updateSearch } from './actions/search';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { connect } from 'react-redux';
import ShopNavbar from './components/nav';


const Layout = (props) => {
    const [searchField, updateSearchField] = useState("");
    const [searchResults, updateSearchResults] = useState({});
    const [storeFronts, updateStoreFronts] = useState(['Amazon', 'Walmart']);
    

    useEffect(() => {
        
    }, [])

    const handleSubmit = (event) => {
        updateSearchResults([]);
        event.preventDefault();
        axios.post('/search/'+searchField,
            {
                searchField: storeFronts
            }
        )
        .then((response) => {
            console.log(`Response: ${response.data}`);
            updateSearchResults(response.data);
            console.log('UPDATED RESULTS: ', searchResults);
            
        }, (error) => {
            console.log(error);
        });
    }

    const handleChange = input => (event) => {
        input(event.target.value);
    }

    const handleStoreChange = (store, index) => {
        let tempStore = [...storeFronts];
        console.log('UPDATING: ')
        tempStore[index] = store;
        updateStoreFronts(tempStore);
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
                <ShopNavbar updateSearchField={updateSearchField} handleChange={handleChange} handleSubmit={handleSubmit}/>
                
                {props.children({searchField: searchField, searchResults: searchResults, handleStoreChange: handleStoreChange, storeFronts: storeFronts})}
            </div>
            </PersistGate>
        </Provider>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         searchItems: state.searchReducer.currentItems
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateSearch: (items) => dispatch(updateSearch(items))
//     }
// }
export default Layout;

// export default connect(mapStateToProps, mapDispatchToProps)(Layout);