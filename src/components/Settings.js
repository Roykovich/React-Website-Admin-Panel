import { useState, useEffect } from "react";
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

  const changeEvents = (event) => {
    setEvents(event.target.value);
  };

  return (
    <>
      <div>
        <Header events={events} updates={updates} bookProgress={bookProgress} />
      </div>
      <div>
        <form action="" method="post">
          <label htmlFor="Events">
            <b>Events</b>
            <div>
              <input
                type="text"
                name="Events"
                id=""
                placeholder="Type a title"
                value={events}
                onChange={changeEvents}
              />
              <p>{limits.event - events.length}</p>
            </div>
          </label>
        </form>
      </div>
    </>
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
      <div className="preview">
        <MaybePost title={title} content={content} width={100} />
      </div>
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
