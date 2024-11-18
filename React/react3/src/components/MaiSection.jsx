import Asabeneh from "../images/download.png"

function MainSection () {
    
    return(
        <>
        <section className="section-bg">
            <div className="main-text">
                <p>Perequisite to get started react.js</p>
            </div>
            <div>
                <ul className="unord-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className="photo">
                <img src={Asabeneh} alt="" className="photo"/>
            </div>
            <div className="photo-text">
                <p>Asabeneh Yetayeh</p>
            </div>
        </section>
        </>
    )
}

export default MainSection;