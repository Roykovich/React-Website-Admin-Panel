// Create a bar component, maybe an external file
const Bar = ({ name, progress }) => {
  return (
    <div className="bar-container">
      <p className="bar-title">{name}</p>
      <div className="bar">
        <div className="bar-progress"></div>
        <p>{progress}%</p>
      </div>
    </div>
  );
};

const AuthenticatedHeader = () => {
  const user = {
    name: "John Doe",
    username: "john_doe",
  };

  const books = [
    { name: "Fahrenheit 451", progress: 61 },
    { name: "Rogue Protocols", progress: 100 },
    { name: "Rythm of War", progress: 0 },
  ];

  return (
    <>
      <div className="img"></div>
      <div className="username">
        <h3>{user.name}</h3>
        <h4>@{user.username}</h4>
      </div>
      {books.map((book) => (
        <Bar name={book.name} progress={book.progress} />
      ))}
    </>
  );
};

const UnauthenticatedHeader = () => {
  return (
    <>
      {/* Aquí una imagen? */}
      <div className="about">
        <h3>Username here</h3>
        <h4>@username</h4>
      </div>
      <div className="info">
        <div className="events"></div>
        <div className="updates"></div>
      </div>
      <div className="progressBars">
        <Bar name={"Fahrenheit 451"} progress={63} />
        <Bar name={"Rogue Protocols"} progress={100} />
        <Bar name={"Rythm of War"} progress={0} />
        <Bar name={"Rythm of War"} progress={0} />
      </div>
    </>
  );
};

const Header = () => {
  const meme = false;
  return (
    <header>
      {meme ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}
    </header>
  );
};

export default Header;
