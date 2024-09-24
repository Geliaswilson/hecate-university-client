import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from "./pages/Homepage/Homepage";
const BASE_URL = import.meta.env.VITE_API_URL;

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage BASE_URL={BASE_URL} />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
