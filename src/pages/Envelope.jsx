import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

export default function Envelope() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const floatingHearts = useMemo(() => Array.from({ length: 30 }), []);

  return (
    <div style={styles.container}>
      {/* Floating hearts background */}
      {floatingHearts.map((_, i) => {
  const startY = Math.random() * window.innerHeight; // random start position

  return (
    <motion.div
      key={i}
      style={{
        position: "absolute",
        fontSize: "1.6rem",
        left: `${Math.random() * 100}%`,
        opacity: 0.6
      }}
      initial={{ y: startY }}
      animate={{ y: -200 }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      💗
    </motion.div>
  );
})}

      <div style={styles.center}>
        <h1 style={styles.text}>Hello Rohit Dutta!</h1>

        {/* EXACT envelope */}
        <div style={styles.envelope} onClick={() => setShowPopup(true)}>
          {/* back */}
          <div style={styles.back} />

          {/* left fold */}
          <div style={styles.leftFold} />

          {/* right fold */}
          <div style={styles.rightFold} />

          {/* bottom fold */}
          <div style={styles.bottomFold} />

          {/* outline */}
          <div style={styles.border} />

          {/* heart */}
          <div style={styles.heart}>💗</div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
            <h2>Ready for the ultimate quiz?</h2>
            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
              <button style={styles.btn} onClick={() => navigate("/quiz")}>
                Yes
              </button>
              <button style={styles.btn} onClick={() => navigate("/quiz")}>
                Obviously Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const borderColor = "#4a1f1f";

const styles = {
  container: {
    height: "100vh",
    background: "#fff0f6",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  center: {
    zIndex: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem"
  },

  text: {
    fontFamily: "Merriweather, serif",   // ✅ classy & elegant
  fontWeight: 700,  
    color: "#b03060"
  },

  envelope: {
    position: "relative",
    width: "360px",
    height: "230px",
    cursor: "pointer"
  },

  back: {
    position: "absolute",
    inset: 0,
    background: "#ffffff"
  },

  leftFold: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "50%",
    height: "100%",
    background: "#e6e6e6",
    clipPath: "polygon(0 0, 100% 50%, 0 100%)"
  },

  rightFold: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "50%",
    height: "100%",
    background: "#e6e6e6",
    clipPath: "polygon(100% 0, 0 50%, 100% 100%)"
  },

  bottomFold: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
    background: "#f5f5f5",
    clipPath: "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)"
  },

  border: {
    position: "absolute",
    inset: 0,
    border: `3px solid ${borderColor}`,
    boxSizing: "border-box"
  },

  heart: {
    position: "absolute",
    top: "52%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "2.6rem"
  },

  popupOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20
  },

  popup: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
  },

  btn: {
    padding: "0.7rem 1.4rem",
    borderRadius: "999px",
    border: "none",
    background: "#ff6b9c",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer"
  }
};
