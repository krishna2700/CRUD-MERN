import express from "express";
import connection from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "./routes/routes.js";
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/", Routes);

const PORT = 8000;

const username = process.env.DB_USERNAME;

const password = process.env.DB_PASSWORD;

connection(username, password);

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT} `)
);
