
import React, { Component } from 'react';

import store from '../stores/Store.js';

function Summary(props) {
  return(
    <div>Total count: { props.sum } </div>
  );
}

class SummaryContainer extends Component{
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextState.sum !== this.state.sum;
  }
  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
     store.unsubscribe(this.onChange);
  }
  getOwnState(){
    const state = store.getState();
    let sum = 0;
    for(let key in state){
      if(state.hasOwnProperty(key)){
        sum += state[key];
      }
    }
    return { sum: sum };
  }
  onChange() {
    this.setState(this.getOwnState());
  }

  render() {
    const sum = this.state.sum;
    return (
      <Summary sum = { this.state.sum } />
    );
  }
}
export default SummaryContainer;