import React from"react";
import ReactDOM from "react-dom";

class Guess extends React.Component{
	constructor(){
		super();
		this.state={
			yes:true
		}
	}
	render(){
		return(

			<div>
			{this.state.yes?'我是对的':'我是错的'}
			</div>

			)
	}
}
export default Guess;
