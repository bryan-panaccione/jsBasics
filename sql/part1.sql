-- 1. /dt show all tables
-- 2. /du show all users
-- 3. /d owners (show all data about specific table)
-- 4. Show names of all owners
--SELECT name FROM owners;
-- 5. Show the ages of all of the owners in ascending order.
SELECT age FROM owners
ORDER BY age;
-- 6. Show the name of any owner whose name is Donald.
SELECT name FROM owners
WHERE name = 'Donald';
-- 7. Show the age of all owners who are older than 30.
SELECT age FROM owners
WHERE age > 30;
-- 8. Show the name of all owners whose name starts with an E.
SELECT name FROM owners
WHERE name = 'E%';
-- 9. Add an owner named John who is 33 years old to the owners table.
INSERT INTO owners (name,age) VALUES ('John',33);
-- 10. Add an owner named Jane who is 43 years old to the owners table.
INSERT INTO owners (name,age) VALUES ('Jane',43);
-- 11. Change Jane's age to 30.
UPDATE owners
SET age = 30
WHERE name = 'Jane'
-- 12. Change Jane's name to Janet.
UPDATE owners
SET name = 'Janet'
WHERE name = 'Jane'
-- 13. Add a property named Archstone that has 20 units, owned by Janet.
INSERT INTO properties (name,num_units, owner_id) VALUES ('Archstone',20,8);
-- 14. Delete the owner named Janet.
-- !!!!!!!!!!!!!! ON DELETE CASCADE not sure proper way to do this 
-- 15. Show all of the properties in alphabetical order that are not named Archstone and do not have an id of 3 or 5.
SELECT * FROM properties
WHERE name NOT ILIKE 'Archstone'
AND property_id NOT IN (3,5)
ORDER BY name;
-- 16. Count the total number of rows in the properties table
SELECT Count(*) FROM properties;
-- 17. Show the highest age
SELECT max(age) FROM owners;
-- 18. Show the names of the first three owners in your owners table.
SELECT * FROM owners LIMIT 3;


--BONUS
-- 1. Create a foreign key that references the owner_id in the owners table and forces the constraint ON DELETE CASCADE.

-- 2. Create a constraint on the properties table called positive_num_units that ensures that you can only add a num_units value that is greater than or equal to zero (research CHECK to do this)

-- 3. Show all of the information from the owners table and the properties table in one joined table.

-- 4. In the properties table change the name of the column "name" to "property_name".

-- 5. Count the total number of properties where the owner_id is between 1 and 3.

-- 6. Add a column to the owners table called fav_color with a type of TEXT

-- 7. Change the name column in the owners table to be a type of VARCHAR(200)

-- 8. Delete the owners table - what happens? why?