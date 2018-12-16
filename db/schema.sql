DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;
-- Creates the table "burgers" within burgers_db --
CREATE TABLE burgers (
  -- Makes an integer column called "id" which cannot contain null --
  id INTEGER (100) AUTO_INCREMENT NOT NUll, 
  -- Makes an string column called "burger_name" which cannot contain null --
  burger_name STRING (155) NOT NULL,
  -- Makes a boolean column called "devoured" which cannot contain null --
  devoured BOOLEAN () NULL,
      --sets the primary key--
  PRIMARY KEY (id)
);
