-- CREATE DATABASE checkout;

-- USE checkout;

CREATE TABLE checkoutsequence (
  id INT(11) PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(35) NOT NULL,
  password VARCHAR(25),
  line1 VARCHAR(50),
  line2 VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(50),
  zip INT(11),
  phone VARCHAR(25),
  ccNumber VARCHAR(35),
  expDate VARCHAR(20),
  billingzip INT(11)
);


  /* Describe your table here.*/


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

