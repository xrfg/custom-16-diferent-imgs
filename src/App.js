import React from "react";
import Avatar from "./Components/Avatar";
import sizes from "./json/sizes.json";
import styles from "./json/styles.json";
import "./App.css";
import Description from "./Components/Description";

class App extends React.Component {
  state = {
    currentSize: "https://picsum.photos/200/200",
    currentSizeLabel: "m",
    currentStyle: "0",
    currentStyleLabel: "square",
  };

  changeSize = (e) => {
    let filteredSizes = sizes.filter((item) => {
      let clickedBtn = e.target.innerHTML;

      if (clickedBtn === item.size) return item.src;
    });

    this.setState({
      currentSize: filteredSizes[0].src,
      currentSizeLabel: filteredSizes[0].size,
    });
  };

  changeStyle = (e) => {
    let filteredStyles = styles.filter((item) => {
      let clickedBtn = e.target.innerHTML;

      if (clickedBtn === item.style) return item.borderRadius;
    });

    this.setState({
      currentStyle: filteredStyles[0].borderRadius,
      currentStyleLabel: filteredStyles[0].style,
    });
  };

  render() {
    // console.log("re-render");
    return (
      <div className="App">
        <div className="sizes">
          <button onClick={this.changeSize}>s</button>
          <button onClick={this.changeSize}>m</button>
          <button onClick={this.changeSize}>l</button>
          <button onClick={this.changeSize}>xl</button>
        </div>
        <div className="styles">
          <button onClick={this.changeStyle}>square</button>
          <button onClick={this.changeStyle}>rounded</button>
          <button onClick={this.changeStyle}>circle</button>
        </div>
        <div className="image">
          <Avatar
            size={this.state.currentSize}
            style={this.state.currentStyle}
          />
        </div>
        <div className="description">
          <Description
            size={this.state.currentSizeLabel}
            style={this.state.currentStyleLabel}
          />
        </div>
      </div>
    );
  }
}

export default App;
