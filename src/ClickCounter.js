import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ClickCounter extends Component {
	constructor(props){
		super(props);
		this.onClickPlusButton = this.onClickPlusButton.bind(this);
	     this.onClickMinusButton = this.onClickMinusButton.bind(this);
		this.state = { count: props.initValue }
	}
	onClickPlusButton(){
		this.setState({ count: this.state.count + 1});
	}
	onClickMinusButton(){
		this.setState({ count: this.state.count - 1})
	}
	render(){
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
		initValue: PropTypes.number
	}
//set default props
ClickCounter.defaultProps = {
	initValue: 0
}
export default ClickCounter;
