DROP DATABASE IF EXISTS prodimgs;

CREATE DATABASE prodimgs;

USE prodimgs;

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(40) NOT NULL,
  price int NOT NULL,
  category varchar(30) NOT NULL,
  product_url varchar(100) NOT NULL,
  main_img varchar(100) NOT NULL,
  front_view varchar(100) NOT NULL,
  back_view varchar(100) NOT NULL,
  bottom_view varchar(100) NOT NULL,
  top_view varchar(100) NOT NULL,
  right_side varchar(100) NOT NULL,
  PRIMARY KEY (id)
);
