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
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4"><h1>Random Number Generator</h1></div>
          <div className="col-4"></div>
        </div>
        
        <div className="headers">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"><h2 className="lowhead">Low Bound</h2></div>
            <div className="col-3"><h2 className="highhead">High Bound</h2></div>
            <div className="col-3"></div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3"><input type="text" className="lowbound" onChange={this.handleLowBound.bind(this)} value={this.state.lowBound}/></div>
          <div className="col-3"><input type="text" className="highbound" onChange={this.handleHighBound.bind(this)} value={this.state.highBound}/></div>
          <div className="col-3"></div>
        </div>
        
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6"><p className="randnum">{this.state.randomNum}</p></div>
          <div className="col-3"></div>
        </div>
        
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6"><button onClick={this.onRandomizeClick.bind(this)}>Generate</button></div>
          <div className="col-3"></div>
        </div>
      </div>
    );
        //Class methods are not bound by default. So bind() is necessary to use 'this' properly.
  }
}

ReactDOM.render(
  <RandomNum />,
  document.getElementById('container')
);