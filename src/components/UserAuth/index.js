import Signp from "../SignUp";
import "./userAuth.css";
import { AuthProvider } from "../../context/UserAuthContext";

export const UserAuth = () => {
  return (
    <AuthProvider>
      <div className="auth-div">
        <Signp />
      </div>
    </AuthProvider>
  );
};
