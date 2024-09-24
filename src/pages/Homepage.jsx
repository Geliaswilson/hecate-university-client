import { useState, useEffect } from "react";
import axios from "axios";
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
