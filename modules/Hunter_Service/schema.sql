DROP DATABASE IF EXISTS nike;

CREATE DATABASE nike;

USE nike;

CREATE TABLE suggestions (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  url varchar(10000) NOT NULL,
  price int(5) NOT NULL,
  category varchar(50) NOT NULL,
  colors int(2) NOT NULL,
  style varchar(50) NOT NULL,
  shoe_kind varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE description (
  id int NOT NULL AUTO_INCREMENT,
  description varchar(1000) NOT NULL,
  benefits varchar(1000) NOT NULL,
  item_headline varchar(500) NOT NULL,
  shown varchar(500) NOT NULL,
  style varchar(500) NOT Null,
  product_details varchar(1000) NOT NULL,
  PRIMARY KEY (ID)
);