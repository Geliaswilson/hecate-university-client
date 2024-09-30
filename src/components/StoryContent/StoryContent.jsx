import "./StoryContent.scss";
import Chapters from "../Chapters/Chapters";
const StoryContent = ({story, concepts}) => {
    console.log({story});
    console.log(story.chapter);
    const chapters = story.chapter;
    console.log(chapters);
    return(
        <>
        <h1>{story.name}</h1>
        <p>{story.hook}</p>
        <ul>
        {chapters?.map((actualChapter, i) => (
            <Chapters key={i} actualChapter={actualChapter} concepts={concepts}/>
        ))}
        </ul>
        </>
    )
}
export default StoryContent