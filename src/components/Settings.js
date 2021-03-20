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
    }
    else if (input === "updates") {
      setUpdates(event.target.value);
    }
  };

  return (
    <>
      <div>
        <Header events={events} updates={updates} bookProgress={bookProgress} />
      </div>
      <div className="headerSettings">
        <form action="" method="post">
          <label htmlFor="Events">
            <b>Events</b>
          </label>
          <div className="input-container">
            <input
              type="text"
              name="Events"
              placeholder="Type event"
              value={events}
              onChange={e => changeEvents(e, 'events')}
              maxLength={limits.event}
            />
            <p className="show-limit"><b>{events.length}/{limits.event}</b></p>
          </div>
          <label htmlFor="Updates">
            <b>Last Updates</b>
          </label>
          <div className="input-container">
            <input
              type="text"
              name="Updates"
              placeholder="Type update"
              value={updates}
              onChange={e => changeEvents(e, 'updates')}
              maxLength={limits.event}
            />
            <p className="show-limit"><b>{updates.length}/{limits.event}</b></p>
          </div>
          <button>Save</button>
        </form>
        <form style={{ background: "red", flex: 2 }}>
          {
            bookProgress.map((book, i) => {
              return <p>{book.name} - {book.progress}%</p>
            })
          }
          <div>
            {
              bookProgress.length === 0 ?
                (<button>
                  <HiPlusCircle />
                </button>) : bookProgress.length === 4 ?
                  (<button>
                    <HiMinusCircle />
                  </button>) :
                  (<>
                    <button>
                      <HiPlusCircle />
                    </button>
                    <button>
                      <HiMinusCircle />
                    </button>
                  </>)
            }
          </div>
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
