import { StyleRecord } from "@/types";
import { HTMLMotionProps, motion } from "framer-motion";

export const Button = (props: HTMLMotionProps<"button">) => {
  const { children, ...attrs } = props;

  return (
    <motion.button type="button" {...attrs} style={styles.button}>
      {children}
    </motion.button>
  );
};

const styles: StyleRecord = {
  button: {
    border: 0,
    background: "#ff2748",
    color: "#fff",
    padding: "12px 20px",
  },
};
