import { DropdownButton, Dropdown } from "react-bootstrap"
import { useState } from "react";


const StoreFrontDropdown = (props) => {
    const storeFronts = ['Amazon', 'Walmart'];
    // let [currentStore, updateCurrentStore] = useState(storeFronts[props.storeID])


    const updateStoreFront = (store) => {
        // updateCurrentStore(store);
        props.handleStoreChange(store, props.storeID);
    }

    return (
        <div className="d-flex justify-content-center my-2">
            <DropdownButton id="dropdown-basic-button" variant="outline-info" title={props.storeFronts[props.storeID]}>
                {storeFronts.map((item) => {
                    if(item != props.storeFronts[props.storeID]) {
                        return(
                            <Dropdown.Item key={item} onClick={() => updateStoreFront(item)}>{item}</Dropdown.Item>
                        )
                    }

                })}
            </DropdownButton>
        </div>
    )
}


export { StoreFrontDropdown }