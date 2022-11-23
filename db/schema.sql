-- Created my databases and the tables needed

DROP DATABASE IF EXISTS twitter_db;
CREATE DATABASE twitter_db;

USE twitter_db;

CREATE TABLE department (
    id INT PRIMARY KEY NOT NULL,
    department_name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY(roles_id) REFERENCES roles(id)
);

