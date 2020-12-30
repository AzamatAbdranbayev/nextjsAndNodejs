import dbConnect from "../../utils/dbConnect";
import TaskModel from "../../models/TaskModel";
export default function Post({ task }) {
  const taskById = JSON.parse(task);

  return (
    <div>
      <ul>
        {Object.keys(taskById).map((key) => (
          <li key={taskById[key]}>
            {key} : {taskById[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const result = await TaskModel.findById(params.id);

  return { props: { task: JSON.stringify(result) } };
}
