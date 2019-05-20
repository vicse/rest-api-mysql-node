CREATE DATABASE IF NOT exists company;

use company;

CREATE TABLE employees(
	id INT(11) not null auto_increment,
    name varchar(54) default null,
    salary int(11) default null,
    primary key(id)
);

describe employees;

insert into employees values
(1, 'Vicse Ore', 20000),
(2, 'Arian Angoma', 10000),
(3, 'David Angoma', 10000);

select * from employees;

