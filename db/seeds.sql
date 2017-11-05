DROP TABLE IF EXISTS saved;

CREATE TABLE saved (
id SERIAL PRIMARY KEY,
title VARCHAR,
description TEXT,
date_created TEXT,
date_saved TEXT
);

INSERT INTO saved (title, description, date_created, date_saved ) VALUES
('Saturday To-do', 'Go to grocery store, groom dog, get nails done. Dinner with Kiara at 7pm.', 'October 31st 2017', 'November 4th 2017'),
('Accounts', 'Hulu- yve@hulu.com, Netflix- gina@netflix.com', 'October 7th 2017', 'October 13th 2017');
