import React, { Component, PropTypes } from 'react';
import store from '../stores/Store.js';
import * as Actions from '../Actions.js';

const buttonStyle = {
	margin: '10px'
};

class ClickCounter extends Component {
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onClickPlusButton = this.onClickPlusButton.bind(this);
	     this.onClickMinusButton = this.onClickMinusButton.bind(this);
	     this.onChange = this.onChange.bind(this);
	     this.getOwnState = this.getOwnState.bind(this);
		this.state = this.getOwnState();
	}
	getOwnState(){
	  return {
	  	count: store.getState()[this.props.caption]
	  };
	}
	componentWillMount(){
	}
	componentDidMount(){
	   store.subscribe(this.onChange);
	}
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }
	onClickPlusButton(){
		 store.dispatch(Actions.increment(this.props.caption));
	}
	onClickMinusButton(){
		store.dispatch(Actions.decrement(this.props.caption));
	}
	componentWillReceiveProps(nextProps){
		// console.log("enter componentWillReceiveProps:" + this.props.caption)
	}
	shouldComponentUpdate(nextProps, nextState){
         return (nextProps.caption !== this.props.caption) ||
      (nextState.count !== this.state.count);
	}
     onChange() {
       this.setState(this.getOwnState());
     }
	render(){
		const count = this.state.count;
		console.log(count);
		const { caption } = this.props;
		return(
		  <div>
		      <button onClick={ this.onClickPlusButton } style={buttonStyle} >+</button>&nbsp;&nbsp;

		      <button onClick={ this.onClickMinusButton } style={buttonStyle} >-</button>&nbsp;&nbsp;
                 
                <span>
		         {caption} Click count: {count}
		      </span>
		   </div>
	     );
	
	}
}

ClickCounter.propTypes = {
		caption: PropTypes.string.isRequired
	}
export default ClickCounter;
