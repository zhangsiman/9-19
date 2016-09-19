import React from"react";
import ReactDOM from "react-dom";

class Chocem extends React.Component{
  constructor(){
    super();
    this.state={
      show:'one'
    }
  }
  handleClick(x){
    this.setState({
      show:x
    })
  }
  render(){
    let styles={
      one:{
        display:this.state.show=='one'?"block":"none",
        width:"50px",
        height:"30px",
        background:"yellow"
      },

      two:{
        display:this.state.show=="two"?"block":"none",
        width:"50px",
        height:"30px",
        background:"pink"
      },

      three:{
        display:this.state.show=="three"?"block":"none",
        width:"50px",
        height:"30px",
        background:"red"
      }
    }
    return(
      <div>
        <div>
          <button onClick={this.handleClick.bind(this,'one')}>one</button>
          <button onClick={this.handleClick.bind(this,'two')}>two</button>
          <button onClick={this.handleClick.bind(this,'three')}>three</button>
        </div>
        <div>
          <div style={styles.one}>one</div>
          <div style={styles.two}>two</div>
          <div style={styles.three}>three</div>
        </div>
      </div>
    )
  }
}
export default Chosem;
