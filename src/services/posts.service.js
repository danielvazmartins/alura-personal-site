import postsMock from "mock/postsMock";

export function getPostById(id) {
    return postsMock.find(post => post.id === + id)
}