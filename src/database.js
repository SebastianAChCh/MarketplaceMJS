import { connect } from "mongoose";
import { MONGODB_URL } from "./Config.js";

(async () => {
  try {
    const db = await connect(MONGODB_URL);
    console.log("db connected", db.connection.name);
  } catch (error) {
    console.log("There was an error in the data base", error);
  }
})();
