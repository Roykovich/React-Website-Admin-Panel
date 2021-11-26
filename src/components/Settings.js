import { useState, useEffect } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { MaybePost } from "../components/Content";
import Header from "../components/Header";

/**
 * TODO
 *  * 1) Acomodar todo esto para volverlo placeholders nada más
 *  * 2) Cambiar el texto del preview con state
 */

export const EditPage = (props) => {
  const [events, setEvents] = useState(props.events);
  const [updates, setUpdates] = useState(props.updates);
  const [bookProgress, setBookProgress] = useState(props.bookProgress);

  const limits = {
    event: 28,
  };

  const changeEvents = (event, input) => {
    if (input === "events") {
      setEvents(event.target.value);
    } else if (input === "updates") {
      setUpdates(event.target.value);
    }
  };

  const removeFromBooks = (name) => {
    setBookProgress(bookProgress.filter((book) => book.name !== name));
  };

  const changeProgress = (event, name, index) => {
    if (event.target.value >= 0 && event.target.value <= 100) {
      const newBooks = [...bookProgress];
      newBooks[index].progress = event.target.value;
      setBookProgress(newBooks);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/config", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        events,
        last_updates: updates,
        book_progress: bookProgress,
      }),
    })
      .then(alert("Save!"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <Header events={events} updates={updates} bookProgress={bookProgress} />
      </div>
      <div className="headerSettings">
        <form method="put" onSubmit={onSubmit}>
          <div>
            <label htmlFor="Events">
              <b>Events</b>
            </label>
            <div className="input-container">
              <input
                type="text"
                name="Events"
                placeholder="Type event"
                value={events}
                onChange={(e) => changeEvents(e, "events")}
                maxLength={limits.event}
              />
              <p className="show-limit">
                <b>
                  {events.length}/{limits.event}
                </b>
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="Updates">
              <b>Last Updates</b>
            </label>
            <div className="input-container">
              <input
                type="text"
                name="Updates"
                placeholder="Type update"
                value={updates}
                onChange={(e) => changeEvents(e, "updates")}
                maxLength={limits.event}
              />
              <p className="show-limit">
                <b>
                  {updates.length}/{limits.event}
                </b>
              </p>
            </div>
          </div>
          <button className="save-button">Save</button>
        </form>
        <form method="put" onSubmit={onSubmit}>
          {bookProgress.map((book, i) => {
            return (
              <BookProgressContainer
                removeFromBooks={removeFromBooks}
                changeProgress={changeProgress}
                name={book.name}
                progress={book.progress}
                index={i}
                key={i}
              />
            );
          })}
          <div>
            {bookProgress.length >= 0 && bookProgress.length < 4 ? (
              <span style={{ color: "green" }}>
                <HiPlusCircle />
              </span>
            ) : (
              <></>
            )}
            <button className="save-button">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

const BookProgressContainer = (props) => {
  const { name, removeFromBooks, progress, changeProgress, index } = props;

  return (
    <div className="bookProgressContainer">
      <span name={name} onClick={() => removeFromBooks(name)}>
        <HiMinusCircle />
      </span>
      <p>
        <b>{name}</b>
      </p>
      <input
        type="text"
        inputMode="numeric"
        pattern="(100)|(0*\d{1,2})"
        name="progress"
        value={progress}
        onChange={(e) => changeProgress(e, name, index)}
      />
    </div>
  );
};

export const NewPost = () => {
  const [title, setTitle] = useState("Título");
  const [content, setContent] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  );

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <h1>Create a new post</h1>
      <MaybePost
        title={title}
        content={content}
        src={"https://picsum.photos/600/400?random=1"}
      />
      <div className="createPost">
        <form action="POST">
          <label htmlFor="Título">
            <b>Título</b>
          </label>
          <input
            type="text"
            name="Título"
            id=""
            placeholder="Type a title"
            value={title}
            onChange={titleChange}
          />
          <label htmlFor="Introducción">
            <b>Introducción</b>
          </label>
          <textarea
            type="text"
            name="Introducción"
            id="intro"
            placeholder="Type an introduction"
            style={{ height: "80px" }}
          />
        </form>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              backgroundColor: "#cccace",
              flex: 1,
              marginTop: "15px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Preview Image Here
          </div>
          <form style={{ flex: 1, marginTop: "15px" }}>
            <button>Upload Image</button>
          </form>
        </div>
      </div>
    </>
  );
};
