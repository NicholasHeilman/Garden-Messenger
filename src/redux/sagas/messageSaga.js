// import { put, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';

// function* messageSaga() {
//     yield takeEvery('GET_MESSAGES', fetchMessages);
//     // yield takeEvery('ADD_NEW_MESSAGE', addNewMessage);
// }


// // Saga will run on 'FETCH_MESSAGES' ACTIONS
// function* fetchMessages(action) {
//     try {
//         const response = yield axios.get('/api/messages');
//         yield put({ type: 'ADD_NEW_MESSAGE', payload: response.data});
//         console.log(response.data);
//         } catch (error) {
//             console.log('GET Error', error);
//         }
//     }// end Message Get

// function* addNewMessage(action){
//     try {
//         yield axios.post('/api/messages', action.payload);
//         const newAction = {type: 'GET_MESSAGES'};
//         yield put(newAction);
//     }catch (error) {
//         console.log('GET Error', error);
//     }
// }//end addToDashboard





import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_MESSAGE" actions
function* fetchMessage(action) {
    try {
        const response = yield axios.get('/api/messages');
        yield put({ type: 'SET_MESSAGE', payload: response.data });
        console.log(response.data);
    } catch (error) {
        console.log('Error with fetching message:', error);
    }
}

// saga function will run on "FETCH_MESSAGE"
function* addToMessage(action) {
    try {
        yield axios.post('/api/messages', action.payload);
        const newAction = {type: 'FETCH_MESSAGE'};
        yield put(newAction);
    } catch (error) {
        console.log(`Error in adding message: ${error}`);
    }

} // end 

//
function* deleteFromMessage(action) {
    let messageItem = action.payload;
    console.log('in delete message', messageItem );
    
    try {
        yield axios.delete(`/api/messages/${messageItem}`);
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