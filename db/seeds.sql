DROP TABLE IF EXISTS saved;

CREATE TABLE saved(
id SERIAL PRIMARY KEY,
title VARCHAR,
description TEXT
);

INSERT INTO saved (title, description) VALUES 
('Saturday To-do', 'Go to grocery store, groom dog, get nails done. Dinner with Kiara at 7pm.'),
('Accounts', 'Hulu- yve@hulu.com, Netflix- gina@netflix.com');