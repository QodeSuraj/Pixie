import "./App.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

// To exclude the navbar in Dashboard page
const MainApp = () => {
  const location = useLocation();
  const excludedPaths = ["/dashboard"];

  return (
    <div className="App">
      {!excludedPaths.includes(location.pathname) && <Navbar />}
      <AppRoutes />
    </div>
  );
};

export default App;
