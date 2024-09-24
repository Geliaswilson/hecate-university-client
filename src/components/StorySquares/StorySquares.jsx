const StorySquares = ({BASE_URL}) => {
    const [storyImage, setStoryImage] = useState([]);
  const fetchStories = async () => {
    try {
      const fetchStories = await axios.get(BASE_URL);
      console.log(fetchStories);
      const fetchStoriesUsable = fetchStories.data;
      console.log(fetchStoriesUsable);
      setStoryImage(fetchStoriesUsable[0].coverImage);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    fetchStories();
  }, []);
    return(
        <>
        </>
    )
}
export default StorySquares;