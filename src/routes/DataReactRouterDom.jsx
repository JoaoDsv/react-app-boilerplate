import { useLoaderData, useNavigation } from "react-router-dom";
import { API_URL } from "../constants/api-url";

export function DataReactRouterDom() {
  const dog = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      <h2>Data route, fetch with react-router-dom</h2>
      {navigation.state === "loading" ? (
        <p>Loading...</p>
      ) : (
        <img src={dog.url} alt="Dog image or video" />
      )}
    </>
  );
}

export async function dataLoader() {
  const res = await fetch(API_URL);
  const dog = await res.json();

  return dog;
}
