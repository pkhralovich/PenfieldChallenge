DROP SCHEMA IF EXISTS `penfield` ;

CREATE SCHEMA IF NOT EXISTS `penfield` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `penfield` ;

CREATE TABLE `penfield`.`customers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

CREATE TABLE `penfield`.`sales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customer` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `customer_sales_idx` (`customer` ASC) VISIBLE,
  CONSTRAINT `customer_sales`
    FOREIGN KEY (`customer`)
    REFERENCES `penfield`.`customers` (`id`));

CREATE TABLE `penfield`.`vouchers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(30) NOT NULL,
  `expirationDate` DATETIME NOT NULL,
  `sale` INT NOT NULL,
  PRIMARY KEY (`id`, `code`),
  UNIQUE INDEX `code_UNIQUE` (`code` ASC) VISIBLE,
  UNIQUE INDEX `sale_UNIQUE` (`sale` ASC) VISIBLE,
  CONSTRAINT `voucher_sale`
    FOREIGN KEY (`sale`)
    REFERENCES `penfield`.`sales` (`id`));

CREATE TABLE `penfield`.`survey_responses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sale` INT NOT NULL,
  `satisfaction` TINYINT NOT NULL,
  `description` TINYINT NOT NULL,
  `quality` TINYINT NOT NULL,
  `size` TINYINT NOT NULL,
  `repeat` TINYINT NOT NULL,
  `comment` VARCHAR(300) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `sale_UNIQUE` (`sale` ASC) VISIBLE,
  CONSTRAINT `survey_sale`
    FOREIGN KEY (`sale`)
    REFERENCES `penfield`.`sales` (`id`));
    
USE `penfield`;
INSERT INTO customers (name, email) VALUES ("pavel", "pkhralovich@gmail.com");