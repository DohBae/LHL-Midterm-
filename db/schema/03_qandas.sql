DROP TABLE IF EXISTS question CASCADE;
CREATE TABLE question (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id BIGINT REFERENCES quiz(id),
  content TEXT
);

DROP TABLE IF EXISTS answer CASCADE;
CREATE TABLE answer (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES question(id),
  content TEXT,
  correct BOOLEAN
);
