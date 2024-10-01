import { useState, useEffect } from "react";
import axios from "axios";
import "./StorySquares.scss";
import ActualStorySquare from "../ActualStorySquare/ActualStorySquare";
const StorySquares = ({BASE_URL}) => {
    const [stories, setStories] = useState([]);
  const fetchStories = async () => {
    try {
      const fetchStories = await axios.get(BASE_URL);
      console.log(fetchStories);
      const fetchStoriesUsable = fetchStories.data;
      console.log(fetchStoriesUsable);
      setStories(fetchStoriesUsable);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    fetchStories();
  }, []);
  console.log(stories[0]?.name)
    return(
        <>
        <ul className="story-square__list">
            {stories.map((actualSquare, i) => (
        <ActualStorySquare key={i} actualSquare={actualSquare}/>
    ))}
        </ul>
        
        </>
    )
}
export default StorySquares;