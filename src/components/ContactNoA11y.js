import HeaderNoA11y from "./HeaderNoA11y";
import { useState } from "react";

const ContactNoA11y = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm({});
    // let isValid = validateForm();
    console.log("submitted");
    // {
    //   isValid ? console.log("true", isValid) : console.log(isValid);
    // }
  };
  return (
    <>
      <HeaderNoA11y headerText={"Contact No A11Y"} />
      <div className="main centerColumn">
        <h2>Sign up and become a member</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formInput.firstName}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="surname">Surname: </label>
          <input
            type="text"
            name="surname"
            id="surname"
            value={formInput.surname}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formInput.email}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="phone">Phone: </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            value={formInput.phone}
            onChange={(e) => handleChange(e)}
          />

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
            Do you agree to let us save our information?
          </label>
          <input
            type="checkbox"
            name="save"
            id="save"
            checked={formInput.subscribe}
            value={formInput.subscribe}
            onChange={(e) => handleChange(e)}
          />

          <button type="submit">Submit</button>
        </form>

        <p>Required fields are marked width red</p>
      </div>
    </>
  );
};

export default ContactNoA11y;
