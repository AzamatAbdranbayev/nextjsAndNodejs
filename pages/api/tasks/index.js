import dbConnect from "../../../utils/dbConnect";
import Task from "../../../models/TaskModel";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find();
        res.status(200).json({ success: true, data: tasks });
      } catch (e) {
        res.status(400).json({success:false})
      }
      break;
    case "POST":
      try {
        const task = new Task(req.body);
        await task.save();
        res.status(200).json({ success: true, data: task });
      } catch (e) {
        res.status(400).json({success:false})
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
