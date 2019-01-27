const reducer = (state= {}, action) =>{
    switch(action.type) {
        case 'STORE_SHOP_DETAILS' : {
            return action.payload
        }
        case 'STORE_SHOP_LOCATION' : {
            return action.payload
        }
        
        default : {
            return `select shop`
        }
    }
}

export default reducer
