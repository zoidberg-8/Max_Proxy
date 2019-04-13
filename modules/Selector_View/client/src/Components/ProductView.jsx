import React from 'react';
import styles from './Styles.module.css';

class ProductView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className={styles.pics}>
        <img
        className={styles.pic}
        // src={this.props.product.main_img}
        src='https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/gj1jbut3t8kqf2ynk5vb/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
        />
        <img
        className={styles.pic}
        // src={this.props.product.front_view}
        src='https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/gmjndk4sagxtaxwopbtw/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
        />
        <img
        className={styles.pic}
        // src={this.props.product.back_view}
        src='https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cd4u68016opij4qld0bf/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
        />
        <img
        className={styles.pic}
        // src={this.props.product.bottom_view}
        src='https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b1thk2jr4lkqf3yvjkox/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
        />
        <img
        className={styles.pic}
        // src={this.props.product.top_view}
        src='https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/biksdtxbtsebehd16ywj/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
        />
        <img
        className={styles.pic}
        // src={this.props.product.right_side}
        src='https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dssqbpqryci67th78v26/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
        />
      </div>
    )
  }
}

export default ProductView;
