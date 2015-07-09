var Button = React.createClass({
  handleClickWithAmount: function() {
    return this.props.handleClick(this.props.amount);
  },
  render: function() {
    return (
      // Alternatively use onClick={this.handleClickWithAmount}
      <button onClick={this.props.handleClick.bind(this, this.props.amount)}>+{this.props.amount}</button>
    );
  }
});

var Result = React.createClass({
  render: function() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <p>{this.props.prevTime} &rarr; {this.props.currTime} ... {this.props.currTime - this.props.prevTime} ms</p>
      </div>
    );
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return { counter: 0, prevTime: 0, currTime: 0 };
  },
  increment: function(amount) {
    this.setState({counter: this.state.counter + amount, prevTime: this.state.currTime, currTime: new Date().getTime()});
  },
  render: function() {
    return (
      <div>
        <Button handleClick={this.increment} amount={1}/>
        <Button handleClick={this.increment} amount={2}/>
        <Result counter={this.state.counter} prevTime={this.state.prevTime} currTime={this.state.currTime}/>
      </div>
    );
  }
});

React.render(<Main />, document.getElementById('root'));
