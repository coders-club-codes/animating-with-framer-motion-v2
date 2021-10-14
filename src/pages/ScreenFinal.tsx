import { Button } from "@/components/Button";
import { RouteProps, StyleRecord } from "@/types";
import { motion, useCycle, Variants } from "framer-motion";

const avatarVariants: Variants = {
  bouncing: {
    x: 0,
    y: [20, -20],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.88,
        ease: "easeInOut",
      },
    },
  },
  floating: {
    x: [20, -20],
    y: [20, -20],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.28,
        ease: "easeInOut",
      },
      y: {
        yoyo: Infinity,
        duration: 0.88,
        ease: "easeInOut",
      },
    },
  },
};

export const ScreenFinal = (props: RouteProps) => {
  const [animation, cycleAnimation] = useCycle("bouncing", "floating");

  const handleCycleAnimation = () => cycleAnimation();

  const { handleRouteChange } = props;

  return (
    <motion.div style={styles.container}>
      <header>
        <img
          style={styles.hero}
          src="https://codersclub.com.br/wp-content/uploads/2021/06/BG2-1.jpg"
          alt="CodersClub"
        />
        <div style={styles.navigation}>
          <Button onClick={handleRouteChange(-2)}>Reset</Button>
          <Button layoutId="prev-button" onClick={handleRouteChange(-1)}>
            Previous
          </Button>
        </div>
        <h1>CodersClub</h1>
      </header>

      <section style={styles.section}>
        <div>
          <p>
            A maioria dos cursos do mercado tem o foco em ensinar a parte
            técnica, mas não ensinam como você ter resultado e se desenvolver
            como programador. A comunidade Coders Club vem para ser um
            diferencial no crescimento profissional por completo.
          </p>

          <Button onTap={handleCycleAnimation}>Go Crazy</Button>
        </div>

        <motion.img
          layoutId="clevir"
          style={styles.avatar}
          src="https://codersclub.com.br/wp-content/uploads/2021/08/profile-2-min.png"
          alt="Carlos Levir"
          variants={avatarVariants}
          animate={animation}
        />
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
    width: 124,
    height: 124,
    borderRadius: "50%",
  },
};
