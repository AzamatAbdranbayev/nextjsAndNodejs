import dbConnect from "../../../utils/dbConnect";
import Task from "../../../models/TaskModel";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "DELETE":
      try {
        const tasksDeleted = await Task.deleteOne({ _id: id });
        if (!tasksDeleted) return res.status(400).json({ success: false });
        res.status(200).json({ success: true, data: {} });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
