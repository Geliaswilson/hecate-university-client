import "./ChapterParts.scss";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
const ChapterParts = ({ actualPart, concepts }) => {
  console.log(actualPart);
  console.log(concepts);
  const navigate = useNavigate();
  const handleToHeaven = () => {
    navigate("/concepts//#1");
  };
  const olympusTooltipLink = (text) => {
    const olympusLink = <a id="olympus">Olympus</a>;
    return text
      .split("[olympuslink]")
      .map((part, index) => (index === 0 ? part : [olympusLink, part]));
  };
  return (
    <>
      <h3>{actualPart.name}</h3>
      <p className="actual-part__text">{olympusTooltipLink(actualPart.text)}</p>
      <Tooltip anchorSelect="#olympus" clickable>
        <button onClick={handleToHeaven}>Heaven</button>
        <p>{concepts[0].text}</p>
      </Tooltip>
    </>
  );
};
export default ChapterParts;
