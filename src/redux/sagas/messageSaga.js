import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_MESSAGE" actions
function* fetchMessage(action) {
    try {
        const response = yield axios.get('/api/messages');
        yield put({ type: 'SET_MESSAGE', payload: response.data });
        // console.log(response.data);
    } catch (error) {
        console.log('Error with fetching message:', error);
    }
}

// saga function will run on "ADD_TO_MESSAGE"
function* addToMessage(action) {
    try {
        yield axios.post('/api/messages', action.payload);
        const newAction = {type: 'FETCH_MESSAGE'};
        yield put(newAction);
    } catch (error) {
        console.log('Error in adding message', error);
    }

} // end 

// Will run on 'DELETE_FROM_MESSAGES'
function* deleteFromMessage(action) {
    try {
        const id = action.payload;
        yield axios.delete(`/api/messages/${id}`);
        let nextAction = { type: 'FETCH_MESSAGE' };
        yield put(nextAction);
    } catch (error) {
        console.log('in delete error', error);
    }
}

function* messageSaga() {
    yield takeLatest('FETCH_MESSAGES', fetchMessage);
    yield takeLatest('ADD_TO_MESSAGE', addToMessage);
    yield takeLatest('DELETE_FROM_MESSAGES', deleteFromMessage);
}

export default messageSaga;