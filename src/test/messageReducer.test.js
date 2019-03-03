import messageReducer from '../redux/reducers/messageReducer';

test('test reducer initial state to be empty array', () => {
    const action = {};
    const returnedState = messageReducer(undefined, action);
    expect(Array.isArray(returnedState)).toBe(true);
    expect(returnedState.length).toBe(0);
});

test('test to set array', () => {
    const action = [ 'this1', 'this2', 'this3' ]
    const returnedState = messageReducer('SET_MESSAGE', payload = action )
    expect(Array.isArray(returnedState)).toBe(true);
    expect(returnedState.length).toBe(3);
})