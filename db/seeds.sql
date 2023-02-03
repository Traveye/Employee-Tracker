USE employees_db;

INSERT INTO department (name)
VALUES ("Client Success"),
       ("Sales"),
       ("Operations");

INSERT INTO role (title, salary, department_id)
VALUES ("Client Success Specialist", 50000, 01),
       ("Supervisor", 60000, 01),
       ("Conference Manager", 70000, 01),
       ("Sales Agent", 55000, 02),
       ("Supervisor", 65000, 02),
       ("Conference Manager", 80000, 02),
       ("Ops Agent", 55000, 03),
       ("Supervisor", 65000, 03),
       ("Conference Manager", 80000, 03);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Mina", 3, NULL),
       ("Sherry", "Potts", 1, 1),
       ("Todd", "Davis", 2, 1);



       