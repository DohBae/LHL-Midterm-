DROP TABLE IF EXISTS attempt CASCADE;
CREATE TABLE attempt (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  quiz_id BIGINT REFERENCES quiz(id),
  correct_responses INTEGER,
  total_responses INTEGER
);
