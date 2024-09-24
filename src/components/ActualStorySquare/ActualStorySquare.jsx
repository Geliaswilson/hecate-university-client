import "./ActualStorySquare.scss";
const ActualStorySquare = ({ actualSquare }) => {
  console.log(actualSquare.name);
  return (
    <>
      <li>
        <h2 className="story-square__title">{actualSquare.name}</h2>
        <img className="story-square__image" src={actualSquare.coverImage} />
      </li>
    </>
  );
};
export default ActualStorySquare;
