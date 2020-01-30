USE employee_trackerDB;

INSERT INTO department (name) VALUES ("Dentists");
INSERT INTO department (name) VALUES ("Front Office");
INSERT INTO department (name) VALUES ("Back Office");
INSERT INTO department (name) VALUES ("Cleaning Staff");


INSERT INTO role (title, salary, department_id) VALUES ("Owner", 400000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Associate", 175000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Office Manager", 200000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Hygienist", 65000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Chair Side Assistant", 40000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Hygiene Assistant", 30000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Sterlization Tech", 200000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Insurance Specialist", 55000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Scheduling Coordinator", 45000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Lead Cleaner", 15000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Cleaner", 10000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Phill", "Harwood", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Paul", "Smith", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Debbie", "Harwood", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Heather", "Carr", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dana", "Engle", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Krysta", "Culkin", 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Shelby", "Hanford", 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Edith", "Martinez", 6, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Carol", "Taylor", 7, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Rose", "Gomez", 8, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Cheryl", "Thompson", 9, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Katie", "Hudson", 10, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Tasha", "Murphy", 11, 10);