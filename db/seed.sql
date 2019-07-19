-- set up table
create table houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
);

-- create dummy data
insert into houses
(name, address, city, state, zip, img, mortgage, rent)
values
('The Cream of the Crop', 
'1710 Brother Ave', 
'Las Vegas', 
'NV', 
12345, 
'https://img.bleacherreport.net/img/images/photos/002/318/574/macho-man-randy-savage-1_crop_exact.jpg?w=1200&h=1200&q=75',
100.00,
5.00),
('Oh yeeeeah',
'4445 E. Macho St',
'Coburg',
'BA',
99999,
'https://cdn.sescoops.com/wp-content/uploads/2018/05/macho-man-champion-2017-05-11.jpg-e1526819293723-696x392.png',
2000.00,
250.00),
('Hulk House',
'555 Savage Blvd',
'Hoganville',
'CA',
90210,
'https://wwfoldschool.com/wp-content/uploads/2018/05/Mega-Powers-Hulk-Hogan-Randy-Savage.jpg',
400000.00,
300.00);