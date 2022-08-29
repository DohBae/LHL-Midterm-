DROP TABLE IF EXISTS quiz CASCADE;
CREATE TABLE quiz (
  id SERIAL PRIMARY KEY NOT NULL,
  creator_id INTEGER REFERENCES users(id),
  title TEXT,
  listed BOOLEAN,
  description TEXT,
  thumbnail_url TEXT
);
