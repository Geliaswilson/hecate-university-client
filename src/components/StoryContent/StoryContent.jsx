import "./StoryContent.scss";
import Chapters from "../Chapters/Chapters";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const StoryContent = ({story, concepts}) => {
    console.log({story});
    console.log(story.chapter);
    const chapters = story.chapter;
    console.log(chapters);
    return(
        <>
        <h1>{story.name}</h1>
        <p>{story.hook}</p>
        <ul className="navbar">
            <li>
                <AnchorLink href="#7c08defc-da13-4b76-81f3-4369c955ec61">
                <p>Replay</p>
                </AnchorLink>
            </li>
        </ul>
        <ul>
        {chapters?.map((actualChapter, i) => (
            <Chapters key={i} actualChapter={actualChapter} concepts={concepts} chapters={chapters}/>
        ))}
        </ul>
        </>
    )
}
export default StoryContent