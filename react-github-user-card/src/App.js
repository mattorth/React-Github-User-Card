import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from "./Components/UserCard";
import FollowerCard from "./Components/FollowerCard";

class App extends React.Component {
  state = {
    myInfo: {},
    followers: []
  }

  componentDidMount() {
    fetch("https://api.github.com/users/mattorth")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({myInfo: res})
      })
      .catch(err => {
        console.log(err)
      })
    fetch("https://api.github.com/users/mattorth/followers")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({followers: res})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div>
        <UserCard info={this.state.myInfo} />
        <div>
          {this.state.followers.map(follower => (
          <FollowerCard key={follower.id} info={follower} />
          ))}
        </div>
      </div>
      
      
    )
  }
}

export default App;
