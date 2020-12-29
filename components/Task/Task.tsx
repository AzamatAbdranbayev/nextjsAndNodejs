import Link from "next/link";

export default function Task({ value, deleteTask, id }) {
  return (
    <div className="task">
      <textarea defaultValue={value} rows={4} readOnly/>
      <Link href={`/tasks/${id}`}>
        <a>go to task {">>"}</a>
      </Link>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}
