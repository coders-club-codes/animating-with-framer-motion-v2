import { CSSProperties } from "react";

export type StyleRecord = Record<string, CSSProperties>;

export type RouteProps = {
  handleRouteChange: (route: number) => () => void;
};
