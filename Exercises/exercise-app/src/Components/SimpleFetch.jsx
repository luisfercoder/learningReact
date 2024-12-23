import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

export const FetchData = () => {

  const [dataState, setDataState] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataState(data));
  }, []);

  console.log(dataState);
  //console.log(data);

  return <>
  </>;
};
