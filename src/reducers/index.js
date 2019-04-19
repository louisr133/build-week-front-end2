import {SENDING_CRED, SENDING_CRED_SUCCESS, SENDING_CRED_FAIL, FETCH_START, FETCH_SUCCESS, FETCH_FAIL, USER_START, USER_SUCCESS, USER_FAIL, POST_START, POST_FAIL, POST_SUCCESS, DELETE_ITEM,DELETE_ITEM_FAILURE,DELETE_ITEM_SUCCESS, PASSING, PUT_START, PUT_FAIL,PUT_SUCCESS} from '../actions'

const initialState = {
    tech: [],
    fetching: false,
    sending_login_creds: false,
    auth: {
        token: '',
        user_id: '',
        message: '',
        user_name: '',
    },
    users: [],
    err: '',
    
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SENDING_CRED:
            return({
                ...state,
                sending_login_creds: true,
            })
        case SENDING_CRED_SUCCESS:
            return({
                ...state,
                sending_login_creds: false,
                auth: action.payload,
            })
        case SENDING_CRED_FAIL:
            return({
                ...state,
                sending_login_creds: false,
                err: action.payload,
            })
        case FETCH_START:
            return({
                ...state,
                fetching: true,
            })
        case FETCH_SUCCESS:
            return({
                ...state,
                fetching: false,
                tech: action.payload,
            })
        case FETCH_FAIL:
            return({
                ...state,
                fetching: false,
                err: action.payload,
            })
        case USER_START:
            return({
                ...state,
                gettingUser: true,
            })
        case USER_SUCCESS:
            return({
                ...state,
                gettingUser: false,
                users: action.payload,
            })
        case USER_FAIL:
            return({
                ...state,
                gettingUser: false,
                err: action.payload,
            })
        case POST_START:
            return({
                ...state,
                posting: true,
            })
        case POST_SUCCESS:
            return({
                ...state,
                posting: false,
                tech: [...state.tech, {...action.payload}],
            })
        case POST_FAIL:
            return({
                ...state,
                posting: false,
                err: action.payload,
            })
        case DELETE_ITEM:
            return {
                ...state,
                deletingItem: true,
                error: null
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                deletingItem: false,
                error: null
            }
        case DELETE_ITEM_FAILURE:
            return {
                ...state,
                deletingItem: false,
                error: action.payload
            }
        case PASSING:
            return{
                ...state,
                pass: true,
                newEdit: action.payload,
            }
        case PUT_START:
            return({
                ...state,
                puting: true,
            })
        case PUT_SUCCESS:
            return({
                ...state,
                putting: false,
                tech: [...state.tech, {...action.payload}],
            })
        case PUT_FAIL:
            return({
                ...state,
                putting: false,
                err: action.payload,
            })
        default:
            return({
                ...state,
            })
    }

}