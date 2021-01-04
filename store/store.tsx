import { observable as o, action as a } from "mobx";
const contentType = "application/json";

export interface TaskInterface {
  _id: string;
  value: string;
}
export interface Tasklist {
  tasks: TaskInterface[];
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
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify({ value: state.valueNewTask }),
      });
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
  updateTask: a(async (id: string) => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify({ value: state.valueChangedTask }),
      });
    } catch (e) {}
  }),
};
