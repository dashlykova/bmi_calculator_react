import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import './App.css'
import MethodSelect from './Components/methodSelector';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }
  methodChange = event => {
    this.setState({ method: event.target.value });
  };

  render() {
    return (
      <div className='container'>
        <h1 className='header'>BMI CONVERTER</h1>
        <MethodSelect 
          method={this.state.method}
          onChangeValue={this.methodChange}
        />
          <div className='content'>
            <div className='weight'>
              <label>Weight</label>
              <input className='weight_input'
                placeholder={this.state.method === 'metric' ? 'kg' : 'lbs'}
                name="weight"
                value={this.state.weight}
                onChange={(e) => this.setState({ weight: e.target.value })} 
              />
            </div>

            <div className='height'>
              <label>Height</label>
              <input className='height_input'
                placeholder={this.state.method === 'metric' ? 'cm' : 'in'}
                name="height"
                value={this.state.height}
                onChange={(e) => this.setState({ height: e.target.value })} />
            </div>
          </div>

          <div className="display">
          <DisplayResult
            weight={this.state.weight}
            height={this.state.height}
            method={this.state.method}
          />
          </div>
      </div>
    );
  }

}

export default App;
