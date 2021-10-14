import { motion, Variants } from "framer-motion";
import { Button } from "@/components/Button";
import { RouteProps, StyleRecord } from "@/types";

const routeVariants: Variants = {
  exit: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  enter: {},
};

const unselectedAvatarsVariants: Variants = {
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
  enter: {
    y: 0,
    opacity: 1,
  },
};

const heroVariants: Variants = {
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.18,
    },
  },
  enter: {
    height: 80,
    opacity: 1,
  },
};

export const Initial = (props: RouteProps) => {
  const { handleRouteChange } = props;

  return (
    <motion.div
      variants={routeVariants}
      initial={false}
      animate="enter"
      exit="exit"
    >
      <Button layoutId="next-button" onClick={handleRouteChange(1)}>
        Next
      </Button>

      <h1>CodersClub Framer Motion V2</h1>

      <section style={styles.section}>
        <motion.img
          variants={unselectedAvatarsVariants}
          style={styles.avatar}
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHAasvb7pkF0Q/profile-displayphoto-shrink_800_800/0/1540512765349?e=1639612800&v=beta&t=i1iZiz5mwHN6TeT3wHJ8kArPzK3G6gTQzLs2fUrm1PY"
          alt="Wellington Almeida"
        />
        <motion.img
          layoutId="clevir"
          style={styles.avatar}
          src="https://codersclub.com.br/wp-content/uploads/2021/08/profile-2-min.png"
          alt="Carlos Levir"
        />
        <motion.img
          variants={unselectedAvatarsVariants}
          style={styles.avatar}
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFlm43ZJ-XYCA/profile-displayphoto-shrink_800_800/0/1633627392746?e=1639612800&v=beta&t=KOsHCGgvVYqk5FRaJiVNpG-CAKNDYKMoiARw3OdbIEU"
          alt="Luke Morales"
        />
      </section>

      <footer>
        <motion.img
          variants={heroVariants}
          style={styles.hero}
          src="https://codersclub.com.br/wp-content/uploads/2021/06/BG2-1.jpg"
          alt="CodersClub"
        />
      </footer>
    </motion.div>
  );
};

const styles: StyleRecord = {
  section: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    margin: "20px 20px 60px 20px",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: "50%",
  },
  hero: {
    height: 80,
    objectFit: "cover",
    width: "calc(100% + 80px)",
    margin: -40,
    marginBottom: -44,
    borderRadius: "0px 0px 8px 8px",
  },
};
