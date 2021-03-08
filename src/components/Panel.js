import { Link } from "react-router-dom";
import { useState } from "react";

import "../styles/Panel.css";
import { NewPost } from "../components/Settings";

const Panel = () => {
  const [active, setActive] = useState("New Post");

  const makeActive = (option) => {
    setActive(option);
  };

  const options = ["New Post", "Edit Page", "Analytics"];

  return (
    <main className="main-panel">
      <div className="admin">
        <div className="menu">
          <div className="options">
            <h3>John Doe</h3>
            <ul>
              {options.map((item, i) => {
                return (
                  <li
                    className={active === item ? "active" : {}}
                    onClick={() => makeActive(item)}
                    key={i}
                  >
                    <a>{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <p>Website Admin v0.1.0</p>
        </div>
        <div className="settings">
          {active === "New Post" ? (
            <NewPost />
          ) : active === "Edit Page" ? (
            <h1>{active}</h1>
          ) : active === "Analytics" ? (
            <h1>{active}</h1>
          ) : (
            <h1 style={"color: red"}>Error</h1>
          )}
        </div>
      </div>
    </main>
  );
};

export default Panel;
