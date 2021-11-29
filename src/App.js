import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ExploreOptions from "./Containers/ExploreOptions";
import GetApp from "./Containers/GetApp";
import Home from "./Pages/Home";
import Order from "./Pages/Order";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/mobile" element={<GetApp page={true} />} />

        <Route path="/order" element={<Order />} />
      </Routes>

      {pathname !== "/mobile" ? <ExploreOptions /> : null}

      <Footer />
    </>
  );
}

export default App;
