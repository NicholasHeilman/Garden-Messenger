import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* messageSaga() {
    yield takeEvery('GET_MESSAGES', fetchMessages);
    // yield takeEvery('SET_MESSAGES', addToDashboard);
}


// Saga will run on 'FETCH_MESSAGES' ACTIONS
function* fetchMessages(action) {
    try {
        const response = yield axios.get('/api/messages');
        yield put({ type: 'SET_MESSAGES', payload: response.data});
        console.log(response.data);
        } catch (error) {
            console.log('GET Error', error);
        }
    }// end Message Get

// function* addToDashboard(action){
//     try {
//         yield axios.post('/api/messages', action.payload);
//         const newAction = {type: 'GET_MESSAGES'};
//         yield put(newAction);
//     }catch (error) {
//         console.log('GET Error', error);
//     }
// }//end addToDashboard

// function* fetchMessage() {
//     try {
//       const message = {

//       };
  
//       // the config includes credentials which
//       // allow the server session to recognize the user
//       // If a user is logged in, this will return their information
//       // from the server session (req.user)
//       const response = yield axios.get('api/messages', message);
  
//       // now that the session has given us a user object
//       // with an id and username set the client-side user object to let
//       // the client-side code know the user is logged in
//       yield put({ type: 'SET_MESSAGES', payload: response.data });
//     } catch (error) {
//       console.log('MESSAGE get request failed', error);
//     }
//   }
  
//   function* userSaga() {
//     yield takeLatest('FETCH_MESSAGE', fetchUser);
//   }
  
//   export default userSaga;

export default messageSaga;