DROP DATABASE IF EXISTS snacks_dev;

CREATE DATABASE snacks_dev;

\c snacks_dev;

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    sugar INT NOT NULL,
    protein INT NOT NULL,
    fiber INT NOT NULL,
    sodium INT NOT NULL,
    calories BIGINT,
    img VARCHAR
);

-- (name, type, sugar, protein, fiber, calories, img)

DROP TABLE IF EXISTS reviews;

-- CREATE TABLE reviews (
--     id SERIAL PRIMARY KEY,
--     reviewer TEXT,
--     content TEXT,
--     rating NUMERIC,
--     CHECK (rating >= 0 AND rating <= 5),
--     snack_id INTEGER REFERENCES snacks (id)
--     ON DELETE CASCADE
-- )