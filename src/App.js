import { useState } from "react";
import "./styles/themes.css";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function Home() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`container ${theme}`}>
      <Navbar />
      <div className="wrapper">
        <Header />
        <Content />
      </div>
      {/* <Footer />   */}
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
