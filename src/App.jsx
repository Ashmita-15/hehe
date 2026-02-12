import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./pages/Loader";
import Question from "./pages/Question";
import Envelope from "./pages/Envelope";
import Letter from "./pages/Letter";
import Quiz from "./pages/Quiz";
import Balloon from "./pages/Balloons";
import Love from "./pages/Love";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/question" element={<Question />} />
        <Route path="/envelope" element={<Envelope />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/balloon" element={<Balloon />} />
        <Route path="/love" element={<Love />} />


      </Routes>
    </BrowserRouter>
  );
}
