export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item: item
});

export const updateItems = (items) => ({
    type: 'UPDATE_ITEMS',
    items: items
})

export const clearItem = (index) => ({
    type: 'CLEAR_ITEM',
    index: index

});

export const clearItems = () => ({
    type: 'CLEAR_ITEMS',
});

