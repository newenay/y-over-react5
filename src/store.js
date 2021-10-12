import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
// https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-migrate-from-v4-to-v5v6
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

// REDUCERS
import slideBulletsReducer from './reducers/slideBulletsReducer'
import slideInfoReducer from './reducers/slideInfoReducer'
import examQuestionsSlice from './reducers/examQuestionsSlice' //does not seem to have an action?
import slideControlsReducer from './reducers/slideControlsReducer'

/* import lessonSwap from './data/course_info' --> Menu system, NOT YET FUNCTIONAL */
import lessons from './data/lessons' 
import slideBullets from './data/m1l1_nar'
import slideInfo from './data/m1l1_info'
import examQuestions from './data/m1l1_exam'

// App State
const slideControls = {

  debug: true, // turns on debugger and console traces (*also lesson menu - not active, but will switch lesson[])
  currentLesson: 0, // determines with lesson in lessons[] array (below)
  locked: false, // unlock course Nav -- for icon to show, debug must be true
  
  play: true, // Play Btn - default position unpaused
  audioStream: false, // Is audio playing
  audioEnd: false, // Is audio complete
  timeSync: NaN, // default position unpaused
  singleton: false, //loads bookmark or first slide
  lessons 
}

const defaultState = {
  slideInfo,
  slideBullets,
  examQuestions,
  slideControls
}

const history = createBrowserHistory() 

/******************* CREATE ROOT REDUCER *******************/

// Default combiner is fine unless Reducers are nested (or add history)
const rootReducer = (history: History) => combineReducers({
  slideInfo: slideInfoReducer,
  slideBullets: slideBulletsReducer,
  examQuestions: examQuestionsSlice,
  slideControls: slideControlsReducer,
  router: ConnectedRouter
})
/***************** END CREATE ROOT REDUCER *****************/

// Get History Working thru Redux --> https://github.com/salvoravida/redux-first-history
// Manual Store Setup --> https://redux-toolkit.js.org/usage/usage-guide
const store = configureStore ({
  reducer: rootReducer(history),
  middleware: [ routerMiddleware(history), ...getDefaultMiddleware(
      {
        thunk: {
          extraArgument: false,
          // extraArgument: false
        },
        immutableCheck: false,
      },  
    ), 
  ],
  preloadedState: defaultState,
})

export {history}
export default store

/* Redux Toolkit Abstract

type ConfigureEnhancersCallback = (
  defaultEnhancers: StoreEnhancer[]
) => StoreEnhancer[]

interface ConfigureStoreOptions<
  S = any,
  A extends Actions = AnyAction,
  M extends Middleware<S> = Middlewares<S>
> {
    reducer: Reducer<S, A> | ReducersMapObject<S, A>

    middleware?: ((getDefaultMiddleware: CurriedDefaultMiddleware<S>) => M) | M

    devTools?: boolean | DevToolsOptions

    preloadedState?: DeepPartials<S extends any ? S : S>

    enhancers?: StoreEnhancers[] | ConfigureEnhancersCallback
  }

function configureStore<S = any, A extends Action = AllAction>(
  options: ConfigureStoreOptions<S, A>
): EnhancedStore<S, A> 

*/