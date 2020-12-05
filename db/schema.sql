Drop Database If Exists burgers_db;
Create Database burgers_db;
Use Database burgers_db;

Drop Table If Exists burgers;
Create Table burgers (
id Integer Auto_incrememnt,
burger_name varchar (50),
devoured boolean,
Primary Key (id)
);





