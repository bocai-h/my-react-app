import React, { Component } from 'react';
import ClickCounter from './ClickCounter';
import Summary from './Summary.js';

class CounterPanel extends Component {
  render(){
  	return(
            <div>
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