var USER_DATA = {
  name: "filip Juristovski",
  username: 'fjur',
  image: "https://scontent-sea1-1.xx.fbcdn.net/hprofile-xfa1/v/t1.0-1/p160x160/11742674_10155923764465604_9211855613584821142_n.jpg?oh=4bdf4c5491ef2491f2862aa30dfa54fd&oe=57AE9303"
}

var React = require('react');
var ReactDOM = require('react-dom');

//f(d)=v

/*
  Focused
  Independent
  Reuasable
  Small
  Testable
*/

var Link = React.createClass({
  changeURL: function () {
    window.location.replace(this.props.href)
  },
  render: function(){
    return (
      <span style={{color: 'blue', cursor: 'pointer'}}
      onClick={this.changeURL}>
      {this.props.children}
      </span>
    )
  }
});

var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function (){
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
        {this.props.username}
        </Link>
      </div>
      )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return (
      <div>{this.props.name}</div>
      )
  }
});

var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);