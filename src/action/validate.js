export const validateForm = (formInput, setErrorForm) => {
  let valid = true;

  let errObj = {};
  Object.entries(formInput).forEach((entry) => {
    const [key, value] = entry;

    if (value === "" && key === "firstName") {
      errObj[key] = "First name can´t be empty";
      valid = false;
    }
    if (key === "email" && !value.includes("@")) {
      errObj[key] = "Email is not valid. ";
      valid = false;
    }
    if (key === "save" && !value) {
      errObj[key] = "Must agree to let us save your information";
      valid = false;
    }
  });
  setErrorForm(errObj);
  return valid;
};
