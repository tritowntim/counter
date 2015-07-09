var Button = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.handleClick}>bump</button>
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
  increment: function() {
    this.setState({counter: this.state.counter + 1, prevTime: this.state.currTime, currTime: new Date().getTime()});
  },
  render: function() {
    return (
      <div>
        <Button handleClick={this.increment}/>
        <Result counter={this.state.counter} prevTime={this.state.prevTime} currTime={this.state.currTime}/>
      </div>
    );
  }
});

React.render(<Main />, document.getElementById('root'));
