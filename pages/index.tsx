import Link from "next/link";
import { state, actions } from "../store/store";
import { observer } from "mobx-react";
import { NextPage } from "next";
import { useEffect } from "react";
import Task from "../components/Task/Task";
import dbConnect from "../utils/dbConnect";
import TaskModel from "../models/TaskModel";
interface Props {}

const Tasks: NextPage<Props> = observer(({tasks}) => {
  const tasksList = JSON.parse(tasks)
  console.log(tasks)
  console.log(JSON.parse(tasks)) 
  // useEffect(() => {
  //   actions.getTasks();
  // }, []);

  return (
    <div className="tasks__wrapper">
      {tasksList.map((task) => (
        <Task
          key={task._id}
          value={task.value}
          id={task._id}
          deleteTask={() => actions.deleteTask(task._id)}
        />
      ))}
    </div>
  );
});

export async function getServerSideProps() {
  // const contentType = "application/json"
  await dbConnect();
  // const response = await fetch("/api/tasks",{
  //   method:"GET",
  //   headers:{
  //    Accept:contentType,
  //    "Content-Type":contentType

  //  },
  // })
  const result = await TaskModel.find({});
  // console.log(typeof JSON.parse(result))
  // const tasksList = result.map((doc)=>{
  //   const task = doc.toObject()
  //   task.id = task.id.toString()
  //   return task
  // })
  console.log("getserversideprops",result)
  console.log(typeof result)
  console.log(result[0])
//  const result = await actions.getTasks()
  return {props:{tasks:JSON.stringify(result)}}
}

export default Tasks;
