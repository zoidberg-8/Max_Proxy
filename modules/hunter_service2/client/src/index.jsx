import React from "react";
import ReactDOM from "react-dom";
import Description from "./components/Description.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descript: [],
      sizes: [
        5,
        6,
        6.5,
        7,
        7.5,
        8,
        8.5,
        9,
        9.5,
        10,
        10.5,
        11,
        11.5,
        12,
        12.5,
        13,
        14,
        15
      ],
      newArr: []
    };
  }
  componentDidMount() {
    var path = window.location.pathname;
    var prodid = path.slice(7);
    if (prodid.length < 1) {
      prodid = "1/";
    }
    axios
      .get(`/shoes/${prodid}description`)
      .then(response => {
        this.setState({ descript: response.data[0] });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(`/shoes/${prodid}sizes`)
      .then(response => {
        this.setState({ newArr: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Description
          describes={this.state.descript}
          size={this.state.sizes}
          shoeSize={this.state.newArr}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("describe"));
