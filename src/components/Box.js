import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Box(props) {
	let ogCode = useSelector((state) => state.colorCode);
	let textColor = "black";
	let bg = ogCode;
	// let colorCode = ogCode;
	let individualColor = useSelector((state) => state.individualColor);

	if (individualColor[`box${props.ordinal}`] && individualColor[`box${props.ordinal}`].color) {
		textColor = individualColor[`box${props.ordinal}`].color;
	}

	if (individualColor[`box${props.ordinal}`] && individualColor[`box${props.ordinal}`].bg) {
		bg = individualColor[`box${props.ordinal}`].bg;
	}

	if (props.ordinal > 5) {
		textColor = "red";
	}

	let dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const calculateColor = (value) => {
		// if (individualColor[`box${props.ordinal}`] !== null) {
		// 	colorCode = individualColor[`box${props.ordinal}`];
		// } else colorCode = ogCode;
		dispatch({ type: "IndividualColor", payload: { color: value, ordinal: `box${props.ordinal}` } });

		console.log(individualColor);
	};

	return (
		<div>
			<div className="box" style={{ backgroundColor: bg }}>
				<form onSubmit={handleSubmit}>
					<label>
						<span className="textInBox" style={{ color: textColor }}>
							Box {props.ordinal + 1}
						</span>
						<input type="text" onChange={(e) => calculateColor(e.target.value)} />
					</label>
					{/* <input type="submit" value="Submit" /> */}
				</form>
			</div>
		</div>
	);
}
