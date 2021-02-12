import AriaModal from "react-aria-modal";

const ModalWithA11y = ({ deactivateModal, formInput, submitModal }) => {
  console.log(formInput);

  return (
    <AriaModal
      titleText="Confirm your information"
      onExit={deactivateModal}
      initialFocus="#demo-one-deactivate"
      underlayStyle={{ paddingTop: "6em" }}
    >
      <div id="demo-one-modal" className="modal" style={{ display: "block" }}>
        <section className="popUp">
          <h1>Confirm your information</h1>
          <p>
            FirstName: <b>{formInput.firstName}</b>
          </p>
          <p>
            Surname: <b>{formInput.surname}</b>
          </p>
          <p>
            Email: <b>{formInput.email}</b>
          </p>
          <p>
            Phone: <b>{formInput.phone}</b>
          </p>
          <p>
            Favorite microgreen: <b>{formInput.microgreen}</b>
          </p>
          <p>
            Want information by: <b>{formInput.information}</b>
          </p>
          <button onClick={deactivateModal}>Change</button>
          <button onClick={submitModal} id="demo-one-deactivate">
            Confirm and submit
          </button>
        </section>
      </div>
    </AriaModal>
  );
};

export default ModalWithA11y;
