import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Question() {
  const navigate = useNavigate();
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    setNoPos({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.question}>
        Want to come on this journey with me? 💖
      </h1>

      <div style={styles.buttons}>
        <button style={styles.yes} onClick={() => navigate("/envelope")}>
          YES 💕
        </button>

        <button
          style={{
            ...styles.no,
            transform: `translate(${noPos.x}px, ${noPos.y}px)`
          }}
          onMouseEnter={moveNo}
        >
          NO 😅
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#fff0f5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  question: {
    fontFamily: "Merriweather, serif",   // ✅ classy & elegant
  fontWeight: 700,  
    marginBottom: "2rem"
  },
  buttons: {
    display: "flex",
    gap: "2rem",
    position: "relative"
  },
  yes: {
    padding: "0.8rem 1.6rem",
    fontSize: "1.2rem",
    background: "#ff69b4",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer"
  },
  no: {
    padding: "0.8rem 1.6rem",
    fontSize: "1.2rem",
    background: "#ccc",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    position: "relative"
  }
};
