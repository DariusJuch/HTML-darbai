import { useState } from "react";
function Header({setIsOpen}) {

  return (
    <>
    <section className=" header-text flex  justify-between items-center m-10">
      <h2>Task List</h2>
        <button onClick={()=> setIsOpen(true) } className="button flex items-center">
            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2rem"
                    viewBox="0 -960 960 960"
                    width="2rem"
                    fill="#fff"
                >
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
            </span>
            Add task
        </button>
      </section>
    </>
  );
}
export default Header;