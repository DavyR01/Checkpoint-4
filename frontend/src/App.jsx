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
import Dashboard from "./pages/Dashboard";
import AllCollectionsDetails from "./pages/AllCollectionsDetails";
import {
  CurrentUserContextProvider,
  useCurrentUserContext,
} from "./contexts/userContext";
import MyProfile from "./pages/MyProfile";

// import Tendances from "./pages/Tendances";

function App() {
  const { token } = useCurrentUserContext;

  return (
    <div className="App">
      <BrowserRouter>
        <CurrentUserContextProvider>
          <Navbar2 />
          <Routes>
            <Route path="/mycollection" element={<MyCollection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Accueil />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/allcollections" element={<AllCollections />} />
            <Route
              path="/allcollections/:id"
              element={<AllCollectionsDetails />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/authentification" element={<Authentification />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CurrentUserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
