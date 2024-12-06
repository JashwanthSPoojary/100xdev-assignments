import { Client } from "pg";
import express from "express";
const app = express();
const pgCLient = new Client(
  "postgresql://neondb_owner:YNg8DABvZ6dC@ep-small-sky-a5ko4nqk.us-east-2.aws.neon.tech/neondb?sslmode=require"
);

app.use(express.json());

app.get("/", async (req, res) => {
  const id = req.query.id;
  try {
    const insertQuery =
      "select u.username,u.password,a.address from users u join address a on u.id=a.userId where u.id=$1 ";
    const response = await pgCLient.query(insertQuery, [id]);

    res.json({
      message: "success",
      res: response.rows,
    });
  } catch (error) {
    res.json({
      message: "error",
      err: error,
    });
  }
});

async function main() {
  await pgCLient.connect();
}
main();

app.listen(3000);
