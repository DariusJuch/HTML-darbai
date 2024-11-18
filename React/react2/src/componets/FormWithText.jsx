function FormWithText() {
  return (
    <>
        <h1 className="headerText">SUBSCRIBE</h1>
        <br />
        <p className="para">Sing up with your email address to receive news and updates. </p>
        <br />

        <form className="flexForm">
            <div className="form">
                <input type="text" id="fname" name="fname" placeholder="First name" />
                <input type="text" id="lname" name="lname" placeholder="Last name" />
                <input type="email" placeholder="Email"/>
            </div>
            <div className="subButton">
                <input type="button" value="Subscribe" className="buttom" />
            </div>
        </form>
    </>
  );
}

export default FormWithText;
