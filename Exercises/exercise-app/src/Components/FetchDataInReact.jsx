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
      const response = await fetch(url);
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
        {data && (
          <ul>
            {data.map ((item)=> (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
  );
}

export default PetitionComponent;
