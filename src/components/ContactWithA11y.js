import NavigationWithA11y from "./NavigationWithA11y";
import { useState } from "react";

const ContactWithA11y = () => {
  const [formInput, setFormInput] = useState({
    firstName: "",
    Surname: "",
    fruit: "Pick",
    pets: "yes",
    subscribe: false,
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);
    setFormInput({ ...formInput, [name]: value });
  };

  const handleReset = () => {
    setFormInput({ firstName: "", Surname: "" });
    console.log(formInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("i was submited", formInput);
  };
  return (
    <>
      <header>
        <NavigationWithA11y />
      </header>
      <main>
        <h2>Can you fill in this form</h2>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            name="firstName"
            value={formInput.firstName}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="Surname">Surname</label>
          <input
            type="text"
            name="Surname"
            value={formInput.Surname}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="fruit">Pick your favorite fruit:</label>
          <select
            onChange={(e) => handleChange(e)}
            name="fruit"
            value={formInput.fruit}
          >
            <option value="Pick" disabled>
              Pick a fruit
            </option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>

          <h3>Do you have pets?</h3>
          <label htmlFor="yes">yes: </label>
          <input
            type="radio"
            id="yes"
            name="pets"
            value="yes"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="no">No: </label>
          <input
            type="radio"
            id="no"
            name="pets"
            value="no"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="subscribe">subscribe to our newsletter</label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formInput.subscribe}
            value={formInput.subscribe}
            onChange={(e) => handleChange(e)}
          />

          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default ContactWithA11y;
