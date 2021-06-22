//import { createSlice } from '@reduxjs/toolkit'

function slideInfoReducer(state = [], action) {
    // console.log("m1l1_info - Reducer:", action.type)
    const i = action.slideId;
    switch(action.type) {
        case 'INCREMENT_CUES' :
            // console.log("Reducer-->", action);
            return [
                ...state.slice(0,i), //before the one we are updating
                {...state[i], cuePoint: state[i].cuePoint + 1},
                ...state.slice(i + 1), //after the one we are updating   
            ];
        case 'REWIND_SLIDE':
            return [
                ...state.slice(0,i), //before the one we are updating
                {...state[i], cuePoint: state[i].cuePoint = 0},
                ...state.slice(i + 1), //after the one we are updating
            ]

        default:
            return state;
    }
}

/* const initialState = []

const slideInfoReducer = createSlice({
    name: 'slideInfo',
    initialState,
    reducers: {
        increment(state, action) {
            // ✅ This "mutating" code is okay inside of createSlice!
            //state.push(action.slideId)
            const i = action.payload
            return[
                ...state.slice(0,i), //before the one we are updating
                {...state[i], cuePoint: state[i].cuePoint + 1},
                ...state.slice(i + 1) //after the one we are updating
            ]
        },
        rewind(state, action) {
            const i = action.payload
            return[
                initialState.slice(0,i), //before the one we are updating
                {...state[i], cuePoint: state[i].cuePoint = 0},
                state.slice(i + 1) //after the one we are updating
            ]
        }
    }
}) */

/* JUST REFERENCE TO EXPORT THE ACTIONS
________________________________________
export function increment(slideId){
    return {
        type: 'INCREMENT_CUES',
        slideId
    }
}

export function rewind(slideId){
    return {
        type: 'REWIND_SLIDE',
        slideId
    }
} 
________________________________________
*/

//export const { increment, rewind } = slideInfoReducer.actions
export default slideInfoReducer/* .reducer; */



// Needs axios --> https://www.softkraft.co/how-to-setup-slices-with-redux-toolkit/

/* export const increment = () => async dispatch => {
    try{
        await Main.get('/slideInfoReducer')
            .then((response) => dispatch(increment(response.data)))
    }
    catch (e){
        return console.error(e.message);
    }
} */