import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* personSaga() {
    yield takeEvery('FETCH_PERSON', fetchPerson);
    // yield takeEvery('ADD_NEW_PERSON', addNewPerson);
}


// Saga will run on 'FETCH_PERSON' ACTIONS
function* fetchPerson(action) {
    try {
        const response = yield axios.get('/api/person');
        yield put({ type: 'SET_PERSON', payload: response.data});
        console.log(response.data);
        } catch (error) {
            console.log('GET Person Error', error);
        }
    }// end Message Get

// function* addNewPerson(action){
//     try {
//         yield axios.post('/api/person', action.payload);
//         const newAction = {type: 'FETCH_PERSON'};
//         yield put(newAction);
//     }catch (error) {
//         console.log('POST Person Error', error);
//     }
// }//end addToDashboard



export default personSaga;