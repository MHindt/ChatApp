import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, compose, applyMiddleware } from 'redux';
import { middleware as ThunkMiddleware } from 'redux-thunk';

const rootReducer = combineReducers({

});

const store = configureStore({
    reducer: rootReducer
})

export default store;