import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  handleEventLogByNodeWithPhase(evt, node) {
    console.log(`event passes ${node}`);
    this.setState({
      nodes: [...this.state.nodes, node],
    });
  }

  handleMsgClear() {
    this.setState({ msgs: [] });
  }

  render() {
    return (
      <div className="app">
        App
        <div
          className="grandmother cube"
          onClick={evt => this.handleEventLogByNodeWithPhase(evt, 'grandmother')}
        >
          GrandMother
          <div
            className="mother cube"
            onClick={evt => this.handleEventLogByNodeWithPhase(evt, 'mother')}
          >
            Mother
            <div
              className="child cube"
              onClick={evt => this.handleEventLogByNodeWithPhase(evt, 'child')}
            >
              Child
            </div>
          </div>
        </div>
        <div className="event-propagation-log">
          <div>
            <button onClick={::this.handleMsgClear}>Clear Logs</button>
          </div>
          ----- event propagation logs below -----
          <ul>
            {this.state.nodes.length
              ? this.state.nodes.map((node, index) => (
                <li key={index}>
                  {`event passes node: ${node}`}
                </li>
              ))
              : null
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
