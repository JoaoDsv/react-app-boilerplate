import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../constants/api-url";

export function DataReactQuery() {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchDog(),
    queryKey: ["dogs"],
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>Data route, fetch with react-query</h2>
      <img src={data.url} alt="Dog image or video" />
    </>
  );
}

async function fetchDog() {
  const res = await fetch(API_URL);
  const dog = await res.json();

  return dog;
}
