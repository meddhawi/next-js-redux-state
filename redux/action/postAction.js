import axios from "axios";

import { GET_POSTS, REQUEST_FINISHED, REQUEST_LOADING } from "../types";

const getPosts = () => async dispatch =>{
    try {
        dispatch({type: REQUEST_LOADING})
        const res = await axios.get("https://dummyjson.com/posts")
        console.log(res.data)
        dispatch({type: GET_POSTS, payload: res.data})
        dispatch({type: REQUEST_FINISHED})
    } catch (error) {
        // dispatch({type: REQUEST_FINISHED, payload: error.response.data.errors})
        // console.log(`Error: ${error.response,data.errors}`)
    }
}

export default {
    getPosts
}