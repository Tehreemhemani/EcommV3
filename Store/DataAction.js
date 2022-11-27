import {AddItemToFavActionConst, AddToCartActionConst, DeleteCartActionConst, userLoginActionConst} from "./DataActionCons"
import { BaseUrl } from "../Components/BaseUrl";
import { baseGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon";

export const AddItemToFavAction=(obj)=>{
    return (dispatch) => {
        dispatch ({
            type: AddItemToFavActionConst.ADD_ITEM_TO_FAV,
            obj: obj
        })
    }
}

export const UserLoginAction = (formFields) => {
    return dispatch => {
        dispatch({
            type: userLoginActionConst.USER_LOGIN_REQ
        })

        // ned demo
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "phoneNumber": formFields.phoneNumber,
        "password": formFields.password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://api.fougitodemo.com/api/partner/Account/Login", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.Status === "Success") {
                dispatch({
                    type: userLoginActionConst.USER_LOGIN_SUCC,
                    userSuccData : result?.Result
                })
            }
            else {
                dispatch({
                    type: userLoginActionConst.USER_LOGIN_FAIL,
                    userFailData: result
                })
            }
        })
        .catch(error => console.log('error', error));
        
    }
}


export const AddToCartAction=(obj)=>{
    return (dispatch) => {
        dispatch ({
            type: AddToCartActionConst.ADD_TO_CART_ACTION,
            obj: obj
        })
    }
}


export const DeleteCartAction=(obj)=>{
    return (dispatch) => {
        dispatch ({
            type: DeleteCartActionConst.DELETE_CART_ACTION,
            obj: obj
        })
    }
}