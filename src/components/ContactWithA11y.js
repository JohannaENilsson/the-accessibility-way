import HeaderWithA11y from "./HeaderWithA11y";
import ModalWithA11y from "./ModalWithA11y";
import { useState } from "react";
import { Helmet } from "react-helmet";

const ContactWithA11y = () => {
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
  const [showModal, setShowModal] = useState(true);

  const validateForm = () => {
    let valid = true;

    let errObj = {};
    Object.entries(formInput).forEach((entry) => {
      const [key, value] = entry;
      console.log("array ", errObj);

      if (value === "" && key === "firstName") {
        errObj[key] = "Field can´t be empty";
        valid = false;
      }
      if (key === "email" && !value.includes("@")) {
        errObj[key] = "Email is not valid";
        valid = false;
      }
      if (key === "save" && !value) {
        errObj[key] = "Must agree";
        valid = false;
      }
    });
    setErrorForm(errObj);
    return valid;
  };
  console.log("error ", errorForm);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormInput({ ...formInput, [name]: value });
  };
  const deactivateModal = () => {
    setShowModal(false);
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
    console.log(formInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm({});
    let isValid = validateForm();
    {
      isValid ? setShowModal(true) : console.log(isValid);
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
      <HeaderWithA11y headerText={"Contact with A11Y"} />
      {showModal && (
        <ModalWithA11y
          setShowModal={setShowModal}
          deactivateModal={deactivateModal}
          formInput={formInput}
        />
      )}
      <main className="centerColumn" id="maincontent">
        <h2>Sign up and become a member</h2>
        <p>Required fields are marked width blue and a *</p>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label htmlFor="firstName">First name: *</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formInput.firstName}
            onChange={(e) => handleChange(e)}
            aria-describedby="firstNameNote firstNameError"
          />

          <span id="firstNameNote">
            Your name must be at least 2 characters
          </span>

          {errorForm.firstName && (
            <span className="error" id="firstNameError">
              {errorForm.firstName}
            </span>
          )}
          <label htmlFor="surname">Surname: </label>
          <input
            type="text"
            name="surname"
            id="surname"
            value={formInput.surname}
            onChange={(e) => handleChange(e)}
            aria-describedby="surnameNote surnameError"
          />
          {/* {formInput.surname.length < 1 && (
            <span id="surnameNote">*Your surname must be at least 2 characters</span>
          )} */}
          {/* {errorForm.surname && (
            <span className="error" id="surnameError">{errorForm.surname}</span>
          )} */}
          <label htmlFor="email">Email: *</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formInput.email}
            onChange={(e) => handleChange(e)}
            aria-describedby="emailNote emailError"
          />
          {errorForm.email && (
            <span className="error" id="emailError">
              {errorForm.email}
            </span>
          )}

          <label htmlFor="phone">Phone: </label>
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
          )}

          <label htmlFor="microgreen">Pick your favorite microgreen:</label>
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
          </select>

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
            checked={formInput.subscribe}
            value={formInput.subscribe}
            onChange={(e) => handleChange(e)}
            aria-describedby="saveError"
          />
          {errorForm.save && (
            <span className="error" id="saveError">
              {errorForm.save}
            </span>
          )}
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default ContactWithA11y;
