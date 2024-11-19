// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
function App() {
  const data = [
    { img: "/vite.svg", title: "Title 1", descr: "Lorem1" },
    { img: "/vite.svg", title: "Title 2", descr: "Lorem2" },
    { img: "/vite.svg", title: "Title 3", descr: "Lorem3" },
  ];
  return (
    <>
      <Header
          img={data[0].img}
          title={data[0].title}
          description={data[0].descr}
      />
      <Header
          img={data[1].img} 
          title={data[1].title}
          description={data[1].descr}
      />
      <Header
          img={data[2].img} 
          title={data[2].title}
          description={data[2].descr}
      />
    </>
  );
}

export default App;
