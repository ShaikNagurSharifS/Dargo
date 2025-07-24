import PortfolioProfile from './components/PortfolioProfile';
import FeatureFlags from './pages/FeatureFlags';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioProfile />} />
        <Route path="/feature-flags" element={<FeatureFlags />} />
      </Routes>
    </Router>
  );
}

export default App;
