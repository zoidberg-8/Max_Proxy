import React from 'react';
import styles from './Styles.module.css';

class ProductSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className={styles.selector}>
      {/* <img
      className={styles.selectImg}
      src={this.props.shoe.main_img}
      /> */}
      <img
      className={styles.selectImg}
      src='https://c.static-nike.com/a/images/t_PDP_144_v1/f_auto/dicle1kmn9lefvul4umj/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
      />
      <img
      className={styles.selectImg}
      src='https://c.static-nike.com/a/images/t_PDP_144_v1/f_auto/voavdpvleqntejyunmx3/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
      />
      <img
      className={styles.selectImg}
      src='https://c.static-nike.com/a/images/t_PDP_144_v1/f_auto/trrurwrgjoztj84v8vzc/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
      />
      <img
      className={styles.selectImg}
      src='https://c.static-nike.com/a/images/t_PDP_144_v1/f_auto/htbt4rskmsrhxfhsoqs3/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
      />
      <img
      className={styles.selectImg}
      src='https://c.static-nike.com/a/images/t_PDP_144_v1/f_auto/ytzdf6z0rhvcyf5yfpu2/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg'
      />
    </div>
    );
  }
}

export default ProductSelector;