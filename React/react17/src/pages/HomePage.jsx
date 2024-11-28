import { Link, NavLink } from "react-router";
function HomePage () {

    
    return(
        <>
            <h1>Welcome to HomePage</h1>
            <nav>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </>
    );
}
export default HomePage;