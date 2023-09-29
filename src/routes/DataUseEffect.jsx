import { API_URL } from "../constants/api-url";
import { useEffect, useState } from "react";

export function DataUseEffect() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchDog();
    console.log("fetched data", data);
  }, []);

  async function fetchDog() {
    const res = await fetch(API_URL);
    const dog = await res.json();

    setData(dog);
  }

  return (
    <>
      <h2>Data route, fetch with react-query</h2>
      <img src={data.url} alt="Dog image or video" />
    </>
  );
}
