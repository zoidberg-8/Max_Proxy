import React from "react";
import ReactDOM from "react-dom";
import Suggestions from "./components/suggestions.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggest: [1,1,1,1,1,1,1,1,1]
    };
  }
  componentDidMount() {
    var path = window.location.pathname;
    var prodid = path.slice(7);
    if (prodid.length < 1) {
      prodid = "1/";
    }
    axios
      .get(`/shoes/${prodid}suggestions`)
      .then(response => {
        this.setState({ suggest: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Suggestions suggests={this.state.suggest} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("suggestion"));
