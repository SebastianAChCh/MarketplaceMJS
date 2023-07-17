import app from "./App.js";
import "./database.js";
import { PORT } from "./Config.js";

app.listen(PORT, () => {
  console.log("Listen on port 3000");
});
