create schema carcatech;

create table carcatech.user(
    id serial primary key,
    name varchar(30),
    email varchar(30),
    cpf varchar(30),
    password varchar(30)
    date timestamp default now()
)