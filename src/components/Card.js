const Card = ({ item }) => {
  //   console.log(eval(item.imgName));
  return (
    <div
      className="card centerColumn"
      onFocus={() => console.log("FOCUS", item.title)}
      onClick={() => console.log("CLICK", item.title)}
      onBlur={() => console.log("BLUR", item.title)}
      // style={{ backgroundColor: item.background }}
    >
      <img src={item.imgName} alt={item.alt} />
      <h2 style={{ color: item.color }}>{item.title}</h2>
      <p style={{ color: item.color }}>{item.description}</p>
      <button>Read more about {item.title}</button>
    </div>
  );
};

export default Card;
