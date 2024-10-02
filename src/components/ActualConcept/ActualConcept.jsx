import "./ActualConcept.scss"
const ActualConcept = ({actualConcept}) => {
    return (
        <>
        <li id={actualConcept.id}>
        <h2 className="actual-concept__title">{actualConcept.concept}</h2>
        <p className="actual-concept__text">{actualConcept.text}</p>
        </li>
        </>
    )
}
export default ActualConcept;