import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ClickCounter extends Component {
	constructor(props){
		super(props);
		this.onClickPlusButton = this.onClickPlusButton.bind(this);
	     this.onClickMinusButton = this.onClickMinusButton.bind(this);
		this.state = { count: props.initValue }
	}
	componentWillMount(){
		console.log("enter componentWillMount:" + this.props.caption)
	}
	componentDidMount(){
		console.log("enter componentDidMount:" + this.props.caption)
	}
	onClickPlusButton(){
		// this.setState({ count: this.state.count + 1});
		this.updateCount(true);
	}
	onClickMinusButton(){
		// this.setState({ count: this.state.count - 1})
		this.updateCount(false);
	}
	componentWillReceiveProps(nextProps){
		console.log("enter componentWillReceiveProps:" + this.props.caption)
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
	updateCount(isIncrement){
		const previousValue = this.state.count;
		const newValue = isIncrement ? previousValue + 1 : previousValue -1;
		this.setState({count: newValue});
		this.props.onUpdate(newValue, previousValue);
	}
	render(){
		console.log("enter componentRender:" + this.props.caption)
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
