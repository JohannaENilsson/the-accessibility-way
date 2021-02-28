import { validateForm } from "../action/validate";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet";

const DubbelForm = () => {
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
      <main id="special">
        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          //   className="centerColumn"
        >
          <label style={{ color: "red" }}>
            Required fields{" "}
            <span style={{ color: "black" }}>are marked width red </span>
          </label>
          <label htmlFor="firstName">Name</label>
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

          <label htmlFor="email" style={{ color: "red" }}>
            Email
          </label>
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
        </form>

        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          //   className="centerColumn"
        >
          <label style={{ color: "red" }}>
            Required fields{" "}
            <span style={{ color: "black" }}>are marked width red and </span>*
          </label>
          <label htmlFor="firstName">Name</label>
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

          <label htmlFor="email" style={{ color: "red" }}>
            Email *
          </label>
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
        </form>
      </main>
    </>
  );
};

export default DubbelForm;
