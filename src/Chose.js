import React from"react";
import ReactDOM from"react-dom";

class Chose extends React.Component{
	constructor(){
		super();
		this.state={
			show:true
		}

	}
	handleClick(){
		this.setState({
			show:!this.state.show
		})
	}
	render(){
		let styles={
			root:{
				display:this.state.show?"block":"none",
				width:"100px",
				height:"30px",
				background:"pimk",
			}
		}
		return(
			<div>
				<button >显示</button>
				<div style={styles.root}></div>
			</div>
			)
	}

}
export default Chose;
