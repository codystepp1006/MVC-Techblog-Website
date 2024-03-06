DROP TABLE IF EXISTS account;
DROP TABLE IF EXISTS blogpost;

CREATE TABLE `account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(55) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);

CREATE TABLE blogpost (
  id INT PRIMARY KEY AUTO_INCREMENT,
  blog_data VARCHAR(500),
  account_id INT,
  FOREIGN KEY (account_id) REFERENCES account(id)
);