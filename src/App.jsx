import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending_Header from "./Components/Lending_Header";
import Lending_Product from "./Components/Lending_Product"; 
import Lending_Content from "./Components/Lending_Content";
import Lending_Footer from "./Components/Lending_Footer";
import DetailMotor from "./Components/Detail_Motor"; 
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Halaman Landing */}
          <Route
            path="/"
            element={
              <>
                <Lending_Header />
                <Lending_Content />
                <Lending_Product />
                <Lending_Footer />
              </>
            }
          />

          {/* Halaman Login */}
          <Route path="/login" element={<Login />} />

          {/* Halaman Register */}
          <Route path="/register" element={<Register />} />

          {/* Halaman Detail Motor */}
          <Route path="/detail-motor/:id" element={<DetailMotor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
