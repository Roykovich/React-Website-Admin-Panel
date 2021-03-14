import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/Panel.css";
import { NewPost, EditPage } from "../components/Settings";

const Panel = props => {
  const [active, setActive] = useState("New Post");
  const [events, setEvents] = useState("There's no current events.");
  const [updates, setUpdates] = useState("There's no current updates.");
  const [bookProgress, setBookProgress] = useState([]);


  const options = ["New Post", "Edit Page", "Analytics"];


  const makeActive = (option) => {
    setActive(option);
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
  }, [])

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
            <EditPage
              events={events}
              updates={updates}
              bookProgress={bookProgress}
            />
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
