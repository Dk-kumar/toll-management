import "./Home.style.scss";

const Home = () => {
  const Heading = () => {
    return (
      <div className="Heading-Wrapper">
        <h4 className="Heading">Toll Management Application</h4>
      </div>
    );
  };

  return <div className="Home-Container">{Heading()}</div>;
};

export default Home;
