import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  // state = {
  //   name: "ABCD"
  // };

  render() {
    return (
      <div className="App">
        <h3> Name : {this.props.displayName} </h3>
        <br />
        <button onClick={this.props.displayKunal}> Kunal Hinduja </button>
        <button onClick={this.props.displayNeha}> Neha Hinduja </button>
      </div>
    );
  }
}

const matchStateToProps = state => {
  return {
    displayName: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    displayKunal: () => dispatch({ type: "KUNAL" }),
    displayNeha: () => dispatch({ type: "NEHA" })
  };
};

export default connect(matchStateToProps, mapDispatchToProps)(App);
