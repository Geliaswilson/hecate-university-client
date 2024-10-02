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
    const olympusLink = <a className="actual-part__olympus" id="olympus">Olympus</a>;
    return text
      .split("[olympuslink]")
      .map((part, index) => (index === 0 ? part : [olympusLink, part]));
  };
  return (
    <>
      <h3 className="actual-part__title" id={actualPart.id}>
        {actualPart.name}
      </h3>
      <p className="actual-part__text">{olympusTooltipLink(actualPart.text)}</p>
      <div className="actual-part__tooltip-div">
      <Tooltip className="actual-part__tooltip" anchorSelect="#olympus" clickable>
        <button className="actual-part__tooltip-button" onClick={handleToHeaven}>Heaven</button>
        <p className="actual-part__tooltip-text">{concepts[0].text}</p>
      </Tooltip>
      </div>
    </>
  );
};
export default ChapterParts;
