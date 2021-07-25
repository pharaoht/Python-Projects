import * as actionTypes from './shopping-types';
//a reducer is a function that takes in some state and some action
//the action is the part that gets disbatch
const INITIAL_STATE = {
    products: [],
    cart: [],
    currentItem: null,
}

const shopReducer = (state =INITIAL_STATE, action) =>{
    switch(action.types){
        case actionTypes.ADD_TO_CART:
            //get the items data from the products array
            const item = state.products.find((prod) => prod.id === action.payload.id)
            //check if item is in cart already
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true :false);    
            return {
                ...state,
                cart: inCart 
                    ? state.cart.map((item) => 
                        item.id === action.payload.id 
                        ? {...item, qty: item.qty + 1} : item
                ) 
                : [...state.cart, {...item, qty: 1 }],
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item)=>
                    item.id === action.payload.id 
                    ? {...item, qty: action.payload.qty} 
                    : item
                ),
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default:
            return state
    }
}

export default shopReducer