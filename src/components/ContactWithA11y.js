import HeaderWithA11y from "./HeaderWithA11y";
import { useState } from "react";

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

  const validateForm = () => {
    let valid = true;

    let errObj = {};
    Object.entries(formInput).forEach((entry) => {
      const [key, value] = entry;
      console.log("array ", errObj);

      if (value === "" && key === "firstName") {
        console.log("In if ", entry);

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
      isValid ? console.log("true", isValid) : console.log(isValid);
    }
  };
  return (
    <>
      <HeaderWithA11y headerText={"Contact with A11Y"} />

      <main className="centerColumn">
        <h2>Sign up and become a member</h2>
        <p>Required fields are marked width blue and a *</p>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label htmlFor="firstName">First name: *</label>
          <input
            type="text"
            name="firstName"
            value={formInput.firstName}
            onChange={(e) => handleChange(e)}
          />
          {/* {formInput.firstName.length < 1 && (
            <span>*Your name must be at least 2 characters</span>
          )} */}
          {errorForm.firstName && (
            <span className="error">{errorForm.firstName}</span>
          )}
          <label htmlFor="surname">Surname: </label>
          <input
            type="text"
            name="surname"
            value={formInput.surname}
            onChange={(e) => handleChange(e)}
          />
          {/* {formInput.surname.length < 1 && (
            <span>*Your surname must be at least 2 characters</span>
          )} */}
          {/* {errorForm.surname && (
            <span className="error">{errorForm.surname}</span>
          )} */}
          <label htmlFor="email">Email: *</label>
          <input
            type="email"
            name="email"
            value={formInput.email}
            onChange={(e) => handleChange(e)}
          />

          {errorForm.email && <span className="error">{errorForm.email}</span>}
          <label htmlFor="phone">Phone: </label>
          <input
            type="phone"
            name="phone"
            value={formInput.phone}
            onChange={(e) => handleChange(e)}
          />
          {errorForm.phone && <span className="error">{errorForm.phone}</span>}
          <label htmlFor="microgreen">Pick your favorite microgreen:</label>
          <select
            onChange={(e) => handleChange(e)}
            name="microgreen"
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
          <h3>Do you want to receive information by Phone or email</h3>

          <label htmlFor="email">Email: </label>
          <input
            type="radio"
            id="email"
            name="information"
            value="email"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="phone">Phone: </label>
          <input
            type="radio"
            id="phone"
            name="information"
            value="phone"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="save">
            Do you agree to let us save our information? *
          </label>
          <input
            type="checkbox"
            name="save"
            checked={formInput.subscribe}
            value={formInput.subscribe}
            onChange={(e) => handleChange(e)}
          />
          {errorForm.save && <span className="error">{errorForm.save}</span>}
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default ContactWithA11y;
