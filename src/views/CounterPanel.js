import React, { Component } from 'react';
import CounterContainer from './ClickCounter';
import Summary from './Summary.js';

const style = {
  margin: '20px'
};

class CounterPanel extends Component {
  render(){
  	return(
            <div style={ style }>
              <CounterContainer caption="First" />
  	           <CounterContainer caption="Second" />
  	           <CounterContainer caption="Third" />
              <hr />
              <Summary />
            </div>
  		);
  
  }
}
export default CounterPanel;