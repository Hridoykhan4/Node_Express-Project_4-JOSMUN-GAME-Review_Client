import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/reviews`),
      },
      {
        path: "/addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/allReview",
        element: <AllReviews></AllReviews>,
        loader: () => fetch(`http://localhost:5000/reviews`),
      },
      {
        path: "/details/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
