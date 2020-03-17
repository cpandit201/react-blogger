export const getPosts = (numberOfPosts, currentPostPage) => {
    return {
        type: "GET_POSTS",
        payload: numberOfPosts
    }
}
