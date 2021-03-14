import { useState, useEffect } from "react";
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
  const [events, setEvents] = useState("There's no current events.");
  const [updates, setUpdates] = useState("There's no current updates.");
  const [bookProgress, setBookProgress] = useState([]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    fetch('http://localhost:5000/config')
      .then(res => res.json())
      .then(async data => {
        setBookProgress([...data.book_progress]);
        setEvents(data.events);
        setUpdates(data.last_updates);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar toggleTheme={toggleTheme} />
        <div className="wrapper">
          <Route path="/" exact>
            <Header
              events={events}
              updates={updates}
              bookProgress={bookProgress}
            />
            <Content />
          </Route>
          <ProtectedRoute
            path="/admin"
            component={Panel}

          />
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
