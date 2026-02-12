import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    q: "What color do I like the most?",
    options: ["Red", "Black", "White", "Pink"],
    answer: "White"
  },
  {
    q: "Most attractive part of your body for me?",
    options: ["Hair", "Hand", "Chest/Back", "Dimples"],
    answer: "Dimples"
  },
  {
    q: "If I was in a bad mood and said ‘I’m fine’, what should you actually do?",
    options: ["Bring me food", "Stay quiet", "Go away", "Hug me"],
    answer: "Bring me food"
  },
  {
    q: "If I suddenly stopped talking for an hour, what would you assume first?",
    options: ["Sleeping", "Eating", "Reels", "Study"],
    answer: "Sleeping"
  },
  {
    q: "What’s one habit of mine you pretend is ‘fine’ but secretly adore?",
    options: ["Eye winks", "Laugh", "Cheek kisses", "Bicep Holds"],
    answer: "Bicep Holds"
  }
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleOption = (opt) => {
    const correct = questions[index].answer;

    if (opt === correct) {
      setScore((s) => s + 1);
    } else {
      alert(`Wrong! Correct answer: ${correct} 💗`);
    }

    if (index === questions.length - 1) {
      if (score + (opt === correct ? 1 : 0) === 5) {
        navigate("/letter");
      } else {
        alert("Score 5/5 to unlock the letter 💌 Try again!");
        setIndex(0);
        setScore(0);
      }
    } else {
      setIndex((i) => i + 1);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <p style={styles.progress}>
          Question {index + 1} / {questions.length}
        </p>

        <h2 style={styles.question}>
          {questions[index].q}
        </h2>

        <div style={styles.options}>
          {questions[index].options.map((opt) => (
            <button
              key={opt}
              style={styles.option}
              onClick={() => handleOption(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        <p style={styles.score}>💖 Score: {score}</p>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(180deg, #fff0f6, #ffe4ec)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    background: "#ffffff",
    padding: "2.8rem",
    borderRadius: "26px",
    width: "90%",
    maxWidth: "480px",
    textAlign: "center",
    boxShadow: "0 25px 45px rgba(0,0,0,0.15)"
  },

  progress: {
    fontSize: "0.95rem",
    color: "#c9184a",
    marginBottom: "0.8rem"
  },

  question: {
    fontFamily: "Merriweather, serif",   // ✅ classy & elegant
  fontWeight: 700,  
    color: "#b03060",
    marginBottom: "2rem"
  },

  options: {
    display: "flex",
    flexDirection: "column",
    gap: "0.9rem"
  },

  option: {
    padding: "0.9rem",
    borderRadius: "16px",
    border: "none",
    background: "#ffccd5",
    fontSize: "1.05rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontWeight: "500"
  },

  score: {
    marginTop: "1.8rem",
    fontSize: "1.05rem",
    color: "#6a040f"
  }
};
