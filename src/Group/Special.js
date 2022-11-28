import { useEffect, useState } from "react";
import axios from "axios";
import "./Special.css";
import { NavLink } from "react-router-dom";

function Animal(props) {
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
          "https://my-json-server.typicode.com/marifrazmi/SayangAnakdb/toys?type=Special"
        );
        setData(results.data)
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
            <div class="box" key={index}>
              <NavLink
                to={`/Cardsdetails/${item.id}`}
                onClick={() =>
                  click.push(`/Cardsdetails/${item.id}`)
                }
              >
                <img class="img-list" src={item.image1} alt="" />
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
          Please try again in a few minutes.
        </div>
      );
    }
  };

  return (
    <div className="render-container">
      {renderError()}
      <h1 className="txt">Special</h1>
      {isLoading ? (
        <div className="loading-state">Please Wait...</div>
      ) : (
        <div className="render">{renderList()}</div>
      )}
    </div>
  );
}

export default Animal;