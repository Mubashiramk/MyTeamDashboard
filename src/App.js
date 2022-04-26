import "./App.css";
import { UserAuth } from "./components/UserAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/UserAuthContext";
import { Home } from "./components/Home/home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="*" element={<Home />}></Route>
            <Route path="/signup" element={<UserAuth />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
