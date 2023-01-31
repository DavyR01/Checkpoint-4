import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil";
import Inscription from "./components/Inscription";
import Connexion from "./components/Connexion";
import PageNotFound from "./pages/PageNotFound";
import MyCollection from "./pages/MyCollection";
import AllCollections from "./pages/AllCollections";
// import Tendances from "./pages/Tendances";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/mycollection" element={<MyCollection />} />
          <Route path="/allcollections" element={<AllCollections />} />
          {/* <Route path="/tendances" element={<Tendances />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
