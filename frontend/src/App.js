import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// HomePage
import HomePage from "./Pages/Home-Page/HomePage";

import Header from "./Pages/Home-Page/Header";

function App() {
  return (
    <Router>
      <Routes>
        {/* HomePage */}

        <Route path='/' element={<HomePage />} />
      
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
