import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();
const app = express();

// middleWare
app.use(cors());
app.use(express.json());


app.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT NOW()"
    );

    res.json(result.rows);
  } catch (err) {
    console.log(err);
  }
});


app.listen(5000,()=>{
    console.log("Server running on port 5000");
});
