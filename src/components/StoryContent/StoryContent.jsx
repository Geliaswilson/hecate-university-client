import "./StoryContent.scss";
import Chapters from "../Chapters/Chapters";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const StoryContent = ({story, concepts}) => {
    console.log({story});
    console.log(story.chapter);
    const chapters = story.chapter;
    console.log(chapters);
    return(
        <>
        <h1 className="actual-stories__title">{story.name}</h1>
        <p className="actual-stories__hook">{story.hook}</p>
        <ul className="navbar">
            <li className="actual-stories__anchor-list-item">
                <AnchorLink className="actual-stories__anchor" href="#7c08defc-da13-4b76-81f3-4369c955ec61">
                <p className="actual-stories__anchor-text">Replay</p>
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