import ChapterParts from "../ChapterParts/ChapterParts";
import "./Chapters.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Chapters = ({ actualChapter, concepts }) => {
  console.log(actualChapter);
  
  const chapterParts = actualChapter.part;
  console.log(chapterParts);
  console.log(actualChapter.id);
  return (
    <>
      <li className="chapter-parts__list-items">
        <p className="chapter-parts__title-decor chapter-parts__title-decor-top">┍━━━━━━━☾━━━━━━━┑</p>
        <h2 className="chapter-parts__title" id={actualChapter.id}>{actualChapter.name}</h2>
        <p className="chapter-parts__title-decor chapter-parts__title-decor-bottom">┕━━━━━━━☽━━━━━━━┙</p>
        <ul className="navbar">
            <li className="chapter-parts__anchor-list-item">
                <AnchorLink className="chapter-parts__anchor" href="#941ee4e9-4e7b-4c67-8c81-e969db3163c5">
                <p className="chapter-parts__anchor-text">Plyscithia</p>
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
