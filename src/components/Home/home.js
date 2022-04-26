import { useEffect, useState } from "react";
import { useAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router";
import { Header } from "../Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./home.css";
import { Dashboard } from "../../Pages/Dashboard";
import { Task } from "../../Pages/Task";
import { MyTeam } from "../../Pages/MyTeam";
import { Calendar } from "../../Pages/Calendar";
import { Report } from "../../Pages/Report";
import { Settings } from "../../Pages/Settings";

import { Sidebar } from "../Sidebar";

export const Home = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("This ran");
    if (!currentUser) {
      navigate("/login");
    }
  }, []);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  if (!currentUser) {
    return null;
  }
  return (
    <div className="main_div">
      {/* <div></div>
       */}
      <Sidebar
        item={currentUser.email}
        onClickLogout={handleLogout}
        error={error}
      />
      <div className="right_main">
        <Header
          item={currentUser.email}
          onClickLogout={handleLogout}
          error={error}
        />
        {/* {error && <div>{error}</div>} */}
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/myteam" element={<MyTeam />} />
            <Route path="/task" element={<Task />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/report" element={<Report />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
