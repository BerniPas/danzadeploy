
-- Comentarios para las consultas en SQL --

-- creamos una database --
create database escuelaDanza;

-- seleccionar la database con la que vamos a trabajar --
use escuelaDanza; 

create table Persona(
idPersona int unsigned zerofill  auto_increment not null,  
nombre varchar(120),
apellido varchar(100),
telefono int,
email varchar(80),
comentario varchar(300),
primary key(idPersona)
);

-- Eliminamos una database --
drop database escueladanza;

-- Create --

-- insertar datos en la tabla --
insert into persona values(null, "Pepe", "Pérez", 123456789, "pepe@gmail.com", "hola gente");

-- Read -- 
select * from persona;

-- Update --
-- Así NO --
update persona set telefono = 2222222 where nombre = "Pepe";

-- Así NO --
update persona set telefono = 2222222;

-- Ok --
update persona set telefono = 3333333 where idPersona = 16;


-- Delete --
-- Así NO --
delete from persona;

-- OK --
delete from persona where idPersona = 16;

-- Limpiamos la tabla persona --
truncate table persona;

















