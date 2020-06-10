import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Box from "./components/Box";
import "bootstrap/dist/css/bootstrap.min.css";
let num = 1;
function App() {
	let count = useSelector((state) => state.count);
	let colorCode = useSelector((state) => state.colorCode);

	let boxes = [];
	let dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const changeNum = (value) => {
		num = parseInt(value);
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
				<button className="myButton" onClick={() => dispatch({ type: "ADD", payload: { num: num } })}>
					Increment
				</button>
				<button className="myButton" onClick={() => dispatch({ type: "TAKE", payload: { num: num } })}>
					Decrement
				</button>
				<form onSubmit={handleSubmit}>
					<label>
						Step:
						<input className="numberInputBox" type="number" onChange={(e) => changeNum(e.target.value)} />
					</label>
					{/* <input type="submit" value="Submit" /> */}
				</form>
				<button className="myButton" onClick={() => dispatch({ type: "TAKE", payload: { num: count } })}>
					RESET
				</button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>
					Color:
					<input className="colorInputBox" type="text" onChange={(e) => dispatch({ type: "colorForAll", payload: { color: e.target.value } })} />
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
