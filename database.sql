CREATE DATABASE express_postgres_basic;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);