import "./ChapterParts.scss";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
const ChapterParts = ({ actualPart, concepts }) => {
  const navigate = useNavigate();
  const handleToHeaven = () => {
    navigate("/concepts//#1");
  };
  const tooltipLink = (text) => {
    const olympusTooltip = text.split("[olympuslink]").map((part, index) =>
      index === 0
        ? part
        : [
            <a
              key={`olympus-${index}`}
              className="actual-part__olympus"
              id="olympus"
            >
              Olympus
            </a>,
            part,
          ]
    );
    return olympusTooltip.map((part, index) => {
      if (typeof part === "string") {
        return part.split("[universitylink]").map((subPart, subIndex) =>
          subIndex === 0
            ? subPart
            : [
                <a
                  key={`university-${index}-${subIndex}`}
                  className="actual-part__university"
                  id="university"
                >
                  University
                </a>,
                subPart,
              ]
        );
      }
      return part;
    });
  };
  return (
    <>
      <h3 className="actual-part__title" id={actualPart.id}>
        {actualPart.name}
      </h3>
      <p className="actual-part__text">{tooltipLink(actualPart.text)}</p>
      <div className="actual-part__tooltip-div">
        <Tooltip
          className="actual-part__tooltip"
          anchorSelect="#olympus"
          clickable
        >
          <button
            className="actual-part__tooltip-button"
            onClick={handleToHeaven}
          >
            Heaven
          </button>
          <p className="actual-part__tooltip-text">{concepts[0].text}</p>
        </Tooltip>
        <Tooltip
          className="actual-part__tooltip"
          anchorSelect="#university"
          clickable
        >
          <button
            className="actual-part__tooltip-button"
            onClick={handleToHeaven}
          >
            Hecate University
          </button>
          <p className="actual-part__tooltip-text">{concepts[0].text}</p>
        </Tooltip>
      </div>
    </>
  );
};
export default ChapterParts;
