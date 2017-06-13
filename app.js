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
    var animate, curState = this;
    var startTime = new Date().getTime();  //Start time of when the button is clicked.
    if(low >= high) {
      alert("Bounds are incorrect.");
    }
    else {
      animate = setInterval(function() {
        if (new Date().getTime() - startTime > 2000) {
          clearInterval(animate); //Stop animating after 2 seconds
        }
        else {
          curState.setState({
            randomNum: Math.floor((Math.random() * ((high-low) + 1)) + low)
          });
        }
      }, 100);
    }
  }
  
  render() {  
    return (
      <div>
        <h1>Random Number Generator</h1>
        
        <div className="headers">
          <h2 className="lowhead">Low Bound</h2>
          <h2 className="highhead">High Bound</h2>
        </div>
        
        <input type="text" className="lowbound" onChange={this.handleLowBound.bind(this)} value={this.state.lowBound}/>
        <input type="text" className="highbound" onChange={this.handleHighBound.bind(this)} value={this.state.highBound}/>
        
        <p className="randnum">{this.state.randomNum}</p>
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