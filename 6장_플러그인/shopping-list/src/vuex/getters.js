import _ from 'underscore'

export default {
    getLists: state => {
        console.log('getList');
        return state.shoppinglists
    },
    getItems: (state, id=10) => state.shoppinglists[id].items,
    getListById: (state, id) => _.findWhere(state.shoppinglists, { id: id })

    
}