import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/question"), 500);
          return 100;
        }
        return p + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [navigate]);

  const hearts = 10;
  const filled = Math.floor((progress / 100) * hearts);

  return (
    <div style={styles.container}>
      {/* Teddy */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={styles.teddy}
      >
        🧸
      </motion.div>

      {/* Heart Loader */}
      <div style={styles.bar}>
        {[...Array(hearts)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ scale: i < filled ? 1 : 0.5 }}
            style={{
              ...styles.heart,
              opacity: i < filled ? 1 : 0.2
            }}
          >
            ❤️
          </motion.span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#ffe6ef",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  teddy: {
    fontSize: "4rem",
    marginBottom: "1rem"
  },
  bar: {
    display: "flex",
    gap: "0.4rem",
    padding: "0.6rem 1rem",
    border: "3px solid #8b0000",
    borderRadius: "20px",
    background: "#ffd1dc"
  },
  heart: {
    fontSize: "1.5rem"
  }
};
