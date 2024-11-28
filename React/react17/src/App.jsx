import { Routes, Route} from "react-router";
import HomePage from "./pages/HomePage";
import BlogList from "./components/BlogList";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Child from "./components/Child";
import Blog from "./components/Blog";
import "./App.css";

function App() {
  return (
  
      // <div>
      //   <Routes>
      //     <Route path="/" element={<HomePage/>} />
      //     <Route path="/blog" element={<BlogList/>} >
      //       <Route index element={<Child/>} />
      //     </Route>
      //     <Route path="/about" element={<About/>} />
      //     <Route path="*" element={<NotFound/>} />
      //   </Routes>
      // </div>

      <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blog" element={<BlogList/>}>
          <Route path=":postID" element={<Blog/>}/>
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
 
  );
}

export default App;
