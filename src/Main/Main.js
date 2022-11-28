import { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Main(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { click } = props;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const results = await axios(
          "https://my-json-server.typicode.com/marifrazmi/SayangAnakdb/db"
        );
        setData(results.data.toys)
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  const renderList = () => {
    return (
      <div className="item-container">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <NavLink
                to={`/Cardsdetails/${item.id}`}
                onClick={() =>
                  click.push(`/Cardsdetails/${item.id}`)
                }
              >
                <img className="img-list" src={item.image1} alt="" />
                </NavLink>
            </div>
          );
        })}
      </div>
    );
  };

  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Please try agai later in a few minutes.
        </div>
      );
    }
  };

  return (
    <div className="render-container">
      {renderError()}
      <h1 className="txt">All Toys</h1>
      {isLoading ? (
        <div className="loading-state">Please wait...</div>
      ) : (
        <div className="render">{renderList()}</div>
      )}
    </div>
  );
}

export default Main;