import React, { Component, PropTypes } from 'react';

import store from '../stores/Store.js';
import * as Actions from '../Actions.js';

const styleButton = {
	margin: "10px"
};

function ClickCounter(props){
	
  const { caption, onIncrement, onDecrement, value } = props;
  return(
		  <div>
                  <button style={ styleButton } onClick={ onIncrement }>+</button>
                  <button style={ styleButton } onClick={ onDecrement }>-</button>
                  <span>{caption}:{value}</span>
			</div>
         );
}

ClickCounter.propTypes = {
   caption: PropTypes.string.isRequired,
   onIncrement: PropTypes.func.isRequired,
   onDecrement: PropTypes.func.isRequired,
   value: PropTypes.number.isRequired
};

class CounterContainer extends Component{
	constructor(props){ 
		super(props);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = this.getOwnState();
		// console.log(this.getOwnState());
	}
	getOwnState(){
		return {
			value: store.getState()[this.props.caption]
		};
	}
	onIncrement(){
		store.dispatch(Actions.increment(this.props.caption));
	}
	onDecrement(){
		store.dispatch(Actions.decrement(this.props.caption));
	}
	onChange(){
		this.setState(this.getOwnState());
	}
	shouldComponentUpdate(nextProps, nextState){
		return((nextProps.caption !== this.props.caption) ||
			   (nextState.value !== this.state.value));
	}
	componentDidMount(){
		store.subscribe(this.onChange);
	}
	componentWillUnmount(){
		store.unsubscribe(this.onChange);
	}
	render(){
		return <ClickCounter caption = { this.props.caption } 
		         onIncrement = { this.onIncrement} onDecrement = { this.onDecrement }
		         value = { this.state.value } />
	}
}
CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};
export default CounterContainer;