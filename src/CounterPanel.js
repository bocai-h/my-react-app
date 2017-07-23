import React, { Component } from 'react';
import ClickCounter from './ClickCounter';

class CounterPanel extends Component {
  constructor(props){
  	super(props);
  	this.onCounterUpdate = this.onCounterUpdate.bind(this);
  	this.initValues = [0, 10, 20];
  	const initSum = this.initValues.reduce((a,b) => a + b, 0);
  	this.state  = { sum: initSum }
  }
  onCounterUpdate(newValue, previousValue){
  	const valueChange = newValue - previousValue;
  	this.setState({sum: this.state.sum + valueChange});
  }
  render(){
  	console.log("enter CounterPanel render");
  	return(
            <div>
                <ClickCounter caption="First" onUpdate = { this.onCounterUpdate } />
  	           <ClickCounter caption="second" initValue={ this.initValues[1] } onUpdate = { this.onCounterUpdate } />
  	           <ClickCounter caption="Third" initValue={ this.initValues[2] } onUpdate = { this.onCounterUpdate } />
                <hr />
                <div>{ this.state.sum }</div>
  	           <button onClick={ () => this.forceUpdate()}>
                  Click me to repaint!
  	           </button>
            </div>
  		);
  
  }
}
export default CounterPanel;