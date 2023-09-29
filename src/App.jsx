import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { Home } from "./routes/Home";
import { DataReactRouterDom, dataLoader } from "./routes/DataReactRouterDom";
import { DataReactQuery } from "./routes/DataReactQuery";
import { DataUseEffect } from "./routes/DataUseEffect";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/data-use-effect" element={<DataUseEffect />} />
        <Route path="/data-react-query" element={<DataReactQuery />} />
        <Route
          path="/data-react-router-dom"
          element={<DataReactRouterDom />}
          loader={dataLoader}
        />
      </Route>
    )
  );

  return (
    <div className="app-wrapper">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

function Root() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/data-react-router-dom">Data with React-router-dom</Link>
        <Link to="/data-react-query">Data with React-query</Link>
        <Link to="/data-use-effect">Data with React useEffect hook</Link>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
