# Server Side Assessment


## What to do

In order to pass this assessment, you will need to fork and clone down this repository and build a RESTful API from scratch based on the specifications below. 

Demonstrate that you can create an ExpressJS server, use RESTful convention, and connect the server to a properly created database.

**Submit your solution code by sending us your project folder as a zipped file, delete your node_modules folder before you zip!**
Ask for help if you need help doing this.

## Specifications


### Routes
Create CRUD resource for "donuts"

|CRUD type |HTTP METHOD |  PATH           |  RESPONSE DATA                              |
|----------|------------|-----------------|:--------------------------------------------|
| READ ALL |  GET       |  /donuts        |  All the donuts                             |
| READ ONE |  GET       |  /donuts/:id    |  Single donut by ID                         |
| CREATE   |  POST      |  /donuts        |  Success Message (add new donut to db)      |
| UPDATE   |  PATCH     |  /donuts/:id    |  Success Message (update existing donut)    |
| DESTROY  |  DELETE    |  /donuts/:id    |  Success Message (delete existing donut)    |



### Database

 - Create a database called exactly "donuts_db"
 - Create the following "donuts" table

| donuts   |              |
|----------|--------------|
| id       |   Serial PK  |
| name     |   text       |
| topping  |   text       |
| qty      |   integer    |



 - Seed your db with the following list of progressively worse named donuts

| name                  | topping          |  qty  |        
|-----------------------|------------------|-------|
| Grape Escape          | Grape Jam        |  10   |        
| Cocomotive            | Chocolate        |  19   |        
| Health Nut            | Almonds          |  15   |        
| Nuttellingya          | Nutella          |   9   |        
| Lemongracias          | Lemon Custard    |   3   |        
| Maybe its Mapleline   | Maple            |  45   |        
| Clint Yeastwood       | none             |  15   |        
| Colonel Custard       | Custard          |  26   |        
| Pecan Sam             | Pecans           |  12   |        