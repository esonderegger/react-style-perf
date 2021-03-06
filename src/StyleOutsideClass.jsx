import React from 'react';

const counterStyles = {
  margin: '50px',
  padding: '50px',
  height: '90px',
  lineHeight: '40px',
  width: '200px',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  fontSize: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
};
const headerText = '(outside of class)';

export default class StyleOutsideClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }
  componentDidMount() {
    setInterval(this.increment, 10);
  }
  increment() {
    this.setState({ counter: this.state.counter + 0.01 });
  }
  render() {
    return (
      <div style={counterStyles}>
        <div>{headerText}</div>
        <div>{this.state.counter.toFixed(2)}</div>
      </div>
    );
  }
}
