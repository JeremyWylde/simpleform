import {CREATE_POST, LOAD_DATA, PUT_POST} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function loadData() {
    return {
        type: LOAD_DATA,
    }
}

export function putPost(postFromServer) {
    return {
        type: PUT_POST,
        payload: postFromServer
    }
}
