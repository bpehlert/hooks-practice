import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    try {
      fetchData("https://jsonplaceholder.typicode.com/todos/");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = async url => {
    const data = await axios.get(url);
    setFetchedData(data.data);
  };

  const content = fetchedData.map((todo, i) => {
    return <p key={i}>{todo.title}</p>;
  });

  console.log(content);

  return (
    <div className="App">
      <h1>Hello world.</h1>
      <div>{content}</div>
    </div>
  );
}

export default App;
