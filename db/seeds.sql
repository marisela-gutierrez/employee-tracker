INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Lead Engineer', 160000, 2),
  ('Sales Lead', 95000, 1),
  ('Legal Team Lead', 190000, 4),
  ('Sales Person', 80000, 1),
  ('Software Engineer', 150000, 2),
  ('Finance Manager', 160000, 3),
  ('Lawyer', 170000, 4),
  ('Accountant', 130000, 3),
  ('Accounting Assistant', 93000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('William', 'Delany', 1, NULL),
  ('Tony', 'Duvert', 2, NULL),
  ('Dennis', 'Cooper', 3, NULL),
  ('Monica', 'Bellucci', 4, 2),
  ('Samuel', 'Johnson', 5, 1),
  ('John', 'Dryden', 6, NULL),
  ('Alexander', 'Pope', 7, 3),
  ('Lionel', 'Johnson', 8, 6),
  ('Aubrey', 'Beardsley', 9, 6),
  ('Lauren', 'Hill', 5, 1),
  ('Larry', 'Shaw', 5, 1),
  ('Vickie', 'Crane', 4, 2),
  ('Liam', 'Collins', 4, 2),
  ('James', 'Gaskell', 8, 6);
  

  