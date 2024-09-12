// import Counter from "./components/Counter";
// import NowPlayingMovies from "./components/NowPlayMovies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ROUTES from "./router/router";

const router = createBrowserRouter([
  ...ROUTES,
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
