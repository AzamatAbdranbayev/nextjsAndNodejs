import mongoose from "mongoose";


const TaskSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

// const TaskModel = mongoose.model("Task",TaskSchema)

export default mongoose.models.Task || mongoose.model("Task",TaskSchema)
