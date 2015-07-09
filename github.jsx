var Card = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    $.get('https://api.github.com/users/' + this.props.username, function(data) {
      this.setState(data);
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <img src={this.state.avatar_url} width="80"/>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
});

var Form = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var username = React.findDOMNode(this.refs.username);
    this.props.addCard(username.value);
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="github username" ref="username" />
        <button>Add</button>
      </form>
    );
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return { usernames: [] };
  },
  addCard: function(username) {
    this.setState({ usernames: this.state.usernames.concat(username) });
  },
  render: function() {
    var cards = this.state.usernames.map(function(username) { return <Card username={username} /> });
    return (
      <div>
        <Form addCard={this.addCard}/>
        {cards}
      </div>
    );
  }
});

React.render(<Main />, document.getElementById('root'));
