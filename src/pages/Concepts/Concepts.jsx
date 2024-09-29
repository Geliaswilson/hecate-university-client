import ActualConcept from "../../components/ActualConcept/ActualConcept";
import axios from "axios";
import { useState, useEffect } from "react";
const Concepts = ({BASE_URL}) => {
    const [concepts, setConcepts] = useState([])
    const fetchConcept = async () => {
        const fetching = await axios.get(`${BASE_URL}concepts//`);
        console.log(fetching);
        const fetchedData = fetching.data;
        console.log(fetchedData);
        setConcepts(fetchedData);
    }
    useEffect(() => {
        fetchConcept();
    })
    console.log(concepts)
    return(
        <>
        <ul>
            {concepts.map((actualConcept, i) => (
        <ActualConcept key={i} actualConcept={actualConcept} />))}
        </ul>
        </>
    )
}
export default Concepts