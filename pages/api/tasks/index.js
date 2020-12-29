import dbConnect from "../../../utils/dbConnect";
import Task from "../../../models/TaskModel";

export default async function handler(req, res) {
  console.log("req in api", req.body);
  const { method } = req;
  console.log(method);
  await dbConnect();

  switch (method) {
    case "GET":
      try {
          console.log("get in db")
        const tasks = await Task.find();
        res.status(200).json({ success: true, data: tasks });
      } catch (e) {
        console.log(e);
      }
      break;
    case "POST":
      try {
        const task = new Task(req.body);
        await task.save();
        res.status(200).json({ success: true, data: task });
      } catch (e) {
        console.log(e);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
