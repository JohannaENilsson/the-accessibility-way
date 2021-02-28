import Modal from "./Modal";
import { useState } from "react";

const Card = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const img = require("../assets/" + item.imgName);

  const deactivateModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <Modal deactivateModal={deactivateModal} cardInfo={item} />}
      <article
        className="card centerColumn"
        onClick={() => setShowModal(true)}
        // style={{ backgroundColor: item.background }}
      >
        <img src={img.default} alt={item.alt} />
        <h2 style={{ color: item.color }}>{item.title}</h2>
        <p style={{ color: item.color }}>{item.description}</p>
        <button onClick={() => setShowModal(true)}>
          Read more about {item.title}
        </button>
      </article>
    </>
  );
};

export default Card;
