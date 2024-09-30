import ChapterParts from "../ChapterParts/ChapterParts";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Chapters = ({ actualChapter, concepts }) => {
  console.log(actualChapter);
  
  const chapterParts = actualChapter.part;
  console.log(chapterParts);
  console.log(actualChapter.id);
  return (
    <>
      <li className="chapter-parts__list-items">
        <h2 id={actualChapter.id}>{actualChapter.name}</h2>
        <ul className="navbar">
            <li>
                <AnchorLink href="#941ee4e9-4e7b-4c67-8c81-e969db3163c5">
                <p>Plyscithia</p>
                </AnchorLink>
            </li>
        </ul>
        {chapterParts.map((actualPart, i) => (
          <ChapterParts
            key={i}
            actualPart={actualPart}
            concepts={concepts}
          />
        ))}
      </li>
      
    </>
  );
};
export default Chapters;
