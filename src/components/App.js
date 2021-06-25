import { bindActionCreators } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from './Main';

/* const slideInfoBind = () => {
    const {increment, rewind} = useSelector(state => state.slideInfo);
} */

function mapStateToProps(state) {
    return{
        slideInfo: state.slideInfo,
        slideBullets: state.slideBullets,
        examQuestions: state.examQuestions,
        slideControls: state.slideControls
    }
}

/* ASYNC ACTIONS */
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
// https://blog.logrocket.com/smarter-redux-with-redux-toolkit/
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);   
}

// [HOC] High-Order Component -- sadds all actions, dispatch, and then calls Main to initialize
const App = connect( mapStateToProps, mapDispatchToProps )(Main);

export default App;

