import AriaModal from "react-aria-modal";

const Modal = ({ deactivateModal, cardInfo }) => {
  //   console.log(cardInfo);

  return (
    <AriaModal
      titleText="Confirm your information"
      onExit={deactivateModal}
      initialFocus="#demo-one-deactivate"
      underlayStyle={{ paddingTop: "6em" }}
    >
      <div id="demo-one-modal" className="modal" style={{ display: "block" }}>
        <section
          className="popUp centerColumn"
          style={{ backgroundColor: cardInfo.background }}
        >
          <h1>{cardInfo.title}</h1>
          {cardInfo.modal &&
            cardInfo.modal.map((content) => {
              return (
                <p
                  key={cardInfo.id + content.id}
                  style={{ color: content.color, fontSize: content.font }}
                >
                  {content.content}
                </p>
              );
            })}

          <button onClick={deactivateModal} id="demo-one-deactivate">
            Close
          </button>
        </section>
      </div>
    </AriaModal>
  );
};

export default Modal;
