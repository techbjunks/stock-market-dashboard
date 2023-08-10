import Path from "./routes";
import { Suspense, lazy } from "react";
import NotificationProvider from "./hooks/NotificationProvider";
import Notification from "./common/components/Notification";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./common/ui/NotFound";

const Home = lazy(() => import("./views/Home"));
const Details = lazy(() => import("./views/Details"));

const Base = (): JSX.Element => {
  return (
    <NotificationProvider>
      <Router>
        <Notification />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={Path.HOME} element={<Home />} />
            <Route path={Path.DETAIL} element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </NotificationProvider>
  );
};

export default Base;
