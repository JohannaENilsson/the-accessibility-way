import React from "react";

const Fragment = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Fragment;
