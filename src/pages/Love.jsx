import { motion } from "framer-motion";
import loveImg from "../assets/images/7.jpeg"; // choose your best image 💖

export default function Love() {
  return (
    <div style={styles.page}>
        <motion.h1
  style={styles.title}
  animate={{ scale: [1, 1.05, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Happy Valentine's Day!
</motion.h1>

      {/* ❤️ Image */}
      <motion.img
        src={loveImg}
        alt="love"
        style={styles.image}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* 💖 Text */}
      <motion.h1
  style={styles.text}
  animate={{ scale: [1, 1.06, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  I love you kuchupuchoo! ❤️
</motion.h1>
<p style={styles.ps}>Ps: A little cringe no? (hehe)</p>


    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
    page: {
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(#fff0f6, #ffe5ec)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative"
    },
  
    image: {
      width: "90vw",
      height: "75vh",
      objectFit: "cover",
      borderRadius: "24px",
      boxShadow: "0 25px 60px rgba(0,0,0,0.35)"
    },
  
    /* 💗 Neon pink heading */
    title: {
      marginBottom: "18px",
      fontSize: "3.8rem",
      fontFamily: "Merriweather, serif",
      fontWeight: 700,
      color: "#ff1e8a",                 // 💖 neon pink
      letterSpacing: "1.5px",
      textShadow: `
        0 0 8px rgba(255,30,138,0.6),
        0 0 18px rgba(255,30,138,0.5),
        0 0 30px rgba(255,30,138,0.4)
      `
    },
  
    /* 💖 Slightly smaller love text */
    text: {
      marginTop: "22px",
      fontSize: "1.2rem",               // ⬅ decreased size
      fontFamily: "Merriweather, serif",
      fontWeight: 700,
      color: "#ff4d6d",
      letterSpacing: "1px",
      textShadow: "0 0 12px rgba(255,77,109,0.45)"
    },
  
    petal: {
      position: "absolute",
      fontSize: "1.2rem",
      pointerEvents: "none"
    },
    ps: {
        marginTop: "10px",
        fontSize: "0.95rem",          // ⬅ smaller
        fontWeight: 700,              // ⬅ bold
        fontFamily: "Merriweather, serif",
        color: "#555",
        letterSpacing: "0.4px",
        marginLeft:"-2vh"
      }
      
  };
  