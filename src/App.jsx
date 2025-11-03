// App.jsx
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Contect, { contactData } from "./Components/Contect/Contect";

const App = () => {
  const [searchTearm, setSearchTearm] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout setSearchTearm={setSearchTearm} />, // pass setter to layout
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "movies",
          element: <Movies searchTearm={searchTearm} />, // pass search term to Movies
        },
        {
          path: "contect",
          element: <Contect />,
          action: contactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
