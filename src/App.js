import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ExploreOptions from "./Containers/ExploreOptions";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <ExploreOptions />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
