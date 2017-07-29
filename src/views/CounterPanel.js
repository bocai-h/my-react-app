import React, { Component } from 'react';
import ClickCounter from './ClickCounter';
import Summary from './Summary.js';

const style = {
  margin: '20px'
};

class CounterPanel extends Component {
  render(){
  	return(
            <div style={ style }>
              <ClickCounter caption="First" />
  	           <ClickCounter caption="Second" />
  	           <ClickCounter caption="Third" />
              <hr />
              <Summary />
            </div>
  		);
  
  }
}
export default CounterPanel;