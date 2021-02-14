// Create a bar component, maybe an external file
const Bar = ({ name, progress }) => {
  return (
    <div className="book-progress-bar">
      <p className="bar-title">{name}</p>
      <div className="bar-container">
        <div className="bar">
          <div
            className="bar-progress"
            style={{ width: progress === 0 ? 1 : progress + "%" }}
          ></div>
        </div>
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
        <div className="about-container">
          <div className="about-img">
            <img
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt="John Doe Photo Portrait"
            />
          </div>
          <div className="about-text">
            <h2>STATE OF THE JOHN DOE</h2>
            <br />
            <br />
            <p>Aquí un textico muy cosmico que cosmiquea en las interwebs</p>
            <br />
            <h4 className="read-more">Read more</h4>
          </div>
        </div>
      </div>
      <div className="info">
        <div>
          <h2>Events</h2>
          <p>Peace was never an option. Cunt.</p>
          <h4 className="read-more">Read more</h4>
        </div>
        <div>
          <h2>Lastest Updates</h2>
          <p>Peace was never an option. Cunt.</p>
          <h4 className="read-more">Read more</h4>
        </div>
      </div>
      <div className="progressBars">
        <div className="progressBars-container">
          <Bar name={"Fahrenheit 451"} progress={63} />
          <Bar name={"Rogue Protocols"} progress={100} />
          <Bar name={"Rythm of War"} progress={0} />
          <Bar name={"Mistborn"} progress={16} />
        </div>
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
