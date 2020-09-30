import {takeEvery, put, call} from 'redux-saga/effects'
import {LOAD_DATA} from "./types";
import {putPost} from "./actions";

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}

function* workerLoadData() {

    const data = yield call(fetchData)

    yield put(putPost(data))
}

async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await res.json()
}
