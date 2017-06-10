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
  
  onRandomizeClick(evt) {
    var low = parseInt(this.state.lowBound), high = parseInt(this.state.highBound);
    if(low >= high) {
      alert("Bounds are incorrect.");
    }
    else {
      this.setState({
        randomNum: Math.floor((Math.random() * ((high-low) + 1)) + low)
      });
    }
  }
  
  render() {  
    return (
      <div>
        <h2>Low Bound</h2>
        <input type="text" className="lowbound" onChange={this.handleLowBound.bind(this)} value={this.state.lowBound}/>
        
        <h2>High Bound</h2>
        <input type="text" className="highbound" onChange={this.handleHighBound.bind(this)} value={this.state.highBound}/>
        
        <p>{this.state.randomNum}</p>
        <button onClick={this.onRandomizeClick.bind(this)}>Generate</button>
      </div>
    );
        //Class methods are not bound by default. So bind() is necessary to use 'this' properly.
  }
}

ReactDOM.render(
  <RandomNum />,
  document.getElementById('container')
);