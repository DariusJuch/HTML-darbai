import { useForm } from "react-hook-form";

function AddTask({isopen, setIsOpen}) {
  const { register } = useForm();



  return (
    <>
      <dialog open={isopen}>
        <form>
          <div>
            <div className="flex justify-evenly p-3 gap-[10rem] ">
              <h6>Add Task</h6>
              <button onClick={()=>setIsOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </div>
            <div className=" flex items-center justify-evenly">
              <label htmlFor="">Task</label>
              <input
                type="text"
                placeholder="type your task here..."
                name="title"
                id="title"
                {...register("title", {
                  required: "Write your task",
                })}
              />
            </div>
            <div>
              <div className=" flex gap-5 justify-center p-3">
                <div className=" flex flex-col items-center">
                  <label htmlFor="priority-high">High</label>
                  <input
                    type="radio"
                    value="High"
                    id="Priority"
                    {...register("Priority", {
                      required: "Need a pick priority",
                    })}
                  />
                </div>
                <div className=" flex flex-col items-center">
                  <label htmlFor="priority-medium">Medium</label>
                  <input
                    type="radio"
                    value="medium"
                    id="Priority"
                    {...register("Priority", {
                      required: "Need a pick priority",
                    })}
                  />
                </div>
                <div className=" flex flex-col items-center">
                  <label htmlFor="priority-low">Low</label>
                  <input
                    type="radio"
                    value="low"
                    id="Priority"
                    {...register("Priority", {
                      required: "Need a pick priority",
                    })}
                  />
                </div>
              </div>
              <div className="flex justify-end p-10">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}
export default AddTask;
