import { Router } from "express";
import {
  createTask,
  deleteTask,
  editTasks,
  editTasksPost,
  renderIndex,
  Toogle_Done,
} from "../Controllers/Task.controller.js";

const router = Router();

//Main page
router.get("/", renderIndex);

//This route is where the data of the formulary are send and where the task is saved in mongodb
router.post("/createTask/add", createTask);

//Update
router.get("/toogle_done/:id", Toogle_Done);

//Delete
router.get("/deleteTask/:id", deleteTask);

//Update, here is where the form to modify the data of a task is charged
router.get("/editTask/:id", editTasks);

//Update, here is where the data of the task are modifyed once we send the data by the form
router.post("/editTask/:id", editTasksPost);

export default router;
