function ContactForm() {
  return (
    <>
      <form>
        <label htmlFor="fname" className="data">
            First name:
        </label>
        <br />
        <input type="text" id="fname" name="fname"/>
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname"/>
        <br />
        <br />
        <input type="submit"/>
      </form>
    </>
  );
}

export default ContactForm;
