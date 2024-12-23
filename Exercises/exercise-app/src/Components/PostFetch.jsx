import { useEffect, useState } from "react";

function PetitionComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState (true)
  const [error, setError] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (err) {
      setError(err.message);
    }finally{
      setLoading(false)
    }
  }

  if(loading){
    return <p>Loading ...</p>
  }
  if(error){
    return <p>`Error : ${error}`</p>
  }
  return ( 
      <div>
      </div>
  );
}

export default PetitionComponent;

// function CreatingResource() {
//   const url = "https://jsonplaceholder.typicode.com/posts";

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function fetchData() {
//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => console.log(json));
//   }
//   return <></>;
// }
// export default CreatingResource;
