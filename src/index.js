import React from"react";
import ReactDOM from "react-dom";


class Chocem extends React.Component{
  constructor(){
    super();
    this.state={
      show:'one',
			showcolor:'pink',

    }
  }

  handleClick(x,y){
									    this.setState({
									      show:x,
												showcolor:y,
									    })
  								}

  render(){
			  	let styles={
						root:{
						width:"50%vw",
						height:"50%vw",
						background:this.state.nowcolor,
						}
					}

	    	return(
					      <div>
						        <div>
						          <button onClick={this.handleClick.bind(this,'1','pink')}>one</button>
						          <button onClick={this.handleClick.bind(this,'2','red')}>two</button>
						          <button onClick={this.handleClick.bind(this,'3','yellow')}>three</button>
						        </div>
						        <div style={styles.root}>

											{
												this.state.show==1 ? "one":
												this.state.show==2 ? "two":
												this.state.show==3 ? "three":
											}
						        </div>
					      </div>
	    				)
  				}
}



ReactDOM.render(<Chocem />,document.getElementById('app'));
