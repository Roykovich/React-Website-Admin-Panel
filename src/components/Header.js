// Create a bar component, maybe an external file
const Bar = () => {
  return (
    <></>
    // <div className="bar">
    //   <p>Title here</p>
    //   <div>
    //     <div className="progress"></div>
    //     <p>percentage%</p>
    //   </div>
    // </div>
  );
};

const AuthenticatedHeader = () => {
  const user = {
    name: "John Doe",
    username: "john_doe",
  };
  return (
    <>
      <div className="img"></div>
      <div className="username">
        <h3>{user.name}</h3>
        <h4>@{user.username}</h4>
      </div>
    </>
  );
};

const UnauthenticatedHeader = () => {
  return (
    <>
      {/* Aquí una imagen? */}
      <div className="img"></div>
      <div className="username">
        <h3>Username here</h3>
        <h4>@username</h4>
      </div>
      <div className="progressBars"></div>
    </>
  );
};

const Header = () => {
  const meme = true;
  return (
    <header>
      {meme ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}
    </header>
  );
};

export default Header;
