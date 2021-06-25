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

export default slideInfoReducer