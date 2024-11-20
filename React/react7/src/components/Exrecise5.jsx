function Task() {
  let obj = {
    tasks: ["Taski 1", "Task 2"],
    
  };
  if (obj.tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <div>
      {obj.tasks.map((value, index) => <p key={index}>{value}</p>)}
    </div>
  )


}
export default Task;
