import express from "express";
import router from "./Routes/index.routes.js";
import { create } from "express-handlebars";
import { join } from "path";
import morgan from "morgan";
import path from "path";

const app = express();

app.set("views", join(__dirname, "/Views"));

const hbs = create({
  layoutsDir: join(app.get("views"), "layouts"),
  partialsDir: join(app.get("views"), "Partials"),
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use(express.static(path.join(__dirname, "public")));

export default app;
