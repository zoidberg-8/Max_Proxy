import React from 'react';
import styles from './Styles.module.css';

const ProductInfo = ({product}) => (
  <div className={styles.info}>
    <div className={styles.headers}>
      <h3 className={styles.category}>{product.category}</h3>
      <h1 className={styles.name}>Nike Air {product.name}</h1>
    </div>
    <div className={styles.price}>${product.price}</div>
  </div>
);

export default ProductInfo;