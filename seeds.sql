USE employees_db;

INSERT INTO department (id, name)
VALUES (01, "Client Success"),
       (02, "Sales"),
       (03, "Operations");

INSERT INTO role (id, title, salary, department_id)
VALUES (30, "Client Success Specialist", 50000, 01),
       (31, "Supervisor", 60000, 01),
       (32, "Conference Manager", 70000, 01),
       (40, "Sales Agent", 55000, 02),
       (41, "Supervisor", 65000, 02),
       (42, "Conference Manager", 80000, 02),
       (50, "Ops Agent", 55000, 03),
       (51, "Supervisor", 65000, 03),
       (52, "Conference Manager", 80000, 03);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (102, "Michael", "Mina", 32, NULL),
       (101, "Sherry", "Potts", 31, 102),
       (100, "Todd", "Davis", 30, 102);



       