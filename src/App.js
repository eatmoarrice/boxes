import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Box from "./components/Box";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	let count = useSelector((state) => state.count);
	let colorCode = useSelector((state) => state.colorCode);
	let boxes = [];
	let dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const increaseNum = () => {
		dispatch({ type: "ADD" });
	};

	const renderBoxes = () => {
		for (let i = 0; i < count; i++) {
			boxes.push(<Box key={i} ordinal={i} />);
		}
		return boxes;
		console.log("hohohoh");
	};

	return (
		<div className="App">
			<h1 className="title">Pretty Boxes</h1>
			<h2>Total: {count}</h2>
			<div className="d-flex justify-content-center buttons">
				<button className="myButton" onClick={() => increaseNum()}>
					Increment
				</button>
				<button className="myButton" onClick={() => dispatch({ type: "TAKE", payload: { num: 1 } })}>
					Decrement
				</button>
				<button className="myButton" onClick={() => dispatch({ type: "TAKE", payload: { num: count } })}>
					RESET
				</button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>
					Color:
					<input type="text" onChange={(e) => dispatch({ type: "colorForAll", payload: { color: e.target.value } })} />
				</label>
				{/* <input type="submit" value="Submit" /> */}
			</form>
			<div className="container">
				<div className="row">{renderBoxes()}</div>
			</div>
		</div>
	);
}

export default App;
