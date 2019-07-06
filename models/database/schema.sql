DROP DATABASE IF EXISTS barbershop;
CREATE DATABASE barbershop;

DROP TABLE IF EXISTS `barbershop`.`user` ;

CREATE TABLE IF NOT EXISTS `barbershop`.`user` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NOT NULL,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `userTypeID` INT NOT NULL COMMENT 'user table contains all user types ie. barber or client.',
  PRIMARY KEY (`userID`),
  UNIQUE INDEX `userID_UNIQUE` (`userID` ASC) VISIBLE,
  UNIQUE INDEX `userName_UNIQUE` (`userName` ASC) VISIBLE)
ENGINE = InnoDB;