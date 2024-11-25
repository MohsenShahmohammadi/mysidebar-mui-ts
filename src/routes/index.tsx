import { ReactNode } from "react";
import { RouteType } from "./config";
import { Route } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import appRoutes from "./appRoutes";

const generationRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) =>
    route.index ? (
      <Route
        index
        path={route.path}
        element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
      />
    ) : (
      <Route
        path={route.path}
        element={<PageWrapper state={route.child ? undefined : route.state}>{route.element}</PageWrapper>}
        key={index}
      >
        {route.child && (
           generationRoute(route.child) 
        )}
      </Route>
    )
  );
};
export const routes: ReactNode=generationRoute(appRoutes)
