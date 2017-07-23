import React, { Component } from 'react';
import ClickCounter from './ClickCounter';

class CounterPanel extends Component {
  render(){
  	return(
            <div>
                <ClickCounter caption="First" />
  	           <ClickCounter caption="second" initValue={1} />
  	           <ClickCounter caption="Third" initValue={2} />
            </div>
  		);
  
  }
}
export default CounterPanel;