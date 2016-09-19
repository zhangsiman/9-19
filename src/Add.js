import React from"react";
import ReactDOM from "react-dom";

//箭头函数 加一
class Add extends React.Component{
	constructor(){
		super();
		this.state={
			num:0
		}
	}
	render(){
		return(
			<div>
			{this.state.num}
			<button onClick={()=>{this.setState({num:this.state.num +1})}}> +1
			</button>
			</div>
			)
	}
}
export default Add;
