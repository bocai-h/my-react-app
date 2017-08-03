
import React, { Component, PropTypes } from 'react';

function Summary(props) {
  return(
    <div>Total count: { props.sum } </div>
  );
}

class SummaryContainer extends Component{
  constructor(props,context) {
    super(props,context);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextState.sum !== this.state.sum;
  }
  componentDidMount() {
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
     this.context.store.unsubscribe(this.onChange);
  }
  getOwnState(){
    const state = this.context.store.getState();
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

SummaryContainer.contextTypes = {
  store: PropTypes.object
}
export default SummaryContainer;