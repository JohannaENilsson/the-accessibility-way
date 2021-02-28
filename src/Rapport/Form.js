import { validateForm } from "../action/validate";
import { useState, useRef } from "react";

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

  const firstNameRef = useRef();
  const emailRef = useRef();
  const saveRef = useRef();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormInput({ ...formInput, [name]: value });
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
  console.log(Object.keys(errorForm)[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm({});
    let isValid = validateForm(formInput, setErrorForm);
    console.log(isValid);
    if (isValid === true) {
      setShowModal(true);
    } else {
      handleFocus(Object.keys(isValid)[0]);
    }
  };

  const handleFocus = (str) => {
    console.log(str);
    if (str === "firstName") {
      console.log("1");
      return firstNameRef.current.focus();
    } else if (str === "email") {
      console.log("2");
      emailRef.current.focus();
    } else if (str === "save") {
      console.log("3");
      saveRef.current.focus();
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        aria-describedby="form-label"
      >
        <label id="form-label">
          Required fields are marked width red and a *
        </label>

        <label htmlFor="firstName">First name: *</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formInput.firstName}
          aria-describedby="firstNameNote firstNameError"
          aria-invalid={!errorForm.firstName ? false : true}
          ref={firstNameRef}
        />
        <span id="firstNameNote">
          Your first name must be at least 2 characters
        </span>
        <span
          style={{ color: "red" }}
          id="firstNameError"
          aria-atomic="true"
          aria-live="polite"
        >
          {errorForm.firstName}
        </span>

        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactWithA11y;
