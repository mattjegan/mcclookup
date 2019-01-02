import React, { Component } from 'react';
import mccs from './mccs.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    const mccMatch = this.state.search ? mccs.filter((mccObj) => mccObj.mcc === this.state.search) : [];

    return (
      <div className="App">
        <h1>MCC Look Up</h1>
        <h2>Look up any <a href="https://en.wikipedia.org/wiki/Merchant_category_code">Merchant Category Code</a></h2>

        <input name="Search" placeholder="Search..." type="number" value={this.state.search} onChange={this.handleInputChange}/>

        { mccMatch.length !== 0 ? (
          <p>{mccMatch[0].description}</p>
        ) : null }

      </div>
    );
  }
}

export default App;
