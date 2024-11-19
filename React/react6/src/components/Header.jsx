import logo from "/vite.svg"

function Header ({img, title, description}) {
    
    return(
        <div>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Header;