import ChapterParts from "../ChapterParts/ChapterParts";

const Chapters = ({ actualChapter, concepts }) => {
  console.log(actualChapter);
  
  const chapterParts = actualChapter.part;
  console.log(chapterParts);
  return (
    <>
      <li className="chapter-parts__list-items">
        <h2>{actualChapter.name}</h2>
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
