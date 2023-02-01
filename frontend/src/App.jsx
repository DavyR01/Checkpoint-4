import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil";
import Inscription from "./components/Inscription";
import Connexion from "./components/Connexion";
import PageNotFound from "./pages/PageNotFound";
import MyCollection from "./pages/MyCollection";
import AllCollections from "./pages/AllCollections";
import Navbar2 from "./components/Navbar2";
import Contact from "./pages/Contact";
import Authentification from "./pages/Authentification";
// import Tendances from "./pages/Tendances";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/mycollection" element={<MyCollection />} />
          <Route path="/allcollections" element={<AllCollections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/authentification" element={<Authentification />} />
          {/* <Route path="/tendances" element={<Tendances />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
