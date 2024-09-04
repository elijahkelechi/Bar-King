import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as landingPageLoader } from "./Pages/LandingPage";
import { loader as SinglePageLoader } from "./Pages/SingleCocktailPage";
import {
  About,
  LandingPage,
  SingleCocktailPage,
  HomeLayout,
  NewsLetter,
  Error,
  SinglePageErrors,
} from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        errorElement: <SinglePageErrors />,
        loader: landingPageLoader,
      },
      {
        path: `/cocktail/:drinkId`,
        element: <SingleCocktailPage />,
        loader: SinglePageLoader,
        errorElement: <SinglePageErrors />,
      },
      {
        path: "/newsletter",
        element: <NewsLetter />,
        errorElement: <SinglePageErrors />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <SinglePageErrors />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
