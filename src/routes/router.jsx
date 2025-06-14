import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import WatchListPage from "../pages/WatchListPage";
import MyReviews from "../pages/MyReviews";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/reviews`),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>,
          </PrivateRoute>
        ),
      },
      {
        path: "/allReview",
        element: <AllReviews></AllReviews>,

        loader: () => fetch(`http://localhost:5000/reviews`),
      },
      {
        path: "/myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/watchLists",
        element: <WatchListPage></WatchListPage>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ReviewDetails></ReviewDetails>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: '/updateReview/:id',
        element: <p>Update</p>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
