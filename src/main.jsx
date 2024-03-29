import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root  from "./routes/root";
import ErrorPage from "./routes/error-page";

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
    {
        path: "/portfolio/about",
        element: <Root />,
    },
    {
      path: "/portfolio/tech",
      element: <Root />,
  },
  {
    path: "/portfolio/contact",
    element: <Root />,
},
  ]
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);