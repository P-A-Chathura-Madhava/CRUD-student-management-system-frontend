import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
/* Import react router */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./students/AddStudent";
import UpdateStudent from "./students/UpdateStudent";
import ViewStudent from "./students/ViewStudent";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addStudent" element={<AddStudent />} />
          {/* Adding Update Student path */}
          <Route path="/updateStudent/:id" element={<UpdateStudent />} />
          {/* Adding View Student path */}
          <Route path="/viewStudent/:id" element={<ViewStudent />} />
        </Routes>
        {/* <Home /> remove when routing */}
      </Router>
    </div>
  );
}

export default App;
