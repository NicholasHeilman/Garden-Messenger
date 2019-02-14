import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* messageSaga() {
    yield takeEvery('GET_MESSAGES', fetchMessages);
    yield takeEvery('ADD_NEW_MESSAGE', addNewMessage);
}


// Saga will run on 'FETCH_MESSAGES' ACTIONS
function* fetchMessages(action) {
    try {
        const response = yield axios.get('/api/messages');
        yield put({ type: 'ADD_NEW_MESSAGE', payload: response.data});
        console.log(response.data);
        } catch (error) {
            console.log('FETCH Message Error', error);
        }
    }// end Message Get

function* addNewMessage(action){
    try {
        yield axios.post('/api/messages', action.payload);
        const newAction = {type: 'GET_MESSAGES'};
        yield put(newAction);
    }catch (error) {
        console.log('POST Message Error', error);
    }
}//end addToDashboard



export default messageSaga;