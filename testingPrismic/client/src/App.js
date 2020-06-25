import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";

const apiEndpoint = "https://adamsportfolio.cdn.prismic.io/api/v2";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cmsData, setCmsData] = useState([]);
  useEffect(() => {
    Prismic.getApi(apiEndpoint)
      .then((api) => {
        return api.query("");
      })
      .then(
        (response) => {
          console.log("Documents: ", response.results);
          console.log(response.results[0].data.bio_text[0].text);
          setCmsData(response.results[0].data.bio_text[0].text);
          setIsLoading(false);
        },
        (err) => {
          console.log(err);
        }
      );
  }, []);

  return (
    <div className="App">
      Hello World
      {isLoading && (
        <>
          <div>Loading...</div>
        </>
      )}
      {isLoading === false && (
        <>
          <div>Other Div</div>
          <div>Bio: {cmsData}</div>
        </>
      )}
    </div>
  );
}

export default App;
