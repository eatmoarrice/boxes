import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
	count: 0,
	colorCode: "white",
	individualColor: {}
};

function reducer(state = initialState, action) {
	if (action.type === "ADD") {
		state.count = state.count + action.payload.num;
	} else if (action.type === "TAKE") {
		if (state.count !== 0) state.count = state.count - action.payload.num;
	} else if (action.type === "colorForAll") {
		state.colorCode = action.payload.color;
	} else if (action.type === "IndividualColor") {
		console.log("reducer", action.payload.ordinal);
		state.individualColor[action.payload.ordinal] = {};
		state.individualColor[action.payload.ordinal].bg = action.payload.color;
		// state.individualColor[action.payload.ordinal].color = action.payload.color;
		state.individualColor = { ...state.individualColor };
		console.log("ddddd", state.individualColor[action.payload.ordinal]);
	}
	return { ...state };
}

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
