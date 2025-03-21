import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      {isLogin ? (
        <Login switchToRegister={() => setIsLogin(false)} />
      ) : (
        <Register switchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default AuthPage;
