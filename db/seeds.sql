-- Inserted the values into each of my tables

INSERT INTO department(id, department_name)
VALUES
    (001, "Software Engineering"),
    (002, "Sales"),
    (003, "Legal"),
    (004, "Marketing"),
    (005, "Finance");


INSERT INTO roles(id, title, salary, department_id)
VALUES
    (001, "Full stack developer", 75000, 001),
    (002, "Senior Paralegal", 120000, 003),
    (003, "Sales Director", 98000, 002),
    (004, "Product Marketing Manager", 80000, 004),
    (005, "Lead Accountant", 250000, 005);



INSERT INTO employee(id, first_name, last_name, roles_id, manager_id)
VALUES
    (001, "Richard", "Roarke", 005, 001),
    (002, "Sally", "Greene", 004, 002),
    (003, "Michelle", "Peters", 003, 005),
    (004, "Mark", "Ralphienes", 002, 004),
    (005, "Finn", "Wolf", 001. 003);
    