import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Login from "./routes/Login.jsx";
import MyParties from "./routes/MyParties.jsx";
import CreateParty from "./routes/CreateParty.jsx";
import Party from "./routes/Party.jsx";
import EditParty from "./routes/EditParty.jsx";
import ForgotPass from "./routes/ForgotPass.jsx";
import CreateAcc from "./routes/CreateAcc.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/parties",
        element: <MyParties />,
      },
      {
        path: "/party/new",
        element: <CreateParty />,
      },
      {
        path: "/party/:id",
        element: <Party />,
      },
      {
        path: "/party/edit/:id",
        element: <EditParty />,
      },
      {
        path: "/login/forgot-pass",
        element: <ForgotPass />,
      },
      {
        path: "/login/create",
        element: <CreateAcc />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
