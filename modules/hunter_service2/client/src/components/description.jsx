import React from "react";
import ReactDOM from "react-dom";
import ModalDescription from "./Modal.description.jsx";
import SizeButton from "./SizeButton.jsx";
import styles from "./description.css";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "white",
      colour: "black"
    };
  }
  clicked() {
    this.setState({ colour: "white", background: "black" });
  }

  render() {
    return (
      <div className={styles.describe}>
        <h2>Select Size</h2>
        <div className={styles.size}>
          {this.props.shoeSize.map(data => (
            <SizeButton
              data={data.sizes}
              grey={data.available}
              bgcolor={this.state.background}
              color={this.state.colour}
              clickedButton={this.clicked.bind(this)}
            />
          ))}
        </div>
        <div className={styles.shoppingbuttons}>
          <button className={styles.addcart}>Add to Cart</button>
          <button className={styles.heart}>&lt;3</button>
        </div>

        <p>{this.props.describes.description}</p>
        <ul>
          <li>Shown: {this.props.describes.shown}</li>
          <li>Style: {this.props.describes.style}</li>
        </ul>
        <p />
        <div>
          <ModalDescription info={this.props.describes} />
        </div>
      </div>
    );
  }
}

export default Description;
