import { Link, NavLink } from "react-router";

function HomePage() {
  return (
    <>
      <header className=" flex flex-row nav-bar justify-between">
        <section>
          <h1>Welcome</h1>
        </section>
        <nav className=" flex flex-row justify-end pages gap-5">
          <NavLink to="registration" className="regForm">
            Donor registration
          </NavLink>
          <NavLink to="donorList" className="donList">
            Donor List
          </NavLink>
          <NavLink to="donorInfo" className="donInfo">
            Donor Informacion
          </NavLink>
        </nav>
      </header>
      <section>
        <div className=" flex justify-center ten-reason">
          <h1>10 priežasčių, kodėl kraujo donorystė naudinga pačiam donorui</h1>
        </div>
        <section className=" flex flex-col">
          <h3 className=" ol-text">
            Kiekvienas kraujo donoras gali jaustis didvyriu, nes neabejotinai
            kažkam padėjo išgyventi – gal gimdančiai motinai, gal į avariją
            patekusiam, gal nukraujavusiam operacijos metu ar sunkia liga
            sergančiam žmogui. Bet ar žinojote, kad yra daug priežasčių, dėl
            kurių reguliariai duoti kraują yra naudinga pačiam donorui, jo
            sveikatai?
          </h3>
          <ul className=" p-5">
            <li>1.Sveikatos patikrinimas</li>
            <li>
              2.Kraujo donorystė sumažina širdies ir kraujagyslių ligų riziką
            </li>
            <li>3.Kraujo donorystė sumažina kepenų ligų riziką</li>
            <li>4.Kraujo donorystė gali sumažinti vėžio riziką</li>
            <li>5.Atsinaujina kraujo ląstelės</li>
            <li>6.Kraujo donorystė padeda reguliuoti svorį</li>
            <li>7.Kraujo donorystė mažina cholesterolio kiekį</li>
            <li>8.erėja psichinė ir emocinė būklė</li>
            <li>9.Donorai gali ilgiau gyventi</li>
            <li>10.Kraujo donorystė gelbėja gyvybes</li>
          </ul>
        </section>
      </section>
      <NavLink to="registration">
        <button className="border bg-red-600 p-2 m-3">Register</button>
      </NavLink>
    </>
  );
}
export default HomePage;
