CREATE SCHEMA IF NOT EXISTS `barbershop` DEFAULT CHARACTER SET utf8 ;
USE `barbershop` ;
-- -----------------------------------------------------
-- Table `barbershop`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `barbershop`.`users` ;
CREATE TABLE IF NOT EXISTS `barbershop`.`users` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NOT NULL,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `userTypeID` INT NOT NULL COMMENT 'user table contains all user types ie. barber or client.',
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE INDEX `userID_UNIQUE` (`userID` ASC) VISIBLE,
  UNIQUE INDEX `userName_UNIQUE` (`userName` ASC) VISIBLE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Placeholder table for view `barbershop`.`barber`
-- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `barbershop`.`barber` (`barberID` INT, `userName` VARCHAR(255) NOT NULL, `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255) NOT NULL, `userType` INT);
-- -----------------------------------------------------
-- Table `barbershop`.`userType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `barbershop`.`userType` ;
CREATE TABLE IF NOT EXISTS `barbershop`.`userType` (
  `userTypeID` INT NOT NULL AUTO_INCREMENT,
  `userType` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`userTypeID`),
  UNIQUE INDEX `userType_UNIQUE` (`userType` ASC) VISIBLE,
  UNIQUE INDEX `userTypeID_UNIQUE` (`userTypeID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `barbershop`.`appointment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `barbershop`.`appointment` ;
CREATE TABLE IF NOT EXISTS `barbershop`.`appointment` (
  `appointmentID` INT NOT NULL AUTO_INCREMENT,
  `barberID` INT NOT NULL,
  `clientID` INT NOT NULL,
  `dateOfAppointment` DATETIME NOT NULL,
  -- time the appt was created
  `apptCreated` DATETIME NOT NULL,
  `apptPrice` FLOAT NULL,
  `apptTip` FLOAT NULL,
  `apptTotal` FLOAT NULL,
  `apptState` VARCHAR(255),
  PRIMARY KEY (`appointmentID`),
  UNIQUE INDEX `appointmentID_UNIQUE` (`appointmentID` ASC) VISIBLE)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `barbershop`.`apptServices`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `barbershop`.`apptServices` ;
CREATE TABLE IF NOT EXISTS `barbershop`.`apptServices` (
  `apptServicesID` INT NOT NULL AUTO_INCREMENT,
  `barberServiceID` INT NOT NULL,
  `appointmentID` INT NOT NULL,
  -- `price` FLOAT NOT NULL,
  PRIMARY KEY (`apptServicesID`),
  UNIQUE INDEX `apptServicesID_UNIQUE` (`apptServicesID` ASC) VISIBLE)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `barbershop`.`barberServices`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `barbershop`.`barberServices` ;
CREATE TABLE IF NOT EXISTS `barbershop`.`barberServices` (
  `barberServicesID` INT NOT NULL AUTO_INCREMENT,
  `serviceID` INT NOT NULL,
  `barberID` INT NOT NULL,
  `price` FLOAT NOT NULL,
  PRIMARY KEY (`barberServicesID`),
  UNIQUE INDEX `barberServicesID_UNIQUE` (`barberServicesID` ASC) VISIBLE)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `barbershop`.`services`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `barbershop`.`services` ;
CREATE TABLE IF NOT EXISTS `barbershop`.`services` (
  `serviceID` INT NOT NULL AUTO_INCREMENT,
  `serviceName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`serviceID`),
  UNIQUE INDEX `serviceID_UNIQUE` (`serviceID` ASC) VISIBLE)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `barbershop`.`serviceZIP`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `barbershop`.`serviceZIP` ;
CREATE TABLE IF NOT EXISTS `barbershop`.`serviceZIP` (
-- barber ID
  `userID` INT NOT NULL,
  `ZIP` VARCHAR(255) NOT NULL)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `barbershop`.`availability`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `barbershop`.`availability` ;
CREATE TABLE IF NOT EXISTS `barbershop`.`availability` (
  `barberID` INT NOT NULL,
  `startHour` INT NOT NULL,
  `endHour` INT NOT NULL,
  `dayOfWeek` VARCHAR(255) NOT NULL)
  -- INDEX  `barberId` (`` ASC) VISIBLE)
ENGINE = InnoDB;
-- USE `barbershop` ;
-- -----------------------------------------------------
-- Placeholder table for view `barbershop`.`barber`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barbershop`.`barber` (`barberID` INT NOT NULL, `userName` VARCHAR(255) NOT NULL, `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255) NOT NULL, `userType` INT NOT NULL, `ZIP` VARCHAR(255) NOT NULL);

-- -----------------------------------------------------
-- Placeholder table for view `barbershop`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barbershop`.`client` (`clientID` INT NOT NULL, `userName` VARCHAR(255) NOT NULL, `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255) NOT NULL, `userType` INT NOT NULL);
-- -----------------------------------------------------
-- View `barbershop`.`barber`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `barbershop`.`barber`;
DROP VIEW IF EXISTS `barbershop`.`barber` ;
USE `barbershop`;
CREATE  OR REPLACE VIEW `barber` AS
SELECT u.userID AS barberID, u.userName, u.firstName, u.lastName, ut.userType
FROM users u, userType ut 
WHERE u.userTypeID = ut.userTypeID
AND ut.userType = 'barber';
-- -----------------------------------------------------
-- View `barbershop`.`client`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `barbershop`.`client`;
DROP VIEW IF EXISTS `barbershop`.`client` ;
USE `barbershop`;
CREATE  OR REPLACE VIEW `client` AS
SELECT u.userID AS clientID, u.userName, u.firstName, u.lastName, ut.userType
FROM users u, userType ut 
WHERE u.userTypeID = ut.userTypeID
AND ut.userType = 'client';



-- Select statements --
-- INSERT INTO barber (barberID, userName, firstName, lastName, userType, ZIP) VALUES (0, 'danB', 'Dan', 'Baur', 0, '11577');
-- INSERT INTO barber (barberID, userName, firstName, lastName, userType, ZIP) VALUES (1, 'briannaK', 'Brianna', 'Kelsey', 0, '11578');
-- INSERT INTO barber (barberID, userName, firstName, lastName, userType, ZIP) VALUES (2, 'alexE', 'Alex', 'Evers', 0, '11579');
-- INSERT INTO barber (barberID, userName, firstName, lastName, userType, ZIP) VALUES (3, 'joeR', 'Joe', 'Ricafort', 0, '11577');
-- INSERT into availability (barberID, startHour, endHour, dayOfWeek) VALUES (3, 13, 14, 'Tuesday');
-- INSERT INTO apptServices (barberID, serviceID, price) VALUES (1, 1, 10.50);
-- INSERT INTO services (service) VALUES ('mens haircut');

INSERT INTO userType (userType) VALUES ('Barber');
INSERT INTO userType (userType) VALUES ('Client');
 
 
INSERT INTO users (userName, firstName, lastName, userTypeID) 
VALUES ('garyWestbury', 'Gary', 'Westbury', 1);
INSERT INTO users (userName, firstName, lastName, userTypeID) 
VALUES ('dannyWestbury', 'Danny', 'Westbury', 1);
 SELECT * FROM userType;
 SELECT * FROM barber;
 
INSERT INTO users (userName, firstName, lastName, userTypeID) 
VALUES ('johnPob', 'John', 'Poblador', 2);
INSERT INTO users (userName, firstName, lastName, userTypeID) 
VALUES ('jonasPob', 'Jonas', 'Poblador', 2);
SELECT * FROM users;

SELECT * FROM barber;
SELECT * FROM `barbershop`.`client`;

INSERT INTO services (ServiceName) VALUES ('Hair Cut');
INSERT INTO services (ServiceName) VALUES ('Beard Trim');
INSERT INTO services (ServiceName) VALUES ('Cut & Trim');
INSERT INTO services (ServiceName) VALUES ('Cut & Shampoo');
INSERT INTO services (ServiceName) VALUES ('Manicure');
SELECT * FROM services;
 
 
INSERT INTO barberServices (ServiceID, barberID, price) VALUES (1,1, 15.00);
INSERT INTO barberServices (ServiceID, barberID, price) VALUES (1,2, 10.00);
INSERT INTO barberServices (ServiceID, barberID, price) VALUES (1,3, 20.00);
INSERT INTO barberServices (ServiceID, barberID, price) VALUES (1,4, 17.00);
INSERT INTO barberServices (ServiceID, barberID, price) VALUES (1,1, 10.00);
INSERT INTO barberServices (ServiceID, barberID, price) VALUES (2,1, 20.00);
INSERT INTO barberServices (ServiceID, barberID, price) VALUES (2,2, 15.00);
INSERT INTO barberServices (ServiceID, barberID, price) VALUES (2,3, 25.00);
INSERT INTO barberServices (ServiceID, barberID, price) VALUES (2,4, 22.00);
INSERT INTO barberServices (ServiceID, barberID, price) VALUES (2,1, 15.00);
SELECT * FROM barberServices;
 
INSERT INTO serviceZIP (userID, ZIP) VALUES (1, '11577');
INSERT INTO serviceZIP (userID, ZIP) VALUES (1, '11578');
INSERT INTO serviceZIP (userID, ZIP) VALUES (1, '11579');
INSERT INTO serviceZIP (userID, ZIP) VALUES (2, '11577');
INSERT INTO serviceZIP (userID, ZIP) VALUES (2, '11579');
INSERT INTO serviceZIP (userID, ZIP) VALUES (2, '11580');
INSERT INTO serviceZIP (userID, ZIP) VALUES (2, '11581');
SELECT * FROM serviceZIP;
 
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (1, 9, 6, 1);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (1, 9, 6, 2);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (1, 9, 6, 3);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (1, 9, 6, 4);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (1, 9, 6, 5);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (1, 9, 6, 6);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (2, 9, 6, 2);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (2, 9, 6, 3);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (2, 9, 6, 4);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (2, 9, 6, 5);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (2, 9, 6, 6);
INSERT INTO availability (barberID, startHour, endHour, dayOfWeek) VALUES (2, 9, 6, 7);
SELECT * FROM availability; 
 
 
INSERT INTO appointment 
(barberID, clientID, dateOfAppointment, apptCreated, apptPrice, apptTip, apptTotal, apptState)
VALUES
(1, 3, '2019-03-12 14:00', '2019-03-12 13:00',27,5,32,'Completed');
 
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (2, 1);
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (4, 1);
 
INSERT INTO appointment 
(barberID, clientID, dateOfAppointment, apptCreated, apptPrice, apptTip, apptTotal, apptState)
VALUES
(1, 3, '2019-05-07 14:00', '2019-03-15 9:00',27,5,32,'Completed');
 
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (2, 2);
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (4, 2);
 
 
INSERT INTO appointment 
(barberID, clientID, dateOfAppointment, apptCreated, apptPrice, apptTip, apptTotal, apptState)
VALUES
(1, 3, '2019-07-04 14:00', '2019-06-24 10:00',27,3,30,'Cancelled');
 
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (2, 3);
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (4, 3);
 
 
INSERT INTO appointment 
(barberID, clientID, dateOfAppointment, apptCreated, apptPrice, apptTip, apptTotal, apptState)
VALUES
(1, 3, '2019-08-15 14:00', '2019-07-05 13:00',25,5,30,'Request');
 
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (2, 4);
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (4, 4);
 
INSERT INTO appointment 
(barberID, clientID, dateOfAppointment, apptCreated, apptPrice, apptTip, apptTotal, apptState)
VALUES
(1, 3, '2019-08-30 14:00', '2019-07-05 13:05',12,5,17,'Request');
 
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (2, 5);
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (4, 5);
 
 
INSERT INTO appointment 
(barberID, clientID, dateOfAppointment, apptCreated, apptPrice, apptTip, apptTotal, apptState)
VALUES
(2, 4, '2019-06-15 14:00', '2019-06-05 13:00',27,5,32,'Completed');
 
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (2, 6);
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (4, 6);
 
INSERT INTO appointment 
(barberID, clientID, dateOfAppointment, apptCreated, apptPrice, apptTip, apptTotal, apptState)
VALUES
(2, 4, '2019-08-30 14:00', '2019-07-05 13:05',15,3,18,'Request');
 
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (3, 7);
INSERT INTO apptServices (barberServiceID, appointmentID) VALUES (5, 7);

SELECT * FROM appointment;

-- Barber Services --
SELECT   b.userName, b.firstName, b.lastName, s.ServiceName, bs.price, sz.ZIP
FROM    barber b, barberServices bs, services s, serviceZIP sz
WHERE   b.barberID = bs.barberID AND bs.ServiceID = s.serviceID AND b.barberID = sz.userID
ORDER BY b.userName;

-- Barber ZIP --
SELECT b.userName, b.firstName, b.lastName, sz.ZIP
FROM  barber b, serviceZIP sz
WHERE  b.barberID = sz.userID
ORDER BY b.userName;

-- Barber Availabilty --
SELECT b.userName, b.firstName, b.lastName,  
                CASE dayOfWeek
                   when  1 then 'Sunday'
                   when  2 then 'Monday'
                   when  3 then 'Tuesday'
                   when  4 then 'Wednesday'
                   when  5 then 'Thursday'
                   when  6 then 'Friday'
                   when  7 then 'Saturday'
                END as DayOfWeek, a.startHour, a.endHour
FROM barber b, availability a
WHERE b.barberID = a.barberID
ORDER BY b.userName;

-- stored procedure -- 
USE `barbershop`;

DROP PROCEDURE `barbershop`.`insertappt`;
delimiter //
CREATE PROCEDURE `barbershop`.`insertappt` (
IN barber_ID INT,
IN dayOf_Week VARCHAR (255),
IN hour_Available VARCHAR(255),
OUT alreadySet VARCHAR(255)) 
    BEGIN
		IF NOT EXISTS (SELECT * FROM barbershop.availability where barberID = barber_ID AND dayOfWeek = dayOf_Week AND hourAvailable = hour_Available) 
			THEN insert into barbershop.availability (barberID, dayOfWeek, hourAvailable, taken) VALUES (barber_ID, dayOf_Week, hour_Available, 0);
            SET alreadySet = 'FALSE';
		ELSE 
			set alreadySet = 'TRUE';
		END IF;
    END//
delimiter;

SET @output = '';
CALL barbershop.insertappt(2,'Monday', '3 pm',@output);
SELECT @output;
SELECT * FROM availability;
SELECT * FROM barber;


INSERT INTO barber (barberID, userName, firstName, lastName, userType, ZIP) VALUES (0, 'danB', 'Dan', 'Baur', 0, '11577');
INSERT INTO barber (barberID, userName, firstName, lastName, userType, ZIP) VALUES (1, 'briannaK', 'Brianna', 'Kelsey', 0, '11578');
INSERT INTO barber (barberID, userName, firstName, lastName, userType, ZIP) VALUES (2, 'alexE', 'Alex', 'Evers', 0, '11579');
INSERT INTO barber (barberID, userName, firstName, lastName, userType, ZIP) VALUES (3, 'joeR', 'Joe', 'Ricafort', 0, '11577');


DROP PROCEDURE `barbershop`.`findApptInZip`;

-- CREATE TABLE IF NOT EXISTS `barbershop`.`barber` (`barberID` INT NOT NULL, `userName` VARCHAR(255) NOT NULL, `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255) NOT NULL, `userType` INT NOT NULL, ZIP VARCHAR(255) NOT NULL);

delimiter //
CREATE PROCEDURE `barbershop`.`findApptInZip` (
IN zipcode_in VARCHAR (255),
IN dayOfWeek_in VARCHAR (255),
IN hourAvailable_in VARCHAR(255),
OUT foundAppt_out VARCHAR(255)) 
    BEGIN
		IF EXISTS (SELECT * FROM apptServices,barber,availability WHERE barber.ZIP = zipcode_in
		AND barber.barberID=availability.barberID AND availability.hourAvailable=hourAvailable_in AND availability.dayOfWeek=dayOfWeek_in) THEN
			SELECT services.service, barber.userName, apptServices.price FROM apptServices,barber,availability,services WHERE barber.ZIP = zipcode_in
			AND barber.barberID=availability.barberID AND availability.hourAvailable=hourAvailable_in AND availability.dayOfWeek=dayOfWeek_in
            AND apptServices.serviceID = services.serviceID;
			SET foundAppt_out = 'true';
		ELSE
			SET foundAppt_out = 'false';
		END IF;
    END//
delimiter;


SET @date_str = '07,07,2019 01:01:01';
SET @datetime_var = NOW();
-- find day of week

DROP PROCEDURE `barbershop`.`stringToDatetime`;
delimiter //
CREATE PROCEDURE `barbershop`.`stringToDatetime`(
IN date_str_in VARCHAR (255),
OUT datetime_var_out DATETIME)
    BEGIN
		 SET datetime_var_out = STR_TO_DATE(date_str_in,'%d,%m,%Y %h:%i:%s');
    END//
delimiter ;
SELECT @date_str;
SELECT @datetime_var;
CALL barbershop.stringToDatetime(@date_str, @datetime_var);


SET @dayOfWeek = '';
DROP FUNCTION `barbershop`.`getDayOfWeek`;
delimiter //
CREATE FUNCTION `barbershop`.`getDayOfWeek` (datetime_var_in DATETIME) RETURNS Varchar(255) DETERMINISTIC
BEGIN
		-- 1 = Sun, 2 = Mon, 3 = Tues, 4 = Wed, 5 = Thurs, 6 = Fri, 7 = Sat
         RETURN DAYNAME(datetime_var_in);
END//
delimiter ;

SET @dayOfWeek = getDayOfWeek(NOW());
SELECT @datetime_var;
SELECT @dayOfWeek;

SET @foundAppt = '';

CALL barbershop.findApptInZip('11577', 'Monday', '2 pm', @foundAppt);
SELECT @foundAppt;

SELECT * FROM barber;
SELECT * FROM apptServices;
SELECT * FROM availability;
SELECT * FROM barber, apptServices, availability;
SELECT * from barber WHERE barber.ZIP = '11577';


-- findBarber(string zip_in, string dayOfWeek_in, int datetime_var_in){
-- dayName = getDayOfWeek(datetime_var_in);
--    return foundAppt_out;
-- }

DROP PROCEDURE `barbershop`.`findBarber`;
delimiter //
CREATE PROCEDURE `barbershop`.`findBarber` (
IN datetime_in VARCHAR(255),
IN ZIP_in VARCHAR(255),
IN service_in VARCHAR(255),
-- OUT barberNames VARCHAR(255),
-- OUT serviceName_out VARCHAR(255),
-- OUT price FLOAT)
OUT foundAvailableBarbers VARCHAR(255))
	BEGIN
		SET @datetime_var = NOW(); 
		CALL barbershop.stringToDatetime(@datetime_in, @datetime_var);
		SET @dayOfWeek = getDayOfWeek(@daytime_var);
		IF EXISTS (

		SELECT users.userName, barberServices.price, services.serviceName FROM serviceZIP, appointment, availability, barberServices, services, users WHERE
		-- servicesZip
		serviceZip.userID = users.userID AND serviceZip.ZIP = ZIP_in AND
		-- appointment
		appointment.barberID = users.userID AND appointment.dateOfAppointment = @datetime_var AND
		-- availability
		availability.barberID = users.userID AND availability.startHour <= @datetime_var AND availability.endHour > @datetime_var AND
		-- barberServices and services
		barberServices.barberID = users.userID AND barberServices.serviceID = services.serviceID AND services.serviceName = service_in

		) THEN
					SELECT users.userName, barberServices.price, services.serviceName FROM serviceZIP, appointment, availability, barberServices, services, users WHERE
		-- servicesZip
		serviceZip.userID = users.userID AND serviceZip.ZIP = ZIP_in AND
		-- appointment
		appointment.barberID = users.userID AND appointment.dateOfAppointment = @datetime_var AND
		-- availability
		availability.barberID = users.userID AND availability.startHour <= @datetime_var AND availability.endHour > @datetime_var AND
		-- barberServices and services
		barberServices.barberID = users.userID AND barberServices.serviceID = services.serviceID AND services.serviceName = service_in;
           -- figure out what to put here
			SET foundAvailableBarbers = 'TRUE';
		ELSE
			SET foundAvailableBarbers = 'FALSE';
		END IF;
    END//
delimiter ;
SET @dt = '07,07,2019 01:01:01';
SET @zip = '11111';
SET @service = 'buzz';
SET @output = '';

CALL barbershop.findBarber(@dt, @zip, @service, @output);

SELECT * FROM users;

delimiter //
CREATE PROCEDURE `barbershop`.`findApptInZip` (
IN zipcode_in VARCHAR (255),
IN dayOfWeek_in VARCHAR (255),
IN hourAvailable_in VARCHAR(255),
OUT foundAppt_out VARCHAR(255)) 
    BEGIN
		IF EXISTS (SELECT * FROM apptServices,barber,availability WHERE barber.ZIP = zipcode_in
		AND barber.barberID=availability.barberID AND availability.hourAvailable=hourAvailable_in AND availability.dayOfWeek=dayOfWeek_in) THEN
			SELECT services.service, barber.userName, apptServices.price FROM apptServices,barber,availability,services WHERE barber.ZIP = zipcode_in
			AND barber.barberID=availability.barberID AND availability.hourAvailable=hourAvailable_in AND availability.dayOfWeek=dayOfWeek_in
            AND apptServices.serviceID = services.serviceID;
			SET foundAppt_out = 'true';
		ELSE
			SET foundAppt_out = 'false';
		END IF;
    END//
delimiter ;



IF EXISTS (SELECT * FROM apptServices,barber,availability WHERE barber.ZIP = zipcode_in
		AND barber.barberID=availability.barberID AND availability.hourAvailable=hourAvailable_in AND availability.dayOfWeek=dayOfWeek_in) THEN
			SELECT services.service, barber.userName, apptServices.price FROM apptServices,barber,availability,services WHERE barber.ZIP = zipcode_in
			AND barber.barberID=availability.barberID AND availability.hourAvailable=hourAvailable_in AND availability.dayOfWeek=dayOfWeek_in
            AND apptServices.serviceID = services.serviceID;
			SET foundAppt_out = 'true';
		ELSE
















