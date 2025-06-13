import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddReview from "../pages/AddReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/addReview',
        element: <AddReview></AddReview>
      }
    ],
  },
]);

export default router;
