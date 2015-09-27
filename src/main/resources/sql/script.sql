CREATE SCHEMA IF NOT EXISTS crudapp;

USE crudapp;

CREATE TABLE IF NOT EXISTS users
(
  id         INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(40)     NOT NULL,
  last_name  VARCHAR(40)     NOT NULL,
  salary     INT                      DEFAULT NULL
)
  ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8;

USE crudapp;
DROP PROCEDURE IF EXISTS `GetUserByCriteria`;

DELIMITER $$
USE crudapp $$
CREATE PROCEDURE GetUserByCriteria(IN criteria VARCHAR(255))
  BEGIN
    SELECT
      id,
      first_name,
      last_name,
      salary
    FROM
      (
        SELECT
          id,
          first_name,
          last_name,
          salary,
          concat(first_name, ' ', last_name) AS fullName
        FROM users
        HAVING fullName LIKE concat('%', criteria, '%')
      ) AS result;
  END
$$
DELIMITER ;

INSERT INTO users (first_name, last_name, salary) VALUES
  ('Mark', 'Avren', NULL),
  ('Jennifer', 'Osborne', 800),
  ('Grace', 'Begum', 2000),
  ('Cerys', 'Conway', 1300),
  ('Reece', 'Storey', 3000),
  ('Ruby', 'Whitehead', 900),
  ('Reece', 'Austin', NULL),
  ('Oliver', 'Nixon', 2000);
