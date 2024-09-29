const ActualConcept = ({actualConcept}) => {
    return (
        <>
        <li>
        <h1>Concepts</h1>
        <h2>{actualConcept.concept}</h2>
        <p>{actualConcept.text}</p>
        </li>
        </>
    )
}
export default ActualConcept;