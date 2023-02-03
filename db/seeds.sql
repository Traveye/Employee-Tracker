USE employees_db;

INSERT INTO department (name)
VALUES ("Client Success"),
       ("Sales"),
       ("Operations");

INSERT INTO role (title, salary, department_id)
VALUES ("Client Success Specialist", 50000, 1),
       ("Supervisor", 60000, 1),
       ("Conference Manager", 70000, 1),
       ("Sales Agent", 55000, 2),
       ("Supervisor", 65000, 2),
       ("Conference Manager", 80000, 2),
       ("Ops Agent", 55000, 3),
       ("Supervisor", 65000, 3),
       ("Conference Manager", 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Mina", 3, NULL),
       ("Sherry", "Potts", 1, 1),
       ("Todd", "Davis", 2, 1);



       