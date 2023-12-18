import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Fun from "./pages/Fun.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fun" element={<Fun />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
