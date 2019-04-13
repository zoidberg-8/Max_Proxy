import React from "react";
import ReactDOM from "react-dom";
import styles from "./IndividualSuggestions.css";

class IndividualSuggestion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.shoe}>
        <div className={styles.crop}>
          <a href={`../${Math.floor(Math.random() * 100)}`}>
            <img src={this.props.data.url} className={styles.pic} />
          </a>
        </div>
        <p>{this.props.data.colors} colors</p>
        <h3>Nike Air {this.props.data.name}</h3>
        <p>{this.props.data.shoe_kind} Shoe</p>
        <p>${this.props.data.price}</p>
      </div>
    );
  }
}

export default IndividualSuggestion;
