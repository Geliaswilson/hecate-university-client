import StoryContent from "../../components/StoryContent/StoryContent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ActualStories = ({BASE_URL}) => {
    console.log(BASE_URL);
    const [stories, setStories] = useState([]);
    const { storyId } = useParams();
    const fetchSpecificStories = async () => {
      try {
        const fetchSpecificStories = await axios.get(`${BASE_URL}${storyId}`);
        console.log(fetchSpecificStories);
        const fetchSpecificStoriesUsable = fetchSpecificStories.data;
        console.log(fetchSpecificStoriesUsable);
        setStories(fetchSpecificStoriesUsable);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    
    useEffect(() => {
      fetchSpecificStories();
    }, [storyId]);
    console.log(stories)
    return (
        <>
        <StoryContent story={stories}/>
        </>
    )
}
export default ActualStories;