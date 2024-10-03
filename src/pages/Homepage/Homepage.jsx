import StorySquares from "../../components/StorySquares/StorySquares";
import "./Homepage.scss";
const Homepage = ({BASE_URL}) => {
    console.log(BASE_URL);
  return (
    <>
    <main>
<h2 className="storysquares__subtitle" storysquares__subtitle>Seeking truth and justice under the ausipces of the divine and diabolical.</h2>
<p className="storysquares__sub-subtitle">Tales of the University</p>
    <StorySquares BASE_URL={BASE_URL}/>
    </main>
    </>
  );
};
export default Homepage;
