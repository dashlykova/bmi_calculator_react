import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: '',
      height: ''
    }
  }


  render() {
    return (
      <div>
        <div>
          <label>Weight</label>
          <input
            placeholder={this.state.method === 'metric' ? 'kg' : 'lbs'}
            name="weight"
            value={this.state.weight}
            onChange={(e) => this.setState({ weight: e.target.value })}
          />
        </div>
        <div>
          <label>Height</label>
          <input
            placeholder={this.state.method === 'metric' ? 'cm' : 'in'}
            name="height"
            value={this.state.height}
            onChange={(e) => this.setState({ height: e.target.value })}
          />
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
        />
      </div>
    );
  }

}

export default App;
