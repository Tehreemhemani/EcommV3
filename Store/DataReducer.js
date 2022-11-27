import { Category, ProductData } from "../Data/DummyData"
import {AddItemToFavActionConst,AddToCartActionConst, DeleteCartActionConst, userLoginActionConst} from "./DataActionCons"

const initialState = {
    AllCategories: Category,
    AllProducts:ProductData,

    AllFavItem:[],
    CartItem: [],
    TotalAmount:0,

    loader:false,
    userSuccData:null,
    userFailData:null
}

export default(state=initialState,action) =>{
    switch (action.type) {
        case AddItemToFavActionConst.ADD_ITEM_TO_FAV:
            let ItemObj = action.obj
            ItemObj.isFavorite = !ItemObj.isFavorite
        state = {
            ...state,
            AllFavItem: [...state.AllFavItem, ItemObj]
        }
        break

        case AddToCartActionConst.ADD_TO_CART_ACTION:
            let CartitemObj = action.obj 
            console.log(CartitemObj,"asdasd")
        state = {
            ...state,
            CartItem: [...state.CartItem, CartitemObj],
            TotalAmount: state.TotalAmount + CartitemObj.price
        }
        break

        case DeleteCartActionConst.DELETE_CART_ACTION:
           const cartobj = action.obj
           state= {
                ...state,
                CartItem:  state.CartItem.filter((i)=> i.id !== cartobj.id),
                TotalAmount : state.TotalAmount - cartobj.price
           }
        break

        case userLoginActionConst.USER_LOGIN_REQ:
            state= {
                ...state,
                loader:true,
                userFailData:null
            }
            break

            case userLoginActionConst.USER_LOGIN_SUCC:
            state= {
                ...state,
                loader:false,
                userSuccData:action.userSuccData
            }
            break


            case userLoginActionConst.USER_LOGIN_FAIL:
            state= {
                ...state,
                loader:false,
                userFailData:action.userFailData
            }
            break



    }
    return state
}