import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpeg";
import img5 from "../assets/images/5.jpeg";
import img6 from "../assets/images/6.jpeg";

const balloons = [
  { id: 1, color: "#ff4d6d", img: img1, text: "To many more waffle, momo, puchka dates together! 💖" },
  { id: 2, color: "#ff85a1", img: img2, text: "It really feels surreal when you look at me this way ✨" },
  { id: 3, color: "#ffd6e0", img: img3, text: "Comfort, warmth, and love — all in one person 🤍" },
  { id: 4, color: "#ff758f", img: img4, text: "Iss joru ke gulaam ho aap (hehe)" },
  { id: 5, color: "#ff9aa2", img: img5, text: "Your hands and my waist — perfect combo 😉" },
  { id: 6, color: "#ffb3c6", img: img6, text: "And this is just the beginning of many more 🎈" }
];

export default function Balloons() {
  const [active, setActive] = useState(null);
  const [clicked, setClicked] = useState([]);
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 640;

  // 🔑 responsive radii
  const radiusX = isMobile ? window.innerWidth * 0.32 : 320;
  const radiusY = isMobile ? window.innerHeight * 0.22 : 210;
  const offsetX = isMobile ? -10 : -40;
  const offsetY = isMobile ? -20 : -40;

  const handleBalloonClick = (b) => {
    setActive(b);
    if (!clicked.includes(b.id)) {
      setClicked((prev) => [...prev, b.id]);
    }
  };

  useEffect(() => {
    if (clicked.length === balloons.length) {
      const timer = setTimeout(() => navigate("/love"), 1200);
      return () => clearTimeout(timer);
    }
  }, [clicked, navigate]);

  return (
    <div style={styles.page}>
      {/* 🌸 Floating petals */}
      {Array.from({ length: isMobile ? 18 : 28 }).map((_, i) => (
        <motion.div
          key={i}
          style={styles.petal}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -60,
            opacity: 0.7
          }}
          animate={{ y: window.innerHeight + 120 }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 4
          }}
        >
          🌸
        </motion.div>
      ))}

      {/* 💗 Heading */}
      <motion.h1
        style={styles.heading}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Pop the balloons!
      </motion.h1>

      {/* 🎈 Balloons */}
      {balloons.map((b, i) => {
        const angle = (2 * Math.PI * i) / balloons.length - Math.PI / 2;
        const x = radiusX * Math.cos(angle) + offsetX;
        const y = radiusY * Math.sin(angle) + offsetY;

        return (
          <motion.div
            key={b.id}
            style={styles.balloonWrapper}
            initial={{ x, y }}
            animate={{ y: y + (i % 2 === 0 ? -10 : 10) }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => handleBalloonClick(b)}
          >
            <div
              style={{
                ...styles.balloon,
                background: b.color,
                width: isMobile ? "72px" : "90px",
                height: isMobile ? "96px" : "120px"
              }}
            />
            <div
              style={{
                ...styles.string,
                height: isMobile ? "45px" : "60px"
              }}
            />
          </motion.div>
        );
      })}

      {/* 💌 Popup */}
      <AnimatePresence>
        {active && (
          <motion.div
            style={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              style={{
                ...styles.card,
                width: isMobile ? "90vw" : "420px"
              }}
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.img} alt="memory" style={styles.image} />
              <p style={styles.text}>{active.text}</p>
              <button style={styles.close} onClick={() => setActive(null)}>
                Close 💗
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(#fff0f6, #ffe5ec)",
    position: "relative",
    overflow: "hidden"
  },

  petal: {
    position: "absolute",
    fontSize: "1.2rem",
    pointerEvents: "none",
    zIndex: 1
  },

  heading: {
    position: "absolute",
    top: "6%",
    width: "100%",
    textAlign: "center",
    fontFamily: "Merriweather, serif",
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    fontWeight: 700,
    color: "#ff4d6d",
    zIndex: 5,
    textShadow: "0 0 10px rgba(255,77,109,0.4)"
  },

  balloonWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 3
  },

  balloon: {
    borderRadius: "50% 50% 45% 45%",
    boxShadow: "0 14px 30px rgba(0,0,0,0.25)"
  },

  string: {
    width: "2px",
    background: "#999",
    marginTop: "4px"
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20
  },

  card: {
    background: "#fff",
    borderRadius: "22px",
    padding: "22px",
    textAlign: "center",
    boxShadow: "0 30px 60px rgba(0,0,0,0.35)"
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "14px",
    marginBottom: "16px"
  },

  text: {
    fontFamily: "Merriweather, serif",
    fontWeight: 700,
    fontSize: "1.05rem",
    marginBottom: "18px"
  },

  close: {
    padding: "10px 22px",
    fontSize: "1rem",
    border: "none",
    background: "#ff4d6d",
    color: "#fff",
    borderRadius: "22px",
    cursor: "pointer"
  }
};
