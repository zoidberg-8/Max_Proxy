import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import styles from "./Components/Styles.module.css";

import ProductInfo from "./Components/ProductInfo.jsx";
import ProductSelector from "./Components/ProductSelector.jsx";
import ProductView from "./Components/ProductView.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      images: []
    };
  }

  componentDidMount() {
    $.get("/initial", function(product) {}).done(product => {
      this.setState({
        product: product
      });
    });

    // ${window.location.pathname.slice(1)
    // $.get(`/api/product/}`, function(product) {})
    // .done((product) => {
    //   this.setState({
    //     product: product
    //   });
    // });

    $.get("/api/main", function(images) {}).done(images => {
      this.setState({
        images: images
      });
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.picContainer}>
          {this.state.product.map((product, index) => (
            <ProductView key={index} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("mainimage"));
