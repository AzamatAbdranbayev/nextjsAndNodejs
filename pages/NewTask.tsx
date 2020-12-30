import { state, actions } from "../store/store";
import { observer } from "mobx-react";
import Router from "next/router";
const NewTask = observer(() => {
  const handlerAddData = () => {
    actions.postTask();
    setTimeout(() => {
      Router.push("/");
    }, 1000);
  };

  return (
    <div className="create__wrapper">
      <h1>Create New Task</h1>
      <div className="create__task">
        <textarea
          className="create__textarea"
          rows={5}
          value={state.valueNewTask}
          onChange={(event) => {
            actions.changeValueHandler("valueNewTask", event.target.value);
          }}
        />
        <button className="create__button" onClick={handlerAddData}>
          Create
        </button>
      </div>
    </div>
  );
});
export default NewTask;
