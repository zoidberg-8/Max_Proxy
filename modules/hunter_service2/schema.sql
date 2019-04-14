DROP DATABASE IF EXISTS nike2;

CREATE DATABASE nike2;

USE nike2;

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
