const postReducer = (state = {}, action) => {
    if (action.type==="GET_POSTS"){
        console.log("Posts fetched..."+action.payload)
    }
    return state;
}
export default postReducer;