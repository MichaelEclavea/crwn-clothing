import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// const middlewares = [logger];

// if(process.env.NODE_ENV === 'development') {
//     middlewares.push(logger);
// }

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const store = createStore(rootReducer);
export const persistor = persistStore(store);

// export default { store, persistor };