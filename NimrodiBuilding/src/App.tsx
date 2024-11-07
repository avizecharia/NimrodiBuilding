import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

const router = createBrowserRouter([
  
  //FILL HERE
  {
    path:"/",
    element:<Reception/>
  },
  {
    path: "/floor/:index",
    element: <PrivateRoute component={<Floor />}></PrivateRoute>,
    children: [{}],
  },
  {
    path: "/forbidden",
    element: <Forbidden />,
    children: [{}],
  },
  {
    path: "/reception",
    element: <Reception />,
    children: [{}],
  },
]);

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout/>
     <RouterProvider router={router} />
     </BrowserRouter>
    </div>
  );
}

export default App;
