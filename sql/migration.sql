DROP TABLE IF EXISTS owners CASCADE;
DROP TABLE IF EXISTS properties;





CREATE TABLE owners (
  owner_id serial PRIMARY KEY,
  name varchar(50),
  age integer
);


CREATE TABLE properties (
  property_id serial PRIMARY KEY,
  owner_id integer REFERENCES owners(owner_id) ON DELETE CASCADE NOT NULL,
  name varchar(40),
  num_units integer
);
