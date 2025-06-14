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
import UpdateReview from "../pages/UpdateReview";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch(
            `https://josmun-games-server.vercel.app/reviews`
          );
          const data = await res.json();
          if (data) {
            return data;
          }
        },
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/allReview",
        element: <AllReviews></AllReviews>,

        loader: () => fetch(`https://josmun-games-server.vercel.app/reviews`),
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
            <ReviewDetails></ReviewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://josmun-games-server.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/updateReview/:id",
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://josmun-games-server.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
