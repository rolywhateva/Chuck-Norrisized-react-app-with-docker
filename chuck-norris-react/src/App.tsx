import { Navigate,Route, Routes } from "react-router";

import { JokesSearchPage } from "./pages/jokes-search/jokes-search-page";
import { MainPage } from "./pages/main/main-page";
import { NotFoundPage } from "./pages/not-found/not-found-page";
import { RandomJokesPage } from "./pages/random-jokes/random-jokes-page";

import "./main.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<Navigate to="random" />} />

        <Route path="/search" element={<JokesSearchPage />} />

        <Route path="/random" element={<RandomJokesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
