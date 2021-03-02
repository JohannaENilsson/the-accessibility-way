import Header from "../components/Header";
import ModalContact from "../components/ModalContact";
import Footer from "../components/Footer";
import { validateForm } from "../action/validate";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
// import DubbelForm from "../Rapport/DubbelForm";

const Contact = () => {
  const [formInput, setFormInput] = useState({
    firstName: "",
    surname: "",
    microgreen: "Pick",
    email: "",
    information: "",
    save: false,
    phone: "",
  });
  const [errorForm, setErrorForm] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const firstNameRef = useRef();
  const emailRef = useRef();
  const saveRef = useRef();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormInput({ ...formInput, [name]: value });
  };
  const deactivateModal = () => {
    setShowModal(false);
  };
  const submitModal = () => {
    setShowModal(false);
    handleReset();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const handleReset = () => {
    setErrorForm({});
    setFormInput({
      firstName: "",
      surname: "",
      microgreen: "Pick",
      email: "",
      information: "",
      save: false,
      phone: "",
    });
  };
  // console.log(Object.keys(errorForm)[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm({});
    let isValid = validateForm(formInput, setErrorForm);
    // // console.log(isValid);
    if (isValid === true) {
      setShowModal(true);
    } else {
      handleFocus(Object.keys(isValid)[0]);
    }
  };

  const handleFocus = (str) => {
    // console.log(str);
    if (str === "firstName") {
      // console.log("1");
      return firstNameRef.current.focus();
    } else if (str === "email") {
      // console.log("2");
      emailRef.current.focus();
    } else if (str === "save") {
      // console.log("3");
      saveRef.current.focus();
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - The accessibility way</title>
      </Helmet>
      <a href="#maincontent" id="skipLink">
        Skip to main content
      </a>
      <Header headerText={"Contact with A11Y"} />
      {showModal && (
        <ModalContact
          deactivateModal={deactivateModal}
          formInput={formInput}
          submitModal={submitModal}
        />
      )}
      <div className="lineDecoration" role="presentation"></div>
      <main className="centerColumn" id="maincontent">
        {success && (
          <div role="presentation" id="success">
            <span className="material-icons">done</span>
          </div>
        )}

        {/* <DubbelForm /> */}

        <h2>Sign up and become a member</h2>

        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="centerColumn"
        >
          <p>Required fields are marked width blue and a *</p>
          <label htmlFor="firstName">First name: *</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formInput.firstName}
            onChange={(e) => handleChange(e)}
            aria-describedby="firstNameNote firstNameError"
            aria-invalid={!errorForm.firstName ? false : true}
            ref={firstNameRef}
          />

          <span id="firstNameNote">
            Your first name must be at least 2 characters
          </span>

          <span
            className="error"
            id="firstNameError"
            aria-atomic="true"
            aria-live="polite"
          >
            {errorForm.firstName}
          </span>

          <label htmlFor="surname">Surname: </label>
          <input
            type="text"
            name="surname"
            id="surname"
            value={formInput.surname}
            onChange={(e) => handleChange(e)}
            aria-describedby="surnameNote surnameError"
            // aria-invalid={!errorForm.surname ? false : true}
          />

          {/* <span id="surnameNote">
            Your surname must be at least 2 characters
          </span>

          <span className="error" id="surnameError">
            {errorForm.surname}
          </span> */}

          <label htmlFor="email">Email: *</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formInput.email}
            onChange={(e) => handleChange(e)}
            aria-describedby="emailNote emailError"
            aria-invalid={!errorForm.email ? false : true}
            ref={emailRef}
          />

          <span
            className="error"
            id="emailError"
            aria-atomic="true"
            aria-live="polite"
          >
            {errorForm.email}
          </span>

          {/* <label htmlFor="phone">Phone: </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            value={formInput.phone}
            onChange={(e) => handleChange(e)}
            aria-describedby="phoneNote phoneError"
          />
          {errorForm.phone && (
            <span className="error" id="phoneError">
              {errorForm.phone}
            </span>
          )} */}

          {/* <label htmlFor="microgreen">Pick your favorite microgreen:</label>
          <select
            onChange={(e) => handleChange(e)}
            name="microgreen"
            id="microgreen"
            value={formInput.microgreen}
          >
            <option value="Pick" disabled>
              Pick a microgreen
            </option>
            <option value="beetroot">Beetroot</option>
            <option value="garlic">Garlic</option>
            <option value="broccoli">Broccoli</option>
            <option value="alfalfa">Alfalfa</option>
          </select> */}

          <fieldset>
            <legend>
              Do you want to receive information by Phone or email?
            </legend>
            <label htmlFor="emailInformation">By email: </label>
            <input
              type="radio"
              id="emailInformation"
              name="information"
              value="email"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="phoneInformation">By phone: </label>
            <input
              type="radio"
              id="phoneInformation"
              name="information"
              value="phone"
              onChange={(e) => handleChange(e)}
            />
          </fieldset>
          <label htmlFor="save">
            Do you agree to let us save our information? *
          </label>
          <input
            type="checkbox"
            name="save"
            id="save"
            checked={formInput.save}
            value={formInput.save}
            onChange={(e) => handleChange(e)}
            aria-describedby="saveError"
            aria-invalid={!errorForm.save ? false : true}
            ref={saveRef}
          />

          <span
            className="error"
            id="saveError"
            aria-atomic="true"
            aria-live="polite"
          >
            {errorForm.save}
          </span>

          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </form>
      </main>
      <div className="lineDecoration" role="presentation"></div>
      <Footer />
    </>
  );
};

export default Contact;
