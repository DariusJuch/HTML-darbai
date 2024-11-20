
function Notification() {
   
    let backgroundType = "error"
    let className = ""
   if (backgroundType === "success") {
    className = "green-background"
  } else if (backgroundType === "error") {
    className = 'red-background'
  } else if (backgroundType === "warning") {
     className = "yellow-background"
  } else {
     className = "def-background"
  }


  return (
    <>
      <div className={className}>
        <p>labas labas</p>
      </div>
    </>
  );
}

export default Notification;
