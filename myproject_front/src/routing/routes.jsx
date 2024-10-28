import {
  HISTORY_ROUTE,
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
} from "./consts.js";
import NotFound from "../pages/notFound/NotFound.jsx";
import Home from "../pages/home/Home.jsx";
import History from "../pages/history/History.jsx";

export const publicRoutes = [
  {
    path: NOT_FOUND_ROUTE,
    Element: <NotFound/>,
  },
  {
    path: HOME_ROUTE,
    Element: <Home/>,
  },
  {
    path: HISTORY_ROUTE,
    Element: <History/>,
  },
]

export const authRoutes = []