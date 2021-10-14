import { ReactNode, useCallback, useState } from "react";

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import { Initial } from "./pages/Initial";
import { Profile } from "./pages/Profile";
import { RouteProps, StyleRecord } from "./types";
import { ScreenFinal } from "./pages/ScreenFinal";

const routes = (props: RouteProps) =>
  ({
    0: <Initial key="initial" {...props} />,
    1: <Profile key="profile" {...props} />,
    2: <ScreenFinal key="final" {...props} />,
  } as Record<number, ReactNode>);

const App = () => {
  const [route, setRoute] = useState(0);

  const handleRouteChange = useCallback(
    (routeNumber: number) => () =>
      setRoute((prevState) => prevState + routeNumber),
    []
  );

  return (
    <AnimatePresence>
      <AnimateSharedLayout type="crossfade">
        <motion.main layout style={styles.main}>
          <AnimatePresence exitBeforeEnter>
            {routes({ handleRouteChange })[route]}
          </AnimatePresence>
        </motion.main>
      </AnimateSharedLayout>
    </AnimatePresence>
  );
};

const styles: StyleRecord = {
  main: {
    padding: 40,
    borderRadius: 8,
    maxWidth: 580,
    background: "#232529",
  },
};

export default App;
