// New - Toolkit method https://christopher-leja.medium.com/getting-started-with-redux-part-4-650e6b5f40cd
import { createSlice/* , PayloadAction */ } from '@reduxjs/toolkit'

/*const increment = createAction('INCREMENT_CUES');
const rewind = createAction('REWIND_SLIDE');

  export default slideInfoReducer = createReducer(0, {

    [increment.type]: (state, action) => state + action.payload,
    [rewind.type]: (state, action) => state - action.payload,
}) */

const slideInfoSlice = createSlice({
    name: 'slideInfo',
    initialState: { slideInfo:[] },
    reducers: {
        // The state is imported slideInfo.js
        increment: (state, action/* : PayloadAction<String> */ ) => state.slideInfo[action.payload].cuePoint + 1,
        rewind: (state, action ) => state.slideInfo[action.payload].cuePoint = 0,
    }
})


export default slideInfoSlice.reducer
/******************** ACTIONS *********************/
export const { increment, rewind } = slideInfoSlice.actions;

// Async Thunk Functions
export const sliceIncrement = () => async dispatch => {
    try{
        await applicationCache.get('/slideId')
            .then((response) => dispatch(increment(response.data)))
    }
    catch(e) {
        return console.error(e.message);
    }
} 

export const sliceRewind = () => async dispatch => {
    try{
        await applicationCache.get('/slideId')
            .then((response) => dispatch(rewind(response.data)))
    }
    catch(e) {
        return console.error(e.message);
    }
}