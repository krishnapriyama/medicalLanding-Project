import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Homepage from "./pages/homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
