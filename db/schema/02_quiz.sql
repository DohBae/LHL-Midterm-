DROP TABLE IF EXISTS quiz CASCADE;
CREATE TABLE quiz (
  id INTEGER PRIMARY KEY,
  creator_id INTEGER REFERENCES users(id),
  title TEXT,
  listed BOOLEAN,
  description TEXT,
  thumbnail_url TEXT DEFAULT 'https://blog.hubspot.com/hubfs/google-quiz.jpg'
);
