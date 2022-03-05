import { GET_POSTS, REQUEST_FINISHED, REQUEST_LOADING } from "../types";

const initialState = [{
    posts: []
}]

export default function(state = initialState, action){
    switch(action.type){
        case REQUEST_FINISHED:
            return{
                ...state,
                isLoading: false
            }

        case REQUEST_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case GET_POSTS:
            return{
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}