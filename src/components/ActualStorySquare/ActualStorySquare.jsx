import "./ActualStorySquare.scss";
import { Link } from "react-router-dom";
const ActualStorySquare = ({ actualSquare }) => {
  console.log(actualSquare.id);
  return (
    <>
      <li>
        <Link className="story-square__link" to={`/${actualSquare.id}`}>
        <h2 className="story-square__title">{actualSquare.name}</h2>
        <img className="story-square__image" src={actualSquare.coverImage} />
        </Link>
      </li>
    </>
  );
};
export default ActualStorySquare;
