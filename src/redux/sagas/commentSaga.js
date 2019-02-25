import axios from'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchComments(action) {
   
    try {
        const id = action.payload;
        const {data : responseData} = yield axios.get(`/api/messages/${id}`);

        yield put ({type: 'SET_COMMENT', payload: responseData});
        // console.log(responseData);
    } catch (error){
        console.log('GET Comment Error', error);
    }
}

// // saga function will run on "ADD_COMMENT"
function* addComment(action) {
    try {
        yield axios.post('/api/comment', action.payload);
        const newAction = {type: 'FETCH_COMMENT'};
        yield put(newAction);
    } catch (error) {
        console.log('Error in adding message', error);
    }

} // end 

function* commentSaga() {
    yield takeEvery('FETCH_COMMENT', fetchComments);
    yield takeEvery('ADD_COMMENT', addComment);
}

export default commentSaga;