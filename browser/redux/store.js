import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();
const middleware = applyMiddleware(loggerMiddleware);
const store = createStore(reducer, middleware);

export default store;