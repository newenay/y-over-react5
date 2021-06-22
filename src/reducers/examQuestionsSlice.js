import { createSlice } from '@reduxjs/toolkit'

const initialState = [] //state = []

const examQuestionsSlice = createSlice({
    name: 'examQuestions',
    initialState,
    reducers: {
        examQuestions(state, action) {
            /* Evaluates the action, ie: LOAD_SLIDE, SLIDE_FORWARD */
            if(typeof action.questionId !== 'undefined') {
                return {
                    // take the current state
                    ...state,
                    // overwrite this post with a new one
                    [action.questionId]: examActions(state[action.questionId], action)
                }
            }
            // And returns the state (data, not component)
            return state;
        },
        examActions(state, action){
            /* console.log("slideBullets - Reducer:", action.type) */
            switch(action.type) {
                case 'NEXT_EXAM':
                    // return the new state with the new comment
                    return [...state, {
                        /* user: action.cue,
                        text: action.bullet */
                    }];
                case 'NEXT_QUESTION':
                    console.log("Removing a comment");
                    // return the new state without the deleted comment
                    return [
                        //from the start to the one we want to delete
                        ...state.slice(0,action.i),
                        // after the deleted one, to the end
                        ...state.slice(action.i + 1)
                    ]
                default:
                    return state;
            }
        }
    }
})

export const {examQuestions, examActions} = examQuestionsSlice.actions;
export default examQuestionsSlice.reducer;

/* function handwrittenReducer(state, action) {
    return {
      ...state,
      first: {
        ...state.first,
        second: {
          ...state.first.second,
          [action.someId]: {
            ...state.first.second[action.someId],
            fourth: action.someValue
          }
        }
      }
    }
  } 
  
function reducerWithImmer(state, action) {
  state.first.second[action.someId].fourth = action.someValue
}
*/