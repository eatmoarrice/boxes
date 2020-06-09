import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Box(props) {
	let ogCode = useSelector((state) => state.colorCode);
	// let colorCode = ogCode;
	let individualColor = useSelector((state) => state.individualColor);

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
			{individualColor[`box${props.ordinal}`] ? (
				<div className="box" style={{ backgroundColor: individualColor[`box${props.ordinal}`] }}>
					<form onSubmit={handleSubmit}>
						<label>
							Color:
							<input type="text" onChange={(e) => calculateColor(e.target.value)} />
						</label>
						{/* <input type="submit" value="Submit" /> */}
					</form>
				</div>
			) : (
				<div className="box" style={{ backgroundColor: ogCode }}>
					<form onSubmit={handleSubmit}>
						<label>
							Color:
							<input type="text" onChange={(e) => calculateColor(e.target.value)} />
						</label>
						{/* <input type="submit" value="Submit" /> */}
					</form>
				</div>
			)}
		</div>
	);
}
