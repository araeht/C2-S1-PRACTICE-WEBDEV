const Card = ({ name, classroom, hobby, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{classroom}</p>
      <i>{hobby}</i>
    </div>
  );
};

export default Card;