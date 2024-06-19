-- postgres schema for the database
-- drop if exists 
DROP TABLE IF EXISTS users;

-- create table
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

create table posts (
    id SERIAL PRIMARY KEY,
    body TEXT,
    user_id INT REFERENCES users(id)
);

