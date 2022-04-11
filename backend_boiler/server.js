import express from "express";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

//for some reason have to do this when local, then the connectionString for deployed
const pool = new Pool({
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const app = express();
app.use(express.json());
app.use(express.urlencoded());

//routes
//read all
app.get("/donuts", (req, res) => {
  pool
    .query("SELECT * FROM donuts")
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => res.sendStatus(500));
});

//read one
app.get("/donuts/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM donuts WHERE id = $1", [id])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((err) => res.sendStatus(500));
});

//create
app.post("/donuts", (req, res) => {
  const { name, topping, qty } = req.body;
  const postQuery = `
      INSERT INTO donuts(name, topping, qty) 
      VALUES ($1, $2, $3) RETURNING *;`;
  pool
    .query(postQuery, [name, topping, qty])
    .then((result) => {
      res.send(`Success, ${name} added to the database`);
    })
    .catch((err) => res.sendStatus(500));
});

//update
app.patch("/donuts/:id", (req, res) => {
  const { id } = req.params;
  const { name, topping, qty } = req.body;
  const patchQuery = `
    UPDATE donuts SET
    name = COALESCE($2, name),
    topping = COALESCE($3, topping),
    qty = COALESCE($4, qty)
  WHERE id = $1
  RETURNING *`;
  console.log(id, name, topping, qty);
  pool
    .query(patchQuery, [id, name, topping, qty])
    .then((result) => {
      console.log(result);
      res.send(`${name} has been updated`);
    })
    .catch((err) => res.sendStatus(600));
});

//destroy
app.delete("/donuts/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("DELETE FROM donuts WHERE id = $1", [id])
    .then((result) => {
      res.send(`Donut with id ${id} successfully deleted`);
    })
    .catch((err) => res.sendStatus(500));
});
//404 if not found

app.use((req, res, next) => {
  console.log("works");
  res.sendStatus(404);
});

//listen on port
app.listen(process.env.PORT, () =>
  console.log(`Listening on port: ${process.env.PORT}`)
);
