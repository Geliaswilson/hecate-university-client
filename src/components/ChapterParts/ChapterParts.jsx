import "./ChapterParts.scss";
const ChapterParts = ({actualPart}) => {
    console.log(actualPart);
    return (
        <>
        <h3>{actualPart.name}</h3>
        <p className="actual-part__text">{actualPart.text}</p>
        </>
    )
}
export default ChapterParts;