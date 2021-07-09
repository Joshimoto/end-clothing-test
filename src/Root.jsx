import React from "react";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";

import thunk from "redux-thunk";
import reducers from "reducers";

/**
 * @param {children, initialState}
 * I am planning to set initial state when app is rendered server-side
 * If it is not server side rendered we will do an api call.
 * DEFAULT RENDER Type:
 * I have set renderedBy to client as the default. If the server does render it, it will pass "server"
 */

const Root = ({children, initialState = {}}) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

    return <Provider store={store}>{children}</Provider>
}

export default Root;