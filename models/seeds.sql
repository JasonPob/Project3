USE `barbershop` ;
 
<<<<<<< HEAD
INSERT INTO barber (userName, firstName, lastName) 
VALUES ('garyWestbury', 'Gary', 'Westbury');
INSERT INTO users (userName, firstName, lastName) 
VALUES ('dannyWestbury', 'Danny', 'Westbury');
 SELECT * FROM barber;
 
INSERT INTO client (userName, firstName, lastName) 
VALUES ('johnPob', 'John', 'Poblador');
INSERT INTO users (userName, firstName, lastName, userTypeID) 
VALUES ('jonasPob', 'Jonas', 'Poblador');
SELECT * FROM users;
=======

INSERT INTO barber (userName, firstName, lastName, bPassword) 
VALUES ('garyWestbury', 'Gary', 'Westbury','password');
INSERT INTO barber (userName, firstName, lastName, bPassword ) 
VALUES ('dannyWestbury', 'Danny', 'Westbury', 'password');
 SELECT * FROM barber;
 
INSERT INTO clients (userName, firstName, lastName, cPassword) 
VALUES ('johnPob', 'John', 'Poblador', 'password');
INSERT INTO clients (userName, firstName, lastName, cPassword) 
VALUES ('jonasPob', 'Jonas', 'Poblador','password');
SELECT * FROM clients;

>>>>>>> 61b425928422329f70f92278babed26736dbf706

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














