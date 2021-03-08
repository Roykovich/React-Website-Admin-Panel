import { useState } from "react";
import { MaybePost } from "../components/Content";

/**
 * TODO
 *  * 1) Acomodar todo esto para volverlo placeholders nada más
 *  * 2) Cambiar el texto del preview con state
 */

export const NewPost = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const [title, setTitle] = useState("Título");
  const [date, setDate] = useState(today);
  const [content, setContent] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  );

  console.log(today);

  return (
    <>
      <h1>Create a new post</h1>
      <div className="preview">
        <MaybePost title={title} date={date} content={content} width={100} />
      </div>
      <div className="createPost">
        <form action="POST">
          <label for="Título">
            <b>Título</b>
          </label>
          <input type="text" name="Título" id="" placeholder="Type a title" />
          <label for="Introducción">
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
