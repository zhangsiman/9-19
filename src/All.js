import React from"react";
import ReactDOM from "react-dom";
import Add from "./Add";
import Chose from "./Chose";
import Guess from "./Guess";
// import Chosem from "./Chosem";

class All extends React.Component{
	render(){
		return(
			<div>
				<Add />
				<Chose />
				<Guess />
				// <Chosem />
			</div>
			)
	}
}
export default All;
