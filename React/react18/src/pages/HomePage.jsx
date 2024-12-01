import { Link, NavLink } from "react-router";
function  HomePage () {
    
    return (
        <>
            <header className=" flex flex-col justify-center items-center h-[100vh]">
                <h1> Welcome New Member</h1>
                <nav className=" flex flex-row justify-between gap-4">
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/products">
                        Products
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </nav>
            </header>

        </>
    )
}
export default HomePage;