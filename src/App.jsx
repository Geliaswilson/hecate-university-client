import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import ActualStories from './pages/ActualStories/ActualStories';
import Events from './pages/Events/Events';
import Organizations from './pages/Organizations/Organizations';
import Concepts from './pages/concepts/Concepts';
import Header from './components/Header/Header';

const BASE_URL = import.meta.env.VITE_API_URL;

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage BASE_URL={BASE_URL} />} />
        <Route path="/:storyId" element={<ActualStories BASE_URL={BASE_URL}/>} />
        <Route path="/events" element={<Events BASE_URL={BASE_URL} />} />
        <Route path="/organizations" element={<Organizations BASE_URL={BASE_URL}/>} />
        <Route path="/concepts//" element={<Concepts BASE_URL={BASE_URL} />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
