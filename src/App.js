import React, { Component } from 'react';
import './App.css';

import  {connect} from 'react-redux';
import {updateUser} from './Actions/user-action'
class App extends Component {

 
  constructor(){
    super();
    this.onClickUpdate=this.onClickUpdate.bind(this);
  }

  onClickUpdate(){
    const user={name:'Hatice', age:'23'};
    console.log(this.props);
    this.props.dispatch(updateUser(user));
  }

  render() {
    return (
      <div className="App">
       {this.props.user.name}-{this.props.user.age}
       <br></br>
       <button  onClick={this.onClickUpdate}>Değiştir</button>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps)(App);
