import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers/root';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

// store.subscribe( () => {
//     console.log('state\n', store.getState());
//     debugger;
// });

export default store;