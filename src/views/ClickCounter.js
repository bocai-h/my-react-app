import React, { Component, PropTypes } from 'react';

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
	constructor(props,context){ 
		super(props,context);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = this.getOwnState();
		// console.log(this.getOwnState());
	}
	getOwnState(){
		return {
			value: this.context.store.getState()[this.props.caption]
		};
	}
	onIncrement(){
		this.context.store.dispatch(Actions.increment(this.props.caption));
	}
	onDecrement(){
		this.context.store.dispatch(Actions.decrement(this.props.caption));
	}
	onChange(){
		this.setState(this.getOwnState());
	}
	shouldComponentUpdate(nextProps, nextState){
		return((nextProps.caption !== this.props.caption) ||
			   (nextState.value !== this.state.value));
	}
	componentDidMount(){
		this.context.store.subscribe(this.onChange);
	}
	componentWillUnmount(){
		this.context.store.unsubscribe(this.onChange);
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
CounterContainer.contextTypes = {
  store: PropTypes.object
}
export default CounterContainer;