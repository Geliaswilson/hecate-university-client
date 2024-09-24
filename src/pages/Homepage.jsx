import StorySquares from "../components/StorySquares/StorySquares";
const Homepage = ({BASE_URL}) => {
    console.log(BASE_URL);
  return (
    <>
    <StorySquares BASE_URL={BASE_URL}/>
    </>
  );
};
export default Homepage;
