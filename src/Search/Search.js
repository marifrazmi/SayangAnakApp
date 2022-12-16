import { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const [color, setColor] = useState("");
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  useEffect(() => {
    const doSearch = (e) => {
      axios
        .get(
          "https://my-json-server.typicode.com/marifrazmi/SayangAnakdb/toys?q=" + color
        )
        .then((results) => {
          setData(results.data);
        });
    };
    doSearch();
  }, [color]);
  console.log(data);

  
  const renderList = () => {
    return (
      <main>
        <h1 className="txt">Search</h1>
        <input
          className="search-input"
          type="text"
          value={color}
          placeholder="Search Toy by name..."
          onChange={(e) => setColor(e.target.value)} // e = event
        />
        <div className="item-container">
          {data.map((item, index) => {
            return (
              <NavLink to={`/Detail2/${item.color}`}>
              <div key={index}>
                  <img className="imgsearch" src={item.image1} alt="" />
              </div>
              </NavLink>
            );
          })}
        </div>
      </main>
    );
  };

  const renderError = () => {
    if (isError) {
      return (
        <div className="alert alert-warning alert-dismissible fade show"
          role="alert">
          Please try again in a few minutes.
        </div>
      );
    }
  };

  return (
    <div className="search-container">
      {renderError()}
      {isLoading ? (
        <div className="search-loading">Waiting...</div>
      ) : (
        <div className="search-result">{renderList()}</div>
      )}
    </div>
  );
};

export default Search;
