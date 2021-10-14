import { motion, Variants } from "framer-motion";
import { Button } from "@/components/Button";
import { RouteProps, StyleRecord } from "@/types";

const routeVariants: Variants = {
  initial: {},
  exit: {},
  enter: {},
};

const heroVariants: Variants = {
  initial: {
    height: 0,
  },
  enter: {
    height: 120,
  },
};

export const Profile = (props: RouteProps) => {
  const { handleRouteChange } = props;

  return (
    <motion.div
      style={styles.container}
      variants={routeVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <header>
        <motion.img
          variants={heroVariants}
          style={styles.hero}
          src="https://codersclub.com.br/wp-content/uploads/2021/06/BG2-1.jpg"
          alt="CodersClub"
        />
        <div style={styles.navigation}>
          <Button layoutId="prev-button" onClick={handleRouteChange(-1)}>
            Previous
          </Button>
          <Button layoutId="next-button" onClick={handleRouteChange(1)}>
            Next
          </Button>
        </div>
        <h1>Carlos Levir</h1>
      </header>

      <section style={styles.section}>
        <motion.img
          layoutId="clevir"
          style={styles.avatar}
          src="https://codersclub.com.br/wp-content/uploads/2021/08/profile-2-min.png"
          alt="Carlos Levir"
          animate={{
            rotate: 360,
          }}
        />

        <div>
          <p>
            Software Engineer, fascinated for the learning and always looking
            for the next level.
          </p>
          <p>
            Leadership of TC Radio Development Squad, developing new frontend
            features for financial market web and mobile applications, using
            ReactJs, React Native, Redux, Redux Saga, Styled Components e.t.c
          </p>
        </div>
      </section>
    </motion.div>
  );
};

const styles: StyleRecord = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  hero: {
    height: 120,
    objectFit: "cover",
    width: "calc(100% + 80px)",
    margin: "-44px -40px -60px -40px",
    borderRadius: "8px 8px 0px 0px ",
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 36,
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 16,
  },
  avatar: {
    width: 248,
    height: 248,
  },
};
