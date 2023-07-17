import Task from "../Models/Task.js";

export const renderIndex = async (_req, res) => {
  const tasks = await Task.find().lean();
  res.render("Index", { tasks });
};

//This function creates a task
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

//This function loads the formulary to modify the data
//Insinde of the inputs the information that the task contains is loaded
export const editTasks = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

//This function is the manager of modify the data and where the user is redirected to the main page to see the changes
export const editTasksPost = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

//This function delete a task and redirected to the user to the main page
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

//This function modify the element done to its opositive, example: done: true, change to false
export const Toogle_Done = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
