import ChapterParts from "../ChapterParts/ChapterParts";
const Chapters = ({actualChapter}) => {
    console.log(actualChapter);
    const chapterParts = actualChapter.part;
    console.log(chapterParts);
    return (
        <>
        <h2>{actualChapter.name}</h2>
        {chapterParts.map((actualPart, i) => (
            <ChapterParts key={i} actualPart={actualPart} />
        ))}
        </>
    )
}
export default Chapters