import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Letter() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const toggleScroll = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setOpen((prev) => {
      if (!prev) setHasOpened(true);
      return !prev;
    });
  };

  return (
    <div style={styles.page} className="letter-page">
      <style>{mobileStyles}</style>

      {/* Rope sound */}
      <audio ref={audioRef} src="/rope.mp3" />

      {/* 🪵 Rod */}
      <div style={styles.rod} className="letter-rod">
        <div style={styles.knob} />
        <div style={styles.knob} />

        {/* 🪢 Rope (attached, no arrowhead) */}
        <div style={styles.ropeAnchor} onClick={toggleScroll}>
          <motion.div
            style={styles.rope}
            className="letter-rope"
            animate={{
              scaleY: open ? 1.05 : 1,
              rotate: open ? 1.2 : 0
            }}
            transition={{ type: "spring", stiffness: 160, damping: 14 }}
          />
        </div>
      </div>

      {/* 📜 Scroll */}
      <motion.div
        style={styles.scrollContainer}
        className="letter-scroll-container"
        animate={{ height: open ? "460px" : "90px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div style={styles.scroll}>
          <div style={styles.tornTop} />

          <div style={styles.content} className="letter-content">
            <h2>Dear Ro 💖</h2>

            <p>
              I have written a lot of handwritten letters/notes for you, this is a little different.This is the one that will stay with us forever and ever!
            </p>
            <p>
              Thank you for being my best friend,partner in food,travel,love and life.Stay the same my boyfie,hehe. I love you!💗
            </p>
            <p>
              This journey is sweeter because you’re in it 🤍
            </p>

            <p style={{ marginTop: "2rem" }}>
              Only yours,<br />Ash!
            </p>
          </div>

          {/* Wax seal */}
          <div style={styles.waxSeal} className="letter-wax">
            ❤️
          </div>
        </div>
      </motion.div>

      {/* NEXT */}
      {hasOpened && (
        <motion.div
          style={styles.next}
          className="letter-next"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => navigate("/balloon")}
        >
          Click here for next 🎈
        </motion.div>
      )}

      {!hasOpened && <p style={styles.hint}>Pull the rope to unroll 📜</p>}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(#fff3dd, #f6d7a7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "70px",
    fontFamily: "Merriweather, serif"
  },

  rod: {
    position: "relative",
    width: "460px",
    height: "18px",
    background: "#6b3e26",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 14px",
    zIndex: 5
  },

  knob: {
    width: "26px",
    height: "26px",
    background: "#3e1f0f",
    borderRadius: "50%",
    marginTop: "-4px"
  },

  ropeAnchor: {
    position: "absolute",
    right: "70px",
    top: "100%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 10
  },

  rope: {
    width: "8px",
    height: "140px",
    background:
      "repeating-linear-gradient(45deg,#3e2a1a,#3e2a1a 6px,#5a3b24 6px,#5a3b24 12px)",
    borderRadius: "6px",
    transformOrigin: "top"
  },

  scrollContainer: {
    width: "460px",
    overflow: "hidden",
    marginTop: "70px",
    zIndex: 1
  },

  scroll: {
    background: "#d4b170",
    borderRadius: "6px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    position: "relative"
  },

  tornTop: {
    height: "18px",
    background:
      "repeating-linear-gradient(-45deg,#d4b170 0,#d4b170 12px,#c9a35f 12px,#c9a35f 24px)"
  },

  content: {
    padding: "30px",
    color: "#3b2a1a",
    fontSize: "1.1rem",
    lineHeight: "1.8"
  },

  waxSeal: {
    position: "absolute",
    bottom: "20px",
    right: "30px",
    width: "46px",
    height: "46px",
    background: "#b22222",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.4rem",
    color: "#fff",
    boxShadow: "0 6px 12px rgba(0,0,0,0.3)"
  },

  next: {
    marginTop: "22px",
    fontSize: "1.2rem",
    color: "#b22222",
    cursor: "pointer",
    textDecoration: "underline",
    fontWeight: "bold"
  },

  hint: {
    marginTop: "18px",
    fontSize: "1rem",
    opacity: 0.7
  }
};

/* ================= MOBILE FIX ================= */

const mobileStyles = `
@media (max-width: 600px) {
  .letter-rod {
    width: 90vw;
  }

  .letter-scroll-container {
    width: 90vw;
  }

  .letter-content {
    padding: 22px;
    font-size: 1rem;
  }

  .letter-rope {
    height: 110px;
  }

  .letter-wax {
    width: 38px;
    height: 38px;
    font-size: 1.1rem;
  }

  .letter-next {
    font-size: 1.05rem;
  }
}
`;

