import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/themes.css";
import "./styles/App.css";
import ProtectedRoute from "./auth/protected-route";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Panel from "./components/Panel";
import Footer from "./components/Footer";

function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar toggleTheme={toggleTheme} />
        <div className="wrapper">
          <Route path="/" exact>
            <Header />
            <Content />
          </Route>
          <ProtectedRoute path="/admin" component={Panel} />
        </div>
        {/* <Footer />   */}
      </div>
    </Router>
  );
}

function App() {
  return <Home />;
}

export default App;
