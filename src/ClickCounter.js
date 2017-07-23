import React, { Component, PropTypes } from 'react';
import * as Actions from './Actions.js';
import CounterStore from './stores/CounterStore.js';

class ClickCounter extends Component {
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onClickPlusButton = this.onClickPlusButton.bind(this);
	     this.onClickMinusButton = this.onClickMinusButton.bind(this);
		this.state = {
             count: CounterStore.getCounterValues()[props.caption]
         }
	}
	componentWillMount(){
		// console.log("enter componentWillMount:" + this.props.caption)
	}
	componentDidMount(){
		// console.log("enter componentDidMount:" + this.props.caption);
	   CounterStore.addChangeListener(this.onChange);
	}
    componentWillUnmount() {
       CounterStore.removeChangeListener(this.onChange);
    }
	onClickPlusButton(){
		 Actions.increment(this.props.caption);
	}
	onClickMinusButton(){
		Actions.decrement(this.props.caption);
	}
	componentWillReceiveProps(nextProps){
		// console.log("enter componentWillReceiveProps:" + this.props.caption)
	}
	shouldComponentUpdate(nextProps, nextState){
       if(nextProps.caption !== this.props.caption){
       	return true;
       }
       if(nextState.count !== this.state.count){
       	return true;
       }
       return false;
	}
     onChange() {
       const newCount = CounterStore.getCounterValues()[this.props.caption];
       this.setState({count: newCount});
     }
	render(){
		// console.log("enter componentRender:" + this.props.caption)
		const caption = this.props.caption
		const countStyle = {
			margin: '30px'
		}
		return(
		  <div style={ countStyle }>
		     <button onClick={ this.onClickPlusButton }>+</button>&nbsp;&nbsp;

		      <button onClick={ this.onClickMinusButton }>-</button>&nbsp;&nbsp;
                 
                <span>
		         {caption} Click count: {this.state.count}
		      </span>
		   </div>
	     );
	
	}
}

ClickCounter.propTypes = {
		caption: PropTypes.string.isRequired,
		initValue: PropTypes.number,
		onUpdate: PropTypes.func
	}
//set default props
ClickCounter.defaultProps = {
	initValue: 0,
	onUpdate: f => f
}
export default ClickCounter;
