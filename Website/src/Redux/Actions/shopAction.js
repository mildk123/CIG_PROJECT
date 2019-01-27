const storeShopDetails = storeDetails => {
    return {
        type: "STORE_SHOP_DETAILS",
        payload : storeDetails
    }
}

const storeMapDetails = storeLocation => {
    return {
        type : 'STORE_SHOP_LOCATION',
        payload: storeLocation
    }
}

// const CurrentUserIndex = uid => {
//     return {
//         type : 'CurrentUserIndex',
//         payload: uid
//     }
// }
export {
    storeShopDetails,
    storeMapDetails,
    // CurrentUserIndex
}