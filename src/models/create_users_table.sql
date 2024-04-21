create table users (
    id serial primary key,
    first_name varchar (255) not null,
    last_name varchar (255) not null,
    email varchar (255) unique not null,
    password varchar (255) not null,
    birthday varchar (255),
    created_at timestamp,
    updated_at timestamp
);