
import React, { Component } from 'react';

import store from '../stores/Store.js';

class Summary extends Component {

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
      <div>Total Count: {sum}</div>
    );
  }
}

export default Summary;