var React = require('react');
var ReactDOM = require('react-dom');

class RandomNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowBound: 0,
      highBound: 0,
      randomNum: 0
    };
  }
  
  onRandomizeClick(evt) {
    if(this.state.lowBound >= this.state.highBound) {
      alert("Bounds are incorrect.");
    }
    else {
      this.setState({
        randomNum: Math.floor((Math.random() * this.state.highBound + 1) + this.state.lowBound)
      });
    }
  }
  
  handleLowBound(e) {
    this.setState({
      lowBound: e.target.value
    });
  }
  
  handleHighBound(e) {
    this.setState({
      highBound: e.target.value
    });
  }
  
  render() {  
    return (
      <div>
        <h2>Low Bound</h2>
        <input type="number" className="lowbound" onChange={this.handleLowBound.bind(this)} value={this.state.lowBound}/>
        
        <h2>High Bound</h2>
        <input type="number" className="highbound" onChange={this.handleHighBound.bind(this)} value={this.state.highBound}/>
        
        <p>{this.state.randomNum}</p>
        <button onClick={this.onRandomizeClick.bind(this)}>Generate</button>
        //Class methods are not bound by default. So bind() is necessary to use 'this' properly.
      </div>
    );
  }
}

ReactDOM.render(
  <RandomNum />,
  document.getElementById('container')
);