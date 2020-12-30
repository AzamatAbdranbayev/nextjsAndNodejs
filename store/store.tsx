import { observable as o, action as a } from "mobx";
const contentType = "application/json"

export interface Task {
  _id: string;
  value: string;
}
export interface Tasklist {
  tasks: Task[];
  error: string | null;
  valueNewTask: string;
  valueChangedTask: string;
}

export const state: Tasklist = o({
  tasks: [],
  error: null,
  valueNewTask: "",
  valueChangedTask: "",
});

export const actions = {
  changeValueHandler: a((key: string, value: string) => {
    state[key] = value;
  }),
  postTask: a(async () => {
    try {
      const response = await fetch("/api/tasks",{
        method:"POST",
        headers:{
          Accept:contentType,
          "Content-Type":contentType
  
        },
        body: JSON.stringify({value:state.valueNewTask})
      })
    }
    catch (e) {
      state.error = e;
    }
  }),
  getTasks: a(async () => {
    console.log("gettask store")
    try {
     const response = await fetch("/api/tasks",{
       method:"GET",
       headers:{
        Accept:contentType,
        "Content-Type":contentType

      },
     })
     console.log("response in store",response)
    } catch (e) {
      state.error = e;
    }
  }),
  deleteTask: a(async (id: string) => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });
    } catch (e) {
      state.error = e;
    }
  }),
  getTask:a(async (id:string)=>{
    try {
      const response = await fetch(`/api/tasks/${id}`,{
        method:"GET",
        headers:{
          Accept:contentType,
          "Content-Type":contentType
  
        },
      })
    }
    catch (e) {
      state.error = e;
    }
  })
};
