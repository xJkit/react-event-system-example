import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="grandmother cube">
          GrandMother
          <div className="mother cube">
            Mother
            <div className="child cube">
              Child
            </div>
          </div>
        </div>
        <div className="event-propagation-log">
          ----- event propagation logs below -----
        </div>
      </div>
    );
  }
}

export default connect()(App);
