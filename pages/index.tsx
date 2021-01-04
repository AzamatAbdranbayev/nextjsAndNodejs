import { state, actions, TaskInterface } from "../store/store";
import { observer } from "mobx-react";
import { NextPage } from "next";
import Task from "../components/Task/Task";
import dbConnect from "../utils/dbConnect";
import TaskModel from "../models/TaskModel";
import Router from "next/router";

interface Props {
  tasks: string;
}

const Tasks: NextPage<Props> = observer(({ tasks }) => {
  const tasksList = JSON.parse(tasks);

  const handlerDelete = (id: string) => {
    actions.deleteTask(id);
    setTimeout(() => {
      Router.push("/");
    }, 1000);
  };
  return (
    <div className="tasks__wrapper">
      {tasksList.map((task: TaskInterface) => (
        <Task
          key={task._id}
          value={task.value}
          id={task._id}
          deleteTask={() => handlerDelete(task._id)}
          updateTask={() => actions.updateTask(task._id)}
        />
      ))}
    </div>
  );
});

export async function getServerSideProps() {
  await dbConnect();

  const result = await TaskModel.find({});

  return { props: { tasks: JSON.stringify(result) } };
}

export default Tasks;
