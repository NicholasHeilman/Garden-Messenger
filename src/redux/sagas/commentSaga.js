import axios from'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchComments(action) {
    try {
        const response = yield axios.get(`/api/messages/${action.payload}`);
        yield put ({type: 'SET_MESSAGE_COMMENT', payload: response.data});
        console.log(response.data);
    } catch (error){
        console.log('GET Comment Error', error);
    }
}

function* commentSaga() {
    yield takeEvery('FETCH_MESSAGE_COMMENTS', fetchComments);
}

export default commentSaga;