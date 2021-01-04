import Link from "next/link";
import { actions } from "../../store/store";

interface P {
  value: string;
  id: string;
  deleteTask: () => void;
  updateTask: () => void;
}
export default function Task({ value, deleteTask, id, updateTask }: P) {
  return (
    <div className="task">
      <textarea
        defaultValue={value}
        rows={4}
        onChange={(event) =>
          actions.changeValueHandler("valueChangedTask", event.target.value)
        }
      />
      <Link href={`/tasks/${id}`}>
        <a>go to task {">>"}</a>
      </Link>
      <button onClick={updateTask}>Update this Task</button>
      <button onClick={deleteTask}>Delete this Task</button>
    </div>
  );
}
