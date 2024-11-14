import WelcomePage from "./pages/Login";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/restaurant",
    element: <App />,
  },
];

export default routes;
