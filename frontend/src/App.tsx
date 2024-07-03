import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";
import News from "./pages/news";
import NewsItem from "./pages/newsitem";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
